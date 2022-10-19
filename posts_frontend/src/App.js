import './assets/css/spectre/spectre.min.css';
import './assets/css/style.css';

// import GetPosts from './getPosts';
import Evento from './evento';
import Post from './posts';
import Form from './Form';

function App() {
  return (
    <div className="container" style={{backgroundColor: "red"}}>
      <div className="container container_md">
        <h1 className='text-center text-light py-2'>Sistema de postagens</h1>
        <div className="container">
          <div className="columns">
            {/* <GetPosts/> */}
            <Post/>
          </div>
        </div>
        <Evento/>
        <Form/>
      </div>
    </div>
  );
}

export default App;
