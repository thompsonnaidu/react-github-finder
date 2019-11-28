import {
    SEARCH_USERS,
    GET_USERS ,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING ,
    SET_ALERT, 
    REMOVE_ALERT

} from '../types'

export default (state,action) => {
    switch(action.type){
        case SET_LOADING:  return{
            ...state,
            loading:true
        }

        case SEARCH_USERS: return {
            ...state,
            users:action.payload,
            loading:false

        }
        
        case CLEAR_USERS: return {
            ...state,
            users:[],
            loading:false
        }

        case GET_USERS: return{
            ...state,
            user:action.payload,
            loading:false
        }

        case GET_REPOS: return{
            ...state,
            repos:action.payload,
            loading:false
        }
        default:
            return state
    }
}