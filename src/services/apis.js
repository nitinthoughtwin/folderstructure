import axios from "axios"
export const get_list_API = () =>{
    try {
        const res = axios.get("https://fakestoreapi.com/products");        
        return res;
    } catch (error) {
        console.log(error)
    }
}