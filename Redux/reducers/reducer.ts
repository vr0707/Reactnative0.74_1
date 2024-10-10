import { SAVE_JWT_TOKEN,SET_USER_NAME } from "../actions/actionTypes";


const initialstate = {
    name: null,
    jwt_token:null
}
interface actionShape {
    type: string;
    payload: any;
}
const user = (state = initialstate, action: actionShape): any => {
    switch (action.type) {
        case SET_USER_NAME: {
            return ({
                ...state,
                name: action.payload
            })
        }
        case SAVE_JWT_TOKEN: {
            return {
              ...state,
              jwt_token: action.payload,
            };
          }
        default:
            return state;
    }
}
export default user;