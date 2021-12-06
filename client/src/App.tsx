import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// To deploy to Heroku:
// Change in package.json in ROOT
// From - "start": "npm-run-all --parallel client server",
// To - "start": "node server",
// Run - git push heroku HEAD:master

function App() {

  const [api, setApi] = useState<string>("")

  useEffect(() => {
    const options = {
      method: "get",
    }
    const fetchApi = async () => {
      await fetch("/api/hello-server", options)
        .then(function(res) {
          if( res.status === 400) {
            return
          } return res.json()
        })
        .then(function (data) {
          setApi(data)
        })
        .catch(function(err) {
          console.error(err);
        })
      }

      fetchApi();
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{api}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
