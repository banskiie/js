const movieList = document.getElementById('movie-list');

const movieNameInput = document.getElementById('title');
const extraNameInput = document.getElementById('extra-name');
const extraValueInput = document.getElementById('extra-value');
const filterTitleInput = document.getElementById('filter-title');

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const showMovies = () => {
  console.clear();
  for (const entry of movies) {
    console.log(`Movie Name: ${entry.movieName}`);
    console.log(`Movie Info: ${entry.movieInfo}`);
    console.log(`Movie Value: ${entry.movieValue}`);
  }
};

const addMovieHandler = () => {
  const newMovieEntry = {
    movieName: movieNameInput.value,
    movieInfo: extraNameInput.value,
    movieValue: extraValueInput.value,
  }
  movies.push(newMovieEntry);
  showMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
// searchBtn.addEventListener('click', filterMovieHandler);