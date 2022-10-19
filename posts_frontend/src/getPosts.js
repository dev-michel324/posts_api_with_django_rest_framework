import axios from "axios";

import Post from "./posts";

const reqPosts = async () => {
  try{
    const response = await axios.get('http://127.0.0.1:8000/posts/');
    return response.data.posts;
  }catch(error){
    console.log(error);
    return [];
  }
}

const GetPosts = () => {
  reqPosts().then(response => {
    return (
      <>
        {response.map((data, i) => {
          return <Post key={i}/>
        })}
      </>
    )
  })
    
}

export default GetPosts;