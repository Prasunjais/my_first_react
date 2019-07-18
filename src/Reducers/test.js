import { actionTypes } from '../Actions/test'
const {
    Toogle_Test
} = actionTypes;

const initialState = {
    testing: false
}

export default function test(state = initialState, action) {
    console.log('The Action Type here is ---> ', action);
    switch (action.type) {
        // toggling the test 
        case Toogle_Test:
            console.log('iam in dispatcher');
            return {
                ...state,
                testing: true
            }

        default:
            return state
    }
}