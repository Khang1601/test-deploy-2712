import { UserCreate } from "@/interfaces/user.interface";
import axios from 'axios';

export const userModule = {
    register: async function(newUser: UserCreate) {
        return await axios.post(`${import.meta.env.VITE_API_SERVER}/users`, newUser)
    },
    

    // getData: async function() {
    //     return await axios.get(`${import.meta.env.VITE_API_SERVER}/users`)
    // }

    findMany: async function() {
        // return await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return await axios.get(`https://jsonplaceholder.typicode.com/users`)
    }
}