import {
    SECTIONS_LOADED_SUCCESS,
    SECTIONS_LOADED_FAIL,
    ADD_SECTION,
    UPDATE_SECTION,
    DELETE_SECTION,
    FIND_SECTION
} from '../constant';


export const SectionReducer = (state, action) => {
    const {type, payload} = action;

    let newState;
    switch(type) {
        case SECTIONS_LOADED_SUCCESS:
            newState = {
                ...state, 
                sections: payload,
                sectionLoading: false
            };
            return newState;
        case SECTIONS_LOADED_FAIL:
            return {
                ...state, 
                sections: [],
                sectionLoading: false
            }
        case ADD_SECTION: 
            return {
                ...state, 
                sections: [...state.sections, payload],
            }
        case FIND_SECTION:
            return {
                ...state,
                section: payload
            }
        case UPDATE_SECTION: 
            return {
                ...state, 
                sections: state.sections.map(section => {
                    return section.id === payload.id ? payload : section;
                })
            }
        case DELETE_SECTION: 
            return {
                ...state, 
                sections: state.sections.filter(section => section.id !== payload)
            }
        default:
            return {...state};
    }
}