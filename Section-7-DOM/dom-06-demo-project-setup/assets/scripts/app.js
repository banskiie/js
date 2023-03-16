// Document Elements
const startAddMovieBtn = document.querySelector('header button');
const movieList = document.getElementById('movie-list');
const entryText = document.getElementById('entry-text')

// Modal Elements
const addMovieModal = document.getElementById('add-modal');
const deleteMovieModal = document.getElementById('delete-modal');
const backdrop = document.getElementById('backdrop');

const addMovieModalbuttons = addMovieModal.getElementsByTagName('button');
const cancelAddMovieBtn = addMovieModalbuttons[0];
const confirmAddMovieBtn = addMovieModalbuttons[1];



const userInputs = document.querySelectorAll('input');

// Array / Objects
const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryText.style.display = "block";
  } else {
    entryText.style.display = "none";
  }
};

const deleteMovie = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  movieList.children[movieIndex].remove();
  closeDeleteMovieModal();
  updateUI();
}

const deleteMovieHandler = movieId => {
  showDeleteMovieModal();

  const noBtn = deleteMovieModal.querySelectorAll("button")[0];
  let yesBtn = deleteMovieModal.querySelectorAll("button")[1];

  yesBtn.replaceWith(yesBtn.cloneNode(true));
  yesBtn = deleteMovieModal.querySelectorAll("button")[1]; //hacky way to reset the event handler with bind in their callback functions

  noBtn.removeEventListener('click', closeDeleteMovieModal);

  noBtn.addEventListener('click', closeDeleteMovieModal);
  yesBtn.addEventListener('click', deleteMovie.bind(null, movieId));
}

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 STARS</p>
    </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  movieList.appendChild(newMovieElement);
};

const clearInputs = () => {
  for (const input of userInputs) {
    input.value = "";
  }
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    !titleValue.trim() ||
    !imageUrlValue.trim() ||
    !ratingValue.trim() ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Incorrect Inputs!');
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  }
  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  clearInputs();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
}

//Modal Interactions
const addBackdrop = () => {
  backdrop.classList.add('visible');
}

const closeBackdrop = () => {
  backdrop.classList.remove('visible');
}

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  addBackdrop();
}

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
  closeBackdrop();
  clearInputs();
}

const showDeleteMovieModal = () => {
  deleteMovieModal.classList.add('visible');
  addBackdrop();
}

const closeDeleteMovieModal = () => {
  deleteMovieModal.classList.remove('visible');
  closeBackdrop();
}

const cancelAddMovieHandler = () => {
  closeMovieModal();
}

const backdropClickHandler = () => {
  closeMovieModal();
  closeDeleteMovieModal();
  clearInputs();
}

//Event Listeners
startAddMovieBtn.addEventListener('click', showMovieModal);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
backdrop.addEventListener('click', backdropClickHandler)
confirmAddMovieBtn.addEventListener('click', addMovieHandler);







