import axios from "axios";

import Post from "./posts";

const GetPosts = async () => {
    try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
      } catch (error) {
        console.error("erro");
      }
}

export default GetPosts;