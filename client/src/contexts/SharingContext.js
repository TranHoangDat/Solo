import {useReducer, createContext} from 'react';
import axios from 'axios';

import {
    Url,
    LOAD_COLLABORATORS_SUCCESS,
    LOAD_COLLABORATORS_FAIL,
    ADD_COLLABORATOR,
    DELETE_COLLABORATOR,
    LOAD_INVITED_USERS_SUCCESS,
    LOAD_INVITED_USERS_FAIL,
    INVITE_USER,
    DELETE_INVITED_USER
} from './constant';
import {SharingReducer} from './reducers/SharingReducer';

export const SharingContext = createContext();

const SharingContextProvider = ({children}) => {
    //State
    const [sharingState, dispatch] = useReducer(SharingReducer, {
        collaborators: [],
        invitedUsers: [],
    });

    /*--------------------------------------------------------*/
    //Function of collaborators
    //Lấy danh sách người dùng tham gia vào dự án
    const loadCollaborators = async (projectId) => {
        if(!projectId) return;
        try {
            const response = await axios.get(`${Url}/project/collaborator`, {
                params: {projectId}
            });

            if(response.data.success) {
                dispatch({type: LOAD_COLLABORATORS_SUCCESS, payload: response.data.collaborators});
            }
            else {
                dispatch({type: LOAD_COLLABORATORS_FAIL, payload: null});
            }
        }
        catch (err) {
            console.log(err.stack);
            return err;
        }
    }

    const getCollaboratorsOfProject = async (projectId) => {
        if(!projectId) return;
        try {
            const response = await axios.get(`${Url}/project/collaborator`, {
                params: {projectId}
            });

            if(response.data.success) {
                return response.data.collaborators;
            }
        }
        catch (err) {
            console.log(err.stack);
            return err;
        }
    }

    //Xóa 1 người tham dự ra khỏi đề tài
    const deleteCollaborator = async (projectId, collaboratorId) => {
        try {
            const response = await axios.delete(`${Url}/project/collaborator`,{
                params: {
                    projectId,
                    collaboratorId,
            }})
            console.log(response);

            if(response.data.success) {
                dispatch({type: DELETE_COLLABORATOR, payload: collaboratorId});
            }
            return response.data;
        }
        catch (err) {
            console.log(err.stack);
            return err;
        }
    }

    /*--------------------------------------------------------*/
    //Function of invited user
    //Lấy danh sách những người dùng đã được mời trong dự án
    const loadInvitedUsers = async (projectId) => {
        if(!projectId) return;
        try {
            const response = await axios.get(`${Url}/project/sharing`, {
                params: {projectId}
            });

            if(response.data.success) {
                dispatch({type: LOAD_INVITED_USERS_SUCCESS, payload: response.data.invitedUsers});
            }
            else {
                dispatch({type: LOAD_INVITED_USERS_FAIL, payload: null});
            }
            return response.data;
        }
        catch (err) {
            console.log(err.stack);
            return err;
        }
    }

    //Mời một người dùng vào dự án
    const inviteUser = async (projectId, userId) => {
        const {collaborators, invitedUsers} = sharingState;
        const existInCollaborative = collaborators.find(({id}) => id ===userId);
        const existInSharing = invitedUsers.find(({id}) => id ===userId);
        if(existInCollaborative || existInSharing)
            return;
            
        try {
            const response = await axios.post(`${Url}/project/sharing`, null, {
                params: {
                    invitedUser: userId,
                    projectId,
                }
            })
            if(response.data.success) {
                dispatch({type: INVITE_USER, payload: response.data.invitedUser});
            }

            return response.data;
        }
        catch(err) {
            console.log(err.stack);
            return err;
        }
    }

    //Mời 1 người dùng vào dự án 
    const inviteUserByEmail = async (projectId, email) => {
        try {
            const response = await axios.post(`${Url}/project/sharing`, null, {
                params: {
                    projectId,
                    email,
                }
            })

            if(response.data.success) {
                dispatch({type: INVITE_USER, payload: response.data.invitedUser});
            }

            return response.data;
        }
        catch(err) {
            console.log(err.stack);
            return err;
        }
    }

    //Hủy bỏ mời người dùng vào dự án
    const deleteInvitedUser = async(projectId, invitedUser) => {
        try {
            const response = await axios.delete(`${Url}/project/sharing`,{
                params: {
                    projectId,
                    invitedUser,
                }
            });
            
            if(response.data.success) {
                dispatch({type: DELETE_INVITED_USER, payload: invitedUser});
            }

            return response.data;
        }
        catch(err) {
            console.log(err.stack);
            return err;
        }
    } 

    ////Data
    const SharingContextData = {
        sharingState,
        loadCollaborators,
        getCollaboratorsOfProject,
        deleteCollaborator,

        loadInvitedUsers,
        inviteUser,
        inviteUserByEmail,
        deleteInvitedUser
    };
    
    return (
        <SharingContext.Provider value={SharingContextData}>
            {children}
        </SharingContext.Provider>
    )
}

export default SharingContextProvider;