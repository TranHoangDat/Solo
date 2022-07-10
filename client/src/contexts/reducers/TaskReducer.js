import {
    TASKS_LOADED_SUCCESS,
    TASKS_LOADED_FAIL,
    ADD_TASK,
    UPDATE_TASKS,
    UPDATE_TASK,
    DELETE_TASK,
    FIND_TASK
} from '../constant';

//State là danh sách các tasks
export const TaskReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case TASKS_LOADED_SUCCESS:
            return {
                ...state,
                tasksLoading: false,
                tasks: payload,
            };
        case TASKS_LOADED_FAIL:
            return {
                ...state,
                tasksLoading: true,
                tasks: [],
                task: null
            };
        case ADD_TASK: 
            return {
                ...state,
                tasks: [...state.tasks,payload]
            }
        // case FIND_TASK:
        //     return {
        //         ...state,
        //         task: payload
        //     }
        case UPDATE_TASKS: 
            return {
                ...state,
                tasks: payload,
            }
        case UPDATE_TASK: 
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    return task.id === payload.id ? {...task,...payload} : task;
                })
            }
        case DELETE_TASK: 
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== payload)
            }
        default:
            return {...state};
    }
}