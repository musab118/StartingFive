// Store is basically a plugin that returns objects that get added to the store
import store from '../store';
// Axios is the plugin for sending and recieving HTTP requests in order to perform the CRUD operations
import axios from 'axios';
// This is importing all the data and dependandicies from the AuthService JS file
import * as auth from './AuthService';

// Makes requests to the server using http methods
export function http() {
    // returns the axios create funciton which is built in
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            Authorization: auth.getToken()
        }
    });
}