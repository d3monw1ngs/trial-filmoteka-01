const IMG_URL = 'https://image.tmdb.org/t/p/w500';

document.addEventListener('DOMContentLoaded', function () {
const watchedBtn = document.getElementById('watched-btn');
const queueBtn = document.getElementById('queue-btn');
const moviesContainer = document.querySelector('.gallery');
let watchedMovies = JSON.parse(localStorage.getItem('movie-watched'));
let queuedMovies = JSON.parse(localStorage.getItem('movie-queue'));

function updateLocalStorage(watchedMovies, queuedMovies) {
    localStorage.setItem('movie-watched', JSON.stringify(watchedMovies));
    localStorage.setItem('movie-queue', JSON.stringify(queuedMovies));
}

getLibMovies(watchedMovies);

watchedBtn.addEventListener('click', function(e) {
    e.preventDefault();
    updateLocalStorage(watchedMovies, queuedMovies);
});

queueBtn.addEventListener('click', function(e) {
    e.preventDefault();
    updateLocalStorage(watchedMovies, queuedMovies);
});

// Load movies whose Ids matched with those stored in the localStorage
async function getLibMovies(array) {
    console.log('moviesContainer:', moviesContainer);
    if(!moviesContainer) {
        console.error('Movies container not found.');
        return;    
    }
    moviesContainer.innerHTML = '';
    for ( const movieId of array ) {
        try {
            if(!movieId || !isValidMovieId(movieId)) {
                console.warn(`Invalid movie ID: ${movieId}`);
                continue;
            }
            const movie = await getMovieDetailsById(movieId);
            const movieElement = createMovieElement(movie);
            moviesContainer.appendChild(movieElement);
        } catch (error) {
            if(error.message === 'Movie not found.') {
                console.warn(`Movie with ID ${movieId} not found.`);
            } else {
                console.error('Failed to display movie:', error);
            }
        }
    }
}

// Requesting movies using IDs
async function getMovieDetailsById(movieId) {
    console.log('Movie ID:', movieId);
    const API_KEY = "b5e824a3d922f68ba211fcf6dbdcb6f5";
    const BASE_URL = 'https://api.themoviedb.org/3';
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;

    const response = await fetch(url);
    const movieDetails = await response.json();
    console.log('API Response:', movieDetails);
    return movieDetails;
    // if (!response.ok) {
    //     if(response.status === 404) {
    //         throw new Error('Movie not found.');
    //     } else {
    //         throw new Error('Failed to fetch movie details: ' + response.statusText);
    //     }
    // }
}

// Create movie display
function createMovieElement(movie) {
    const element = document.createElement('div');
    if(!moviesContainer) {
        console.error('Gallery container not found.');
        return;
    }
    element.classList.add('movie');
    element.innerHTML = `
        <img src="${movie.poster_path ? IMG_URL + movie.poster_path : 'http://via.placeholder.com/1080x1500'}";
        <h3>${movie.title}</h3>
    `;
    return element;
}

function isValidMovieId(movieId) {
    return !isNaN(movieId);
}
});

// =====================================================
// function localSetter() {
//     let watchlist = localStorage.getItem("movie-watched");
//     let queuelist = localStorage.getItem("movie-queue");
    
//     if (watchlist === null) {
//       localStorage.setItem("watchList", "[]");
      
//     }
//     if (queuelist === null) {
//       localStorage.setItem("queueList", "[]");    
//     }
//   }