let api = 'https://www.omdbapi.com/?apikey=1b9d9af6&t='

let title = document.getElementById('title');
let date = document.getElementById('date');
let director = document.getElementById('director');
let actors = document.getElementById('actors');
let genre = document.getElementById('genre')
let desc = document.getElementById('desc');
let collection = document.getElementById('collection');
let awards = document.getElementById('awards');
let writer = document.getElementById('writer');

let movieDetails = document.getElementById('movieDetails');

let img = document.getElementById('img');

let ratings = document.querySelector('.ratings');

let loadingSpinner = document.getElementById('loadingSpinner');

function searchMovie(){
  // Show the loading spinner
    loadingSpinner.style.display = 'block';
    let movieName = document.getElementById('movieName')
    let query = api+movieName.value;

    fetch(query).then((Data) => {
        return Data.json()
      }).then((Data) => {
        // Hide the loading spinner after the movie details are fetched
        loadingSpinner.style.display = 'none';
        movieDetails.style.display = 'flex';
        title.innerText = Data.Title;
        date.innerText = Data.Released;
        director.innerText = Data.Director;
        actors.innerText = Data.Actors;
        desc.innerText = Data.Plot;
        collection.innerText = Data.Boxoffice;
        genre.innerText = Data.Genre;
        awards.innerText = Data.Awards;
        writer.innerText = Data.Writer;
        // Update the ratings
        if (Data.Ratings && Data.Ratings.length > 0) {
          ratings.innerText = `IMDB: ${Data.Ratings[0].Value}`;
      } else {
          ratings.innerText = 'Rating not available';
      }
        // Update the poster image
        img.src = Data.Poster;
      });
}