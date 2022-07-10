import {useReducer, useState, createContext} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import {
    Url,
    PROJECT_ACTIVE,
    PROJECTS_LOADED_SUCCESS,
    PROJECTS_LOADED_FAIL,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    FIND_PROJECT
} from './constant';
import {ProjectReducer} from './reducers/ProjectReducer';

export const ProjectContext = createContext();

const ProjectContextProvider = ({children}) => {
    //State
    const [projectState, dispatch] = useReducer(ProjectReducer, {
        project: null,
        projects: [],
        projectsLoading: true,
        projectActive: null,
    });
    const [invitations, setInvitations] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);

    const history = useHistory();

    //Choose project to display on AppContent
    const setProjectActive = (projectId, defaultProjectName) => {
        let project;
        if(defaultProjectName && !projectId) {
            project = projectState.projects.find(project => (project.name==='Inbox' && project.type === 'DEFAULT' ));
            project = {...project, name: defaultProjectName};
            const formatName = defaultProjectName.toLowerCase();
            history.push(`/app/${formatName}`);
        }
        else {
            project = projectState.projects.find(project => project.id === projectId);
            history.push(`/app/project/${projectId}`);
        }
        
        dispatch({type: PROJECT_ACTIVE, payload: project });
    }

    //Handle url 
    const getProjectFromUrl = (projects, url) => {
        const arr = url.split('/');
        let project;
        if(arr[2]==='project') {
            project = projects.find(project => project.id===arr[3]);
        }
        else if(arr[2] === 'inbox') {
            project = projects.find(project => (project.name === 'Inbox' && project.type === 'DEFAULT' ));  
        }
        else if(arr[2] === 'upcoming') {
            project = projects.find(project => (project.name==='Inbox' && project.type === 'DEFAULT' ));
            project = {...project, name: 'Upcoming'};
        }
        else {
            history.push('/app');
            project = projects.find(project => (project.name==='Inbox' && project.type === 'DEFAULT' ));
            project = {...project, name: 'Today'};
        }
        return project;
    }

    //Get all projects
    const getProjects = async () => {
        try {
            const response = await axios.get(`${Url}/project`);
            const url = history.location.pathname;
            if(response.data.success) {
                dispatch({ type: PROJECTS_LOADED_SUCCESS, payload: response.data.projects});
                const project = getProjectFromUrl(response.data.projects, url);
                dispatch({type: PROJECT_ACTIVE, payload: project});
            }
        }
        catch(err) {
            dispatch({ type: PROJECTS_LOADED_FAIL });
        }
    }

    //Add project
    const addProject = async newProject => {
        try {
            const response = await axios.post(`${Url}/project`, newProject);
            if(response.data.success) {
                dispatch({ type: ADD_PROJECT, payload: response.data.project });
                setProjectActive(response.data.project.id);
                dispatch({type: PROJECT_ACTIVE, payload: response.data.project });
            }

            return response.data;
        }
        catch (err) {
            console.log(err.stack);
            return err.stack;
        }
    }

    //Duplicate project
    const duplicateProject = async projectId => {
        try {
            const response = await axios.post(`${Url}/project/duplicate`, null, {
                params: {
                    projectId
                }
            });
            if(response.data.success) {
                dispatch({ type: ADD_PROJECT, payload: response.data.project });
                setProjectActive(response.data.project.id);
                dispatch({type: PROJECT_ACTIVE, payload: response.data.project })
            }

            return response.data;
        }
        catch (err) {
            console.log(err.stack);
            return err.stack;
        }
    }

    // Find project when user is updating project
	const findProject = projectId => {
        if(!projectId) {
            dispatch({ type: FIND_PROJECT, payload: null });
            return;
        }
		const project = projectState.projects.find(project => project.id === projectId);
		dispatch({ type: FIND_PROJECT, payload: project });
	}

    //Update project
    const updateProject = async updatedProject => {
        const {projectActive} = projectState;
        try {
            const response = await axios.put(`${Url}/project/${updatedProject.id}`, updatedProject);
            if(response.data.success) {
                dispatch({ type: UPDATE_PROJECT, payload: updatedProject })
            }

            return response.data;
        }
        catch (err) {
            console.log(err.stack);
            return err.stack;
        }
    }

    //Leave Project 
    const leaveProject = async (userId, projectId) => {
        const {projectActive} = projectState;
        try {
            const response = await axios.delete(`${Url}/project/collaborator`, {
                params: {
                    projectId,
                    collaboratorId: userId
                }
            });

            if(response.data.success) {
                if(projectActive.id === projectId)
                    setProjectActive(null, 'Inbox');
                dispatch({type: DELETE_PROJECT, payload: projectId});
            }

            return response.data;
        }
        catch(err) {
            console.log(err.stack);
            return err.stack;
        }
    }

    //Delete project
    const deleteProject = async projectId => {
        const {projectActive} = projectState;
        try {
            const response = await axios.delete(`${Url}/project/${projectId}`);
            if(response.data.success) {
                if(projectActive.id === projectId)
                    setProjectActive(null, 'Inbox');
                dispatch({ type: DELETE_PROJECT, payload: projectId })
            }
            return response.data;
        }
        catch (err) {
            console.log(err.stack);
            return err.stack;
        }
    }

    //Get invitations
    const getInvitations = async () => {
        try {
            const response = await axios.get(`${Url}/project/invitation`);

            if(response.data.success) {
                setInvitations(response.data.invitations);
            }  
            console.log(response.data.invitations);

            return response.data;
        }
        catch (err) {
            console.log(err.stack);
            return err;
        }
    }

    //Accept invitation 
    const acceptInvitation = async (projectId) => {
        try {
            const response = await axios.post(`${Url}/project/invitation`,null, {
                params: {projectId}
            });
            console.log(response);

            if(response.data.success) {
                const newInvitations = invitations.filter(invitation => invitation.projectId!==projectId);
                setInvitations(newInvitations);
                dispatch({type: ADD_PROJECT, payload: response.data.project});
                setProjectActive(response.data.project.id);
                dispatch({type: PROJECT_ACTIVE, payload: response.data.project })
            }

            return response.data;
        }
        catch(err) {
            console.log(err.stack);
            return err;
        }
    }

    //Deny invitation
    const denyInvitation = async (projectId, userId) => {
        try {
            const response = await axios.delete(`${Url}/project/invitation`,{
                params: {
                    projectId,
                }
            });
            
            if(response.data.success) {
                const newInvitations = invitations.filter(invitation => invitation.projectId!==projectId);
                setInvitations(newInvitations);
            }

            return response.data;
        }
        catch(err) {
            console.log(err.stack);
            return err;
        }
    }
    //Get collaborator of project
    const getCollaboratorsOfProject = async (projectId) => {
        try {
            const response = await axios.get(`${Url}/project/collaborator`, {
                params: {projectId}
            });

            if(response.data.success) {
                return response.data.collaborators;
            }
        }
        catch(err) {
            if (err.response.data) return err.response.data
			else return { success: false, message: err.message }
        }
    }
    
    //Delete collaborator
    const deleteCollaborator = async (projectId, userId) => {
        try {
            const response = await axios.delete(`${Url}/project/collaborator`,{
                params: {
                    projectId,
                    collaboratorId: userId,
                }
            });
            return response.data;
        }
        catch(err) {
            if (err.response.data) return err.response.data
			else return { success: false, message: err.message }
        }
    }

    //Invite user to project
    const invitedUser = async (projectId, userId) => {
        try {
            const response = await axios.post(`${Url}/project/invite`,null, {
                params: {
                    projectId,
                    invitedUser: userId,
                }
            });
            return response.data;
        }
        catch(err) {
            if (err.response.data) return err.response.data
			else return { success: false, message: err.message }
        }
    }

    

    //Data
    const ProjectContextData = {
        projectState,
        setProjectActive,
        getProjects,
        addProject,
        duplicateProject,
        findProject,
        updateProject,
        leaveProject,
        deleteProject,

        invitations,
        getInvitations,
        acceptInvitation,
        denyInvitation,
        getCollaboratorsOfProject,
        deleteCollaborator,
        invitedUser,

        showCompleted,
        setShowCompleted,
    };
    
    return (
        <ProjectContext.Provider value={ProjectContextData}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;