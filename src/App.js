import React from 'react';
import logo from './logo.svg';
import './App.css';

function displayResults(respJ){
  console.log('displayResults');
  console.log(respJ.results[0].name); 
} 

function handleSubmit(e){ 

  e.preventDefault()
  
  fetch(`https://swapi-thinkful.herokuapp.com/api/people/?search=Skywalker`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    })
    .then(data => {
      displayResults(data)
    })
    .catch(error => {
      console.error({ error })
    })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main class="container">
          <h1>Star Wars</h1>
          <form action="#" class="js-search-form" onSubmit={(e) => handleSubmit(e)}>
            <label for="search">Search Term:</label>
            <input id="search" type="text" class="js-query-artist" ></input>
              <button type="submit" >Submit</button>
              <label id="js-error-message"></label>
            </form>
            <div class="hidden" id="results">

            </div>
        </main>
      </header>
    </div>
  );
}

export default App;
