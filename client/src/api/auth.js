import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const signup = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post(`${BACKEND_URL}/api/auth/signup`, data, config);

    return response;
};


export const signin = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post(`${BACKEND_URL}/api/auth/signin`, data, config);

    return response;
};


export const breakdo = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post(`${BACKEND_URL}/api/auth/breakdo`, data, config);

    return response;
};