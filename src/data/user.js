import axios from 'axios';
import type { AxiosPromise } from 'axios';
import type {Users} from "./type";

export function getUsers(): AxiosPromise<Users[]> {
    return axios.get('/user');
}

export function getUser(id: number): AxiosPromise<Users> {
    return axios.get(`/user/${id}`);
}

export function getLoggedUser(): AxiosPromise<Users> {
    return axios.get('/user/me');
}