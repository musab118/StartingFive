import store from '../store';
import { http } from './HttpService';
// JWT is used for securly transmitting information between JSON objects
import jwt from 'jsonwebtoken';
// isLoggedIn() is the function to check whether the user state is loggen in 
export function isLoggedIn() {
    // Declaring token variable to the local storage
    const token = localStorage.getItem('token');
    return token != null;
}
//This is a post function that writes the login function to the database
export function login(user) {
    return http().post('/auth', user)
        .then(res => {
            if (res) {
                setToken(res.data.token);
            }
        });
}
//clears the state of bieng logged in. 
export function logout() {
    localStorage.clear();
    store.dispatch('authenticate');
}
//Setting the JWT jsonwebtoken
function setToken(token) {
    localStorage.setItem('token', token);
    store.dispatch('authenticate');
}
//Exporting the getToken method
export function getToken() {
    return localStorage.getItem('token');
}
//This function retrives the username 
export function getUsername() {
    const token = decodeToken();
    if (!token) {
        return null;
    }
    return token.user.username;
}
// Retrieves the user ID 
export function getUserId() {
    const token = decodeToken();
    if (!token) {
        return null;
    }
    return token.user.id;
}

export function registerUser(user) {
    return http().post('/register', user);
}
//decodeToken() function if there is no token then return nothing else return the decode token 
function decodeToken() {
    const token = getToken();
    if (!token) {
        return null;
    }
    return jwt.decode(token);
}
