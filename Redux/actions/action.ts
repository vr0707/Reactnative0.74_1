export const SET_USER_NAME = 'SET_USER_NAME';

export const setName = (payload: String) => ({
    type: SET_USER_NAME,
    payload,
});