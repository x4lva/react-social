import axios from "axios";
import {ACCESS_TOKEN, API_BASE_URL} from "../constants";

export const getCurrentUser = async () => {
    return await axios.get(API_BASE_URL + "/user/me", {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    }).then(res => {
        return res.data
    }).catch(
        err => console.log(err)
    )
}