import axios from '../../utils/axios';

import * as actionTypes from './actionTypes';
import * as URLS from '../../utils/urls';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, email, name, id) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        email: email,
        userName: name,
        userId: id
    };
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios({
            ...URLS.AUTH_LOGIN,
            data: {
                username: username,
                password: password
            }
        })
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.data._id);
            localStorage.setItem('userName', response.data.data.username);
            localStorage.setItem('email', response.data.data.email);
            dispatch(
                authSuccess(
                    response.data.token,
                    response.data.data.email,
                    response.data.data.username,
                    response.data.data._id
                )
            );
        })
        .catch(err => {
            dispatch(authFail(err.response.data));
        });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const email = localStorage.getItem('email');
            const userName = localStorage.getItem('userName');
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, email, userName, userId));
        }
    };
};