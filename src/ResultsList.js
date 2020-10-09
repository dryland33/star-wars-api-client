import React from 'react'

function ResultsList(props){
    //console.log('displayResults');
    const listItems = props.results.map((item) =>
      <li key={item.name}>
        {item.name}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  } 

  export default ResultsList