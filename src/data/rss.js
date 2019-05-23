import axios from 'axios';
import type { AxiosPromise } from 'axios';
import type {Rss} from "./type";

export function getAllRss(): AxiosPromise<Rss[]> {
    return axios.get('/rss');
}