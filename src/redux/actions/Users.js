import Axios from 'axios'

// by id
const UserRequest = ()=> {
    return{
        type: 'USER_REQUEST'
    }
}

const UserSuccess = (data)=> {
    return{
        type: 'USER_SUCCESS',
        payload: data
    }
}
const UserError = (error)=> {
    return{
        type: 'USER_ERROR',
        payload: error
    }
}

export const GetUser = (fields) => {
    return (dispatch) =>{
        dispatch(UserRequest())
        return Axios({
            method: 'GET',
            url:    `/users/${fields.id}`,
            headers: {
                'auth-token': `${fields.token}`
            }
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dat')
            
            dispatch(UserSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(UserError(message))
        })
    }
}





