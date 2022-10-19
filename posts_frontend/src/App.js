import './assets/css/spectre/spectre.min.css';
import './assets/css/style.css';
import Post from './components/posts/Post';

import Posts from './components/posts/Posts';

function App() {
  return (
    <div className="container_md" style={{backgroundColor: "red"}}>
      <h1 className="text-center my-2">It's working</h1>
      <div className="columns mx-auto">
        <div className="column col-5">
          <Post title="Teste" content="Testando"/>
        </div>
        <div className="column col-5">
          <Post title="Teste" content="Testando"/>
        </div>
      </div>
      
      <Posts/>
    </div>
  );
}

export default App;
