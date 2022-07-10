import {
    LOAD_COLLABORATORS_SUCCESS,
    LOAD_COLLABORATORS_FAIL,
    DELETE_COLLABORATOR,
    LOAD_INVITED_USERS_SUCCESS,
    LOAD_INVITED_USERS_FAIL,
    INVITE_USER,
    DELETE_INVITED_USER
} from '../constant';

export const SharingReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case LOAD_COLLABORATORS_SUCCESS:
            return {
                ...state,
                collaborators: payload,
            };
        case LOAD_COLLABORATORS_FAIL:
            return {
                ...state,
                collaborators: [],
            };
        case DELETE_COLLABORATOR: 
            return {
                ...state,
                collaborators: state.collaborators.filter(collaborator => collaborator.id !== payload),
            };
        case LOAD_INVITED_USERS_SUCCESS:
            return {
                ...state,
                invitedUsers: payload,
            }
        case LOAD_INVITED_USERS_FAIL:
            return {
                ...state,
                invitedUser: [],
            }
        case INVITE_USER:
            return {
                ...state,
                invitedUsers: [payload, ...state.invitedUsers],
            }
        case DELETE_INVITED_USER:
            return {
                ...state,
                invitedUsers: state.invitedUsers.filter(item => item.id!==payload),
            };
        default: 
            return {...state};
    }
}