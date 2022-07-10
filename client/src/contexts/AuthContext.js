import {useState, useEffect, createContext} from 'react';
import axios from 'axios';

import {USER_ACCESS_TOKEN, Url} from './constant';
import setAuthToken from './util/setAuthToken';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    //State
    const [authState, setAuthState] = useState({
        authLoading: true,
        isAuthenticated: false,
        user: null
    });

    //Authenticated User
    const loadUser = async () => {
        if(localStorage[USER_ACCESS_TOKEN]) {
            setAuthToken(localStorage[USER_ACCESS_TOKEN]);
        }

        try {
            const response = await axios.get(`${Url}/api/auth`);
            if(response.data.success) {
                const {user} = response.data;
                setAuthState({
                    ...authState,
                    authLoading: false,
                    isAuthenticated: true,
                    user: user
                })
            }
        }
        catch(err) {
            localStorage.removeItem(USER_ACCESS_TOKEN);
            setAuthToken(null);
            setAuthState({
                ...authState,
                authLoading: false,
                isAuthenticated: false,
                user: null
            })
        }
    }

    useEffect(() => {
        const load = async () => await loadUser();

        load();
    }, []);

    //Login 
    const loginUser = async (loginForm) => {
        try {
            const response = await axios.post(`${Url}/api/auth/login`, loginForm);

            if(response.data.success){
                localStorage.setItem(USER_ACCESS_TOKEN, response.data.accessToken);
            }

            await loadUser();
            return response.data;
        }
        catch(err) {
            if (err.response.data) return err.response.data
			else return { success: false, message: err.message }
        }
    }

    //Login 
    const loginWithGoogle = async () => {
        console.log('loginWithGoogle');
        try {
            console.log(`${Url}/api/auth/google`);
            const response = await axios.get(`${Url}/api/auth/google`);

            if(response.data.success){
                localStorage.setItem(USER_ACCESS_TOKEN, response.data.accessToken);
            }

            await loadUser();
            return response.data;
        }
        catch(err) {
            if (err.response) return err.response.data;
			else return { success: false, message: err.message }
        }
    }

    //Register
    const registerUser = async (registerForm) => {
        try {
            const response = await axios.post(`${Url}/api/auth/register`, registerForm);

            if(response.data.success){
                localStorage.setItem(USER_ACCESS_TOKEN, response.data.accessToken);
            }

            await loadUser();
            return response.data;
        }
        catch(err) {
            if (err.response.data) return err.response.data
			else return { success: false, message: err.message }
        }
    }

    //Logout
    const logoutUser = () => {
        window.location.reload();
        setAuthState({
            ...authState,
            authLoading: true,
            isAuthenticated: false,
            user: null
        });
        localStorage.removeItem(USER_ACCESS_TOKEN);
        setAuthToken(null);
    }

    //Data
    const AuthContextData = {
        authState,
        loginUser,
        registerUser,
        loginWithGoogle,
        logoutUser,
    };
    
    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;