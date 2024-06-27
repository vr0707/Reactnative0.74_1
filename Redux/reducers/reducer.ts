import { SET_USER_NAME } from "../actions/action";


const initialstate = {
    name: null
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
        default:
            return state;
    }
}
export default user;