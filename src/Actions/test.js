import generateActionTypes from '../Utils/generateActionTypes'
//import axios from 'axios'

export const actionTypes = generateActionTypes(
    'Toogle_Test'
)

// user profile data 
export function Toogle_Test() {
    console.log('iacm inside action');
    return dispatch => {
        return dispatch({ type: actionTypes.Toogle_Test })
    }
}
