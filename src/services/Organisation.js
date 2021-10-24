import axios from "axios";
import {ACCESS_TOKEN, API_BASE_URL} from "../constants";

export const createOrganisationRequest = async (data) => {
    return await axios.post(`${API_BASE_URL}/organisation/create`, {
        name: data.organisationName,
        email: data.organisationEmail,
    },
    {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    }).then(res => {return res.data})
}

export const getOrganisationRequest = async (id) => {
    return await axios.get(`${API_BASE_URL}/organisation/get/${id}`,
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            }
        }).then(res => {return res.data})
}