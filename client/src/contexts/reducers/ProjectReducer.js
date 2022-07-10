import {
    PROJECT_ACTIVE,
    PROJECTS_LOADED_SUCCESS,
    PROJECTS_LOADED_FAIL,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    FIND_PROJECT
} from '../constant';

export const ProjectReducer = (state, action) => {
    const {type, payload} = action;
    const {projects, projectActive} = state;
    
    let newState;
    switch(type) {
        case PROJECT_ACTIVE: 
            newState = {
                ...state,
                projectActive: payload,
            }
            return newState;
        case PROJECTS_LOADED_SUCCESS:
            newState = {
                ...state, 
                projects: payload,
                projectLoading: false
            }
            return newState;
        case PROJECTS_LOADED_FAIL:
            return {
                ...state, 
                projects: [],
                projectLoading: false
            }
        case ADD_PROJECT: 
            return {
                ...state, 
                projects: [...projects, payload],
                project: null,
            }
        case FIND_PROJECT:
            return {
                ...state,
                project: payload
            }
        case UPDATE_PROJECT: 
            return {
                ...state, 
                projects: projects.map(project => {
                    return project.id === payload.id ? {...project, ...payload} : project;
                }),
                projectActive: payload.id===projectActive.id ? {...projectActive, ...payload} : projectActive
            }
        case DELETE_PROJECT: 
            return {
                ...state, 
                projects: projects.filter(project => project.id !== payload)
            }
        default:
            return state;
    }
}