import axios from 'axios';

export const signup = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('https://last-hobe1.herokuapp.com/api/auth/signup', data, config);

    return response;
};


export const signin = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('https://last-hobe1.herokuapp.com/api/auth/signin', data, config);

    return response;
};


export const breakdo = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post('https://last-hobe1.herokuapp.com/api/auth/breakdo', data, config);

    return response;
};