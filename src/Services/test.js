import superagent from 'superagent'; // superagent to call the server 
import { api as APIConfig } from '../AppConfig'; // getting tne api data

//Get Application Information
export const test = async (applicationId) => {
    let request = await superagent.get(APIConfig.base_url + '/comments')
        .set('Accept', 'application/json')
        .then(response => {
            console.log('The data her eis ---> ', response.body);
            return response.body;
        });

    // return the request back 
    return request;
}
