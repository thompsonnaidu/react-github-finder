import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USERS ,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING ,
    SET_ALERT, 
    REMOVE_ALERT

} from '../types'

const GithubState = props=>{
    const client_id="a1af30da73995945d0c8";
    const client_secret="93e22c23fd861c5a7672fa735e9c5aab89c2c1a5";
    const initialState = {
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state,dispatch] =useReducer(GithubReducer,initialState);

    //Search users
    // add the user to state
    const searchUser=async (text)=>{
            
        
        setLoading()
        
        let endpointUrl=`https://api.github.com/search/users?q=${text}&client_id=${client_id}&client_secret=${client_secret}`;
        const res=await axios.get(endpointUrl);
        
        dispatch({
            type:SEARCH_USERS,
            payload:res.data.items
        })
        


    }


    //get github user details
    const getUser= async(username)=>{
        console.log("search user with the value as ",username);
        setLoading()
        
        let endpointUrl=`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`;
        const res=await axios.get(endpointUrl);
        console.log(`endpoint: ${endpointUrl} response ${res.data}`)
        dispatch({
            type:GET_USERS,
            payload:res.data
        });
    }
    
    
    //get github user repo  
    const getUserRepos= async(username)=>{
        console.log("search user with the value as ",username);
        setLoading(true)
        
        let endpointUrl=`https://api.github.com/users/${username}/repos?per_page=8&sort=created:asc&client_id=${client_id}&client_secret=${client_secret}`;
        const res=await axios.get(endpointUrl);
        // console.log(`endpoint: ${endpointUrl} response ${res.data}`)
        dispatch({
            type: GET_REPOS,
            payload:res.data
        });
    }
    //clear users
    //clear the user from state
    const clearUser=()=> dispatch({type:CLEAR_USERS}) 
    
    //set loading
    const setLoading= ()=> dispatch({type:SET_LOADING});

    return <GithubContext.Provider value={{
        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading,
        searchUser,
        clearUser,
        getUser,
        getUserRepos
    }}>


        {props.children}
    </GithubContext.Provider>
}
export default GithubState;