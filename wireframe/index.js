'use strict';

function getData(searchTerm) {
  console.log('getData');
  const url = `https://swapi-thinkful.herokuapp.com/api/people/?search=${searchTerm}`;
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function displayResults(respJ) {
  console.log(respJ.results[0].name);    
  if (respJ.results) {
    $('#results').html(respJ.results[0].name).removeClass('hidden');
  } else
    $('#results').html('FooBuR').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    console.log('watchform');
    event.preventDefault();
    getData($('#search').val());
  });
}

$(watchForm);

