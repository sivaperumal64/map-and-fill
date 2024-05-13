// Sample movie data
const movies = [
  { title: "The Hangover", genre: "comedy" },
  { title: "Scary Movie", genre: "comedy" },
  { title: "The Conjuring", genre: "horror" },
  { title: "Get Out", genre: "horror" },
  { title: "Pulp Fiction", genre: "crime" }
];

// Function to display movies for a specific genre
function displayMovies(genre, movies) {
  const moviesContainer = document.getElementById(`${genre}-movies`);
  moviesContainer.innerHTML = '';
  movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.textContent = movie.title;
      moviesContainer.appendChild(movieElement);
  });
}

// Function to filter movies by genre
function filterMovies(genre) {
  if (genre === 'all') {
      return movies;
  } else {
      return movies.filter(movie => movie.genre === genre);
  }
}

// Initial display of all movies
displayMovies('comedy', movies.filter(movie => movie.genre === 'comedy'));
displayMovies('horror', movies.filter(movie => movie.genre === 'horror'));

// Event listener for genre selection
document.getElementById('genre').addEventListener('change', function() {
  const selectedGenre = this.value;
  const filteredMovies = filterMovies(selectedGenre);
  if (selectedGenre === 'all') {
      displayMovies('comedy', movies.filter(movie => movie.genre === 'comedy'));
      displayMovies('horror', movies.filter(movie => movie.genre === 'horror'));
  } else {
      displayMovies(selectedGenre, filteredMovies);
  }
});
