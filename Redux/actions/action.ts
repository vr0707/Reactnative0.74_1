import { SAVE_JWT_TOKEN,SET_USER_NAME } from "./actionTypes";

export const setName = (payload: String) => ({
    type: SET_USER_NAME,
    payload,
});
export const saveJWTTokenAction = (payload: any) => ({
    type: SAVE_JWT_TOKEN,
    payload,
  });