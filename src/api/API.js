import axios from "axios"

//const BASE_API_URL = "prod.url."
const BASE_API_URL = "http://127.0.0.1:5000"

const api = axios.create({
    baseURL: BASE_API_URL
})

api.defaults.headers.common["Content-Type"] = "application/json"

export class API{

    static post = (endpoint, data, onSuccess=()=>{}, onError=()=>{}) => {
        api.defaults.headers.common["Authorization"] = localStorage.getItem("token")

        api.post(endpoint, data).then(
            (response)=>onSuccess(response.data)
        ).catch(
            (error)=>onError(error.response.data)
        )

    }

    static get = (endpoint,  onSuccess=()=>{}, onError=()=>{}) => {
        api.defaults.headers.common["Authorization"] = localStorage.getItem("token")
        api.get(endpoint).then(
            (response)=>onSuccess(response.data)
        ).catch(
            (error)=>onError(error)
        )

    }
} 