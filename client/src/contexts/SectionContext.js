import {useReducer, useState, useEffect, createContext} from 'react';
import axios from 'axios';

import {
    Url,
    SECTIONS_LOADED_SUCCESS,
    SECTIONS_LOADED_FAIL,
    ADD_SECTION,
    UPDATE_SECTION,
    DELETE_SECTION,
    FIND_SECTION
} from './constant';
import {SectionReducer} from './reducers/SectionReducer';

export const SectionContext = createContext();

const SectionContextProvider = ({children}) => {
    //State
    const [sectionState, dispatch] = useReducer(SectionReducer, {
        section: null,
        sections: [],
        sectionLoading: true,
    });

    //Get all Sections
    const setSections = async (projectId) => {
        if(!projectId) {
            dispatch({ type: SECTIONS_LOADED_FAIL });
            return;
        }

        try {
            const response = await axios.get(`${Url}/section`,{
                params: {projectId}
            });

            if(response.data.success) {
                dispatch({ type: SECTIONS_LOADED_SUCCESS, payload: response.data.sections});
            }
        }
        catch(err) {
            dispatch({ type: SECTIONS_LOADED_FAIL });
        }
    }

    //Create sections for Today project
    const setSectionsOfToday = (sectionId) => {
        const today = new Date();
        const format = today.toDateString().slice(0, 10).replace(' ', ', ');
        const yyyy = today.getFullYear();
        const mm = `0${today.getMonth()+1}`.slice(-2);
        const dd = `0${today.getDate()}`.slice(-2);
        const sections = [
            {
                id: '1',
                name: 'Overdue', 
                type: 'NORMAL'},
            {
                id: sectionId,
                name: `Today - ${format}`, 
                type: 'NORMAL', 
                date: `${yyyy}-${mm}-${dd} 23:59:59`},
        ]
        dispatch({type: SECTIONS_LOADED_SUCCESS, payload: sections})
    }

    //Create sections for Upcoming Project
    const setSectionsOfUpcoming = (sectionId) => {
        let day = new Date();
        const todayFormat = day.toDateString().slice(0, 10).replace(' ', ', ');
        day.setDate(day.getDate() + 1);
        const tomorrowFormat = day.toDateString().slice(0, 10).replace(' ', ', ');
        const sections = [
            { id: sectionId, name: 'Overdue', type: 'NORMAL',},
            { 
                id: sectionId, 
                name: `Today - ${todayFormat}`, 
                type: 'NORMAL', 
                date: `${new Date().toISOString().slice(0, 10)} 23:59:59`
            },
            { 
                id: sectionId, 
                name: `Tomorrow - ${tomorrowFormat}`, 
                type: 'NORMAL', 
                date: `${day.toISOString().slice(0, 10)} 23:59:59`
            }
        ];

        for(let i = 1; i<=5; i++) {
            day.setDate(day.getDate() + 1);
            sections.push({
                id: sectionId,
                name: `${day.toDateString().slice(0, 10).replace(' ', ', ')}`,
                type: 'NORMAL',
                date: `${day.toISOString().slice(0, 10)} 23:59:59`
            })
        }

        dispatch({type: SECTIONS_LOADED_SUCCESS, payload: sections})
    }
    
    //Add Section
    const addSection = async (projectId, newSection) => {
        try {
            const response = await axios.post(`${Url}/section`, newSection, {
                params: {projectId}
            });
            if(response.data.success) {
                dispatch({ type: ADD_SECTION, payload: response.data.section })
            }

            return response.data;
        }
        catch (err) {
            if (err.response.data) return err.response.data
			else return { success: false, message: err.message }
        }
    }

    //Duplicate Section
    const duplicateSection = async sectionId => {
        try {
            const response = await axios.post(`${Url}/section/duplicate`, null, {
                params: {sectionId}
            });
            if(response.data.success) {
                dispatch({ type: ADD_SECTION, payload: response.data.section });
            }

            return response.data;
        }
        catch(err) {
            console.log(err.stack);
            return err;
        }
    }
 
    // Find Section when user is updating Section
	const findSection = sectionId => {
        if(!sectionId) {
            dispatch({ type: FIND_SECTION, payload: null });
            return;
        }
		const section = sectionState.sections.find(section => section.id === sectionId);
		dispatch({ type: FIND_SECTION, payload: section });
	}

    //Update Section
    const updateSection = async (projectId, updatedSection) => {
        try {
            const response = await axios.put(`${Url}/section/${updatedSection.id}`, updatedSection, {
                params: {projectId}
            });
            if(response.data.success) {
                dispatch({ type: UPDATE_SECTION, payload: response.data.section })
				return response.data;
            }
        }
        catch (err) {
            if (err.response.data) return err.response.data
			else return { success: false, message: err.message }
        }
    }

    //Delete Section
    const deleteSection = async (sectionId) => {
        try {
            const response = await axios.delete(`${Url}/section/${sectionId}`);
            if(response.data.success) {
                dispatch({ type: DELETE_SECTION, payload: sectionId })
            }
            return response.data;
        }
        catch (err) {
            console.log(err.stack);
            return err;
        }
    }


    //Data
    const SectionContextData = {
        sectionState,
        setSections,
        setSectionsOfToday,
        setSectionsOfUpcoming,
        addSection,
        duplicateSection,
        findSection,
        updateSection,
        deleteSection,
    };
    
    return (
        <SectionContext.Provider value={SectionContextData}>
            {children}
        </SectionContext.Provider>
    )
}

export default SectionContextProvider;