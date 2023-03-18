// Buttons
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length > 0) {
    movieList.classList.add('visible');
  } else {
    movieList.classList.remove('visible');
    return;
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter))

  filteredMovies.forEach(movie => {
    const movieItem = document.createElement('li');
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
      if (key !== 'title') {
        text += `${key}: ${movie.info[key]}`
      }
    }
    movieItem.textContent = text;
    movieList.append(movieItem);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random().toString()
  };
  movies.push(newMovie);
  renderMovies();
  console.log(newMovie);
}

const searchMovieHandler = () => {
  const filterTitle = document.getElementById('filter-title').value;
  renderMovies(filterTitle);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);