import { authConstants } from "../constants";
import axios from '../helpers/axios';
import { alertActions } from "./alert.actions";
import { toast } from 'react-toastify';


export const login = (user) => {
    console.log(user);
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`/admin/signin`, {
            ...user
        })
        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
            toast.success('Đăng nhập thành công!');

        } else {
            if (res.status === 400) {
                toast.error('Đăng nhập thất bại!');
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: { error: res.data.error }
                })

            }
        }
    }
}



export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: 'Failed to login' }
            });
        }
    }
}

export const signout = () => {
    return async dispatch => {
        dispatch({
            type: authConstants.LOGOUT_REQUEST
        })

        const res = await axios.post(`/admin/signout`)
        if (res.status === 200) {
            localStorage.clear();
            dispatch({type: authConstants.LOGOUT_SUCCESS})
            toast.success('Đăng xuất thành công!');

        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: {error: res.data.error}
                
            })
            toast.error('Đăng xuất thất bại!');


        }
    }
}