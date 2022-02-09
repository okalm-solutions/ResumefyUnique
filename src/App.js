import logo from './logo.svg';
import './App.css';
import {API} from 'aws-amplify'

const myAPI = "resumefyuniqueapi";
const path= '/resume/create-pdf';



function App() {
    const createResume=()=>{
        API.get(myAPI, path)
        .then(response =>{
            console.log(response);
        })
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. yay!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={createResume} >Create Resume</button>
      </header>
    </div>
  );
}

export default App;
