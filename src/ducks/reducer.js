const initalState = {
    loggedIn: false,
    user: null 
}

//aciton 
const UPDATE_USER = 'UPDATE_USER'

//action build
export const updateUser = (userObj) => {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

//reducer 
const reducer = (state = initalState, action) => {
    switch(action.type) {
        case UPDATE_USER: 
            return {...state, user: action.payload}
        default: return state
    }
}
export default reducer
