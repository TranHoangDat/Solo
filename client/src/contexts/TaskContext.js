import {useReducer, useEffect, useState, createContext} from 'react';
import axios from 'axios';

import {
    Url,
    TASKS_LOADED_SUCCESS,
    TASKS_LOADED_FAIL,
    ADD_TASK,
    UPDATE_TASKS,
    DELETE_TASK,
    UPDATE_TASK,
    FIND_TASK
} from './constant';
import {TaskReducer} from './reducers/TaskReducer';

export const TaskContext = createContext();

const TaskContextProvider = ({children}) => {
    // //State
    const [taskState, dispatch] = useReducer(TaskReducer, {
        task: null,
        tasks: [],
        tasksLoading: true,
    });

    //Get all Tasks
    const setTasksOfProject = async (projectId) => {
        if(!projectId) {
            dispatch({type: TASKS_LOADED_FAIL, payload: null});
            return;
        }

        try {
            const response = await axios.get(`${Url}/task`,{
                params: {projectId}
            });
            
            if(response.data.success) {
                dispatch({type: TASKS_LOADED_SUCCESS, payload: response.data.tasks});
                return response.data;
            }
        }
        catch(err) {
            dispatch({type: TASKS_LOADED_FAIL, payload: null});
        }
    }

    //Get all Tasks of Today
    const setTasksOfToday = async () => {
        try {
            const response = await axios.get(`${Url}/project/default`);
            if(response.data.success) {
                dispatch({type: TASKS_LOADED_SUCCESS, payload: response.data.tasks});
                return response.data;
            }
        }
        catch(err) {
            dispatch({type: TASKS_LOADED_FAIL, payload: null});
        }
    }

    //Load new tasks of new section 
    const updateWithNewSection = async (sectionId) => {
        try {
            const response = await axios.get(`${Url}/task/task-of-section`, {
                params: {sectionId}
            });

            if(response.data.success) {
                for(let task of response.data.tasks) {
                    dispatch({type: ADD_TASK, payload: task});
                }
            }

            return response.data;
        }
        catch(err) {
            console.log(err.stack);
            return err;
        }
    }

    //Sort tasks 
    const sortTasks = (type) => {
        const {tasks} = taskState;
        let newTasks;
        switch (type) {
            case 'Alphabetically':
                newTasks =  tasks.sort((task1, task2) => {
                    const content1 = task1.content.toUpperCase();
                    const content2 = task2.content.toUpperCase();
                    if(content1 > content2)
                        return 1;
                    else if(content1 < content2)
                        return -1;
                    
                    return 0;
                });
                break;
            case 'DueDate':
                newTasks = tasks.sort((task1, task2) => {
                    const dueDate1 = task1.dueDate ? task1.dueDate.slice(0, 10) : undefined;
                    const dueDate2 = task2.dueDate ? task2.dueDate.slice(0, 10) : undefined;
                    
                    if(dueDate1 > dueDate2) 
                        return 1
                    else if(dueDate1 < dueDate2)
                        return -1;
                    
                    return 0;
                });
                break;
            case 'Assignee': 
                newTasks = tasks.sort((task1, task2) => {
                    const assignee1 = task1.assigneeName;
                    const assignee2 = task2.assigneeName;
                    if(assignee1 > assignee2)
                        return 1;
                    else if(assignee1 < assignee2)
                        return -1;
                    
                    return 0;
                });
                break;
            case 'Priority': 
                newTasks = tasks.sort((task1, task2) => {
                    const priority1 = task1.priority1;
                    const priority2 = task2.priority2;
                    if(priority1 > priority2)
                        return -1;
                    else if(priority1 < priority2)
                        return 1;
                    
                    return 0;
                });
                break;
            default:
                newTasks = tasks;
                break;
        }
        dispatch({type: 'UPDATE_TASKS', payload: newTasks});
    }

    //Add Task
    const addTask = async (sectionId, newTask) => {
        try {
            const response = await axios.post(`${Url}/task`, newTask, {
                params: {sectionId}
            });
            if(response.data.success) {
                dispatch({type: ADD_TASK, payload: response.data.task});
            }

            return response.data;
        }
        catch (err) {
            if (err.response.data) return err.response.data
			else return { success: false, message: err.message }
        }
    }

    //Duplicate task
    const duplicateTask = async (taskId) => {
        try{
            const response = await axios.post(`${Url}/task/duplicate`,null,{
                params: {taskId}
            });
            if(response.data.success) {
                dispatch({type: ADD_TASK, payload: response.data.task});
            }

            return response.data;
        }
        catch (err) {
            console.log(err.stack);
            return err;
        }
    }

    //Update Task
    const updateTask = async (sectionId, updatedTask) => {
        try {
            const response = await axios.put(`${Url}/task/${updatedTask.id}`, updatedTask, {
                params: {sectionId}
            });
            if(response.data.success) {
                dispatch({type: UPDATE_TASK, payload: updatedTask});
            }
            return response.data;
        }
        catch (err) {
            console.log(err.stack);
            return err;
        }
    }

    //Delete Task
    const deleteTask = async (sectionId, taskId) => {
        try {
            const response = await axios.delete(`${Url}/task/${taskId}`,{
                params: {sectionId}
            });
            if(response.data.success) {
                dispatch({ type: DELETE_TASK, payload: taskId });
            }
            return response.data
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    const updateTasks = (newTasks) => {
        dispatch({type: UPDATE_TASKS,payload: newTasks});
    }

    //Data
    const TaskContextData = {
        taskState,
        setTasksOfProject,
        setTasksOfToday,
        updateWithNewSection,
        addTask,
        duplicateTask,
        updateTask,
        deleteTask,
        
        sortTasks,
        updateTasks
    };
    
    return (
        <TaskContext.Provider value={TaskContextData}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;