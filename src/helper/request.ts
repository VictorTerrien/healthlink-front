import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { RequestMethod, RequestHeader } from "../interfaces";

export function RequestHelperAuth<T>(
    method: RequestMethod,
    route: string,
    auth: string,
    data?: any
): Promise<AxiosResponse<T>> {
    return RequestAuthHelper<T>(method, route, auth, data, false);
}

export function RequestHelper<T>(
    method: RequestMethod,
    route: string,
    data?: any
): Promise<AxiosResponse<T>> {
    return RequestAuthHelper<T>(method, route, null, data, false);
}

function RequestAuthHelper<T>(
    method: RequestMethod,
    route: string,
    auth: string | null,
    data?: any,
    isFormData?: boolean
): Promise<AxiosResponse<T>> {
    const headers: RequestHeader = {
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
    };
    if (auth) {
        headers.Authorization = auth;
    }
    return axios.request({
        method: method,
        url: 'https://projet-healthlink-api.onrender.com/' + route,
        data: data,
    });
}