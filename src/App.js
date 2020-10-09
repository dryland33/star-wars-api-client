import React from 'react';
import './App.css';
import ResultsList from './ResultsList';
class App extends React.Component{

state = {
  searchTerm: '',
  results: []
}

handleSearchChange = e => {
  this.setState({searchTerm: e.currentTarget.value});
}

handleSubmit = e => { 

  e.preventDefault();
  
  fetch(`https://swapi-thinkful.herokuapp.com/api/people/?search=${this.state.searchTerm}`, {
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
      this.setState({results: data.results})
    })
    .catch(error => {
      console.error({ error })
    })
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <main class="container">
          <h1>Star Wars</h1>
          <form action="#" class="js-search-form" onSubmit={this.handleSubmit}>
            <label for="search">Search Term:</label>
            <input id="search" type="text" class="js-query-artist" onChange={this.handleSearchChange}></input>
              <button type="submit" >Submit</button>
              <label id="js-error-message"></label>
            </form>
           <ResultsList results={this.state.results}/>
        </main>
      </header>
    </div>
  );
}
}
export default App;
