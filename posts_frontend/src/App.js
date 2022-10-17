import './assets/css/spectre/spectre.min.css';
import './assets/css/style.css';

import Post from './posts';
import GetPosts from './getPosts';

function App() {
  return (
    <div className="container" style={{backgroundColor: "red"}}>
      <div className="container container_md">
        <h1 className='text-center text-light py-2'>Sistema de postagens</h1>
        <div className="container">
          <div className="columns">
            <GetPosts/>
            <Post title="Testando" content="Conteudo" />
            <Post title="Testando2" content="Conteudo" />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
