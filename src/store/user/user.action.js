import { itemService } from '../../services/user.service.js'


export function loadUsers(currentPage) {
    return async dispatch => {
        try {
            const users = await itemService.getUsers(currentPage)
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log(err)
        }
    }
}


export function setUsers(users) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log(err)
        }
    }
}


export function setFilteredUsers(users) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_FILTERED', users })
        } catch (err) {
            console.log(err)
        }
    }
}



export function removeUser(userId) {
    return async dispatch => {
        try {
            await itemService.remove(userId)
            dispatch({ type: 'REMOVE_USER', userId })
        } catch (err) {
            console.log(err)
        }
    }
}

export function saveUser(user) {
    return async dispatch => {
        try {
            const actionType = user.userId ? 'UPDATE_USER' : 'ADD_USER'
            const savedUser = itemService.save(user)
            dispatch({ type: actionType, user: savedUser })
        } catch (err) {
            console.log(err)
        }
    }
}