import axios from "axios";

const serverBaseUrl = "http://localhost:8000"
//const serverBaseUrl = "https://api-innoscripta.tanvirpro.com"

const axiosWithBase = axios.create({
    baseURL: serverBaseUrl,
    withCredentials: true
});

export {serverBaseUrl, axiosWithBase}
