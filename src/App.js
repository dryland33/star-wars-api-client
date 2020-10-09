import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main class="container">
          <h1>Star Wars</h1>
          <form action="#" class="js-search-form">
            <label for="search">Search Term:</label>
            <input id="search" type="text" class="js-query-artist" ></input>
              <button type="submit">Submit</button>
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
