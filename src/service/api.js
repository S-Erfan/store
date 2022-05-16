import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const getProducts = async ()=> {
    const response = await axios.get(`${BASE_URL}/products/`);
    return response.data;
}

const BLOG_URL = "https://api.freerealapi.com/blogs/6185a7b3b883dbaafa9448de";


export { getProducts }