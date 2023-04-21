import {redirect} from "react-router-dom";

export function getAuthToken(){
    const token = localStorage.getItem('token');
    return token;
}

export function tokenLoader(){
    return getAuthToken();
}

export function checkAuthLoader(){
    const token = getAuthToken();
    if(!token){
        return redirect('/login');
    }else {
        return null;
    }
}

export function removeToken(){
    localStorage.removeItem('token');
}