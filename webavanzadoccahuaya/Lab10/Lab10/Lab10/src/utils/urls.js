export const PROFILE_EDIT = {
    method: 'put',
    url: 'user/' + localStorage.getItem('userId')
};

export const AUTH_LOGIN = {
    method: 'post',
    url: 'user/signin'
};