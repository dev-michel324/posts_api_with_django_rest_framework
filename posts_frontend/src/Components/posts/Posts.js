import api from "../../services/Api";

const Posts = () => {
    const response = api.get('/posts').then((r) => {return r.data});
    console.log(response);

    return (
        <p>Teste</p>
    )
}

export default Posts;