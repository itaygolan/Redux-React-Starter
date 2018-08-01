/*

Actions are payloads of information that send data from your application to your 
store. They are the only source of information for the store.

*/

import axios from 'axios';
import { API_KEY } from 'babel-dotenv';

export default function fetchData() {

    const END_POINT = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    const request = axios.get(END_POINT);

    return {
        type: 'FETCH_DATA', // Action Type for the reducer to recognize
        payload: request, // payload (data in this case)
    }
}