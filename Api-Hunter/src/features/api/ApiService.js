import axios from "axios";

// FETCH METHOD :

export const fetchRequest = async (url, method, body) => {
    const options = {
        method,
        headers: { "Content-Type": "application/json" },  // tells server data is JSON
    };

    if (method === "POST") {  // Only for POST - If request is POST: -> Convert body object → JSON string
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const data = await response.json();

    return {
        data,
        status: response.status,
    };
};

// AXIOS METHOD :

export const axiosRequest = async (url, method, body) => {
    let response;

    if (method === "GET") {
        response = await axios.get(url);
    } else {
        response = await axios.post(url, body);
    }

    return {
        data: response.data,
        status: response.status,
    };
};