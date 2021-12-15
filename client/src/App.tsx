
import { useEffect } from 'react';
import './App.css';

// To deploy to Heroku:
// Change in package.json in ROOT
// From - "start": "npm-run-all --parallel client server",
// To - "start": "node server",
// Run - git push heroku HEAD:master

function App() {

  useEffect(() => {
    const options = {
      method: "get",
    }
    const fetchApi = async () => {
      await fetch("/api/users", options)
        .then(function(res) {
          if( res.status === 400) {
            return
          } return res.json()
        })
        .then(function (data) {
          console.log(data)
          alert(data)
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
        <h1>Weatherlog</h1>
        <span className="iconify" data-icon="flat-ui:weather"></span>
      </header>
    </div>
  );
}

export default App;
