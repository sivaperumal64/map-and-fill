
const movies = [
    { title: "The Shawshank Redemption", genre: "drama" },
    { title: "Forest Gump", genre: "drama" },
    { title: "The Dark Knight", genre: "action" },
    { title: "Inception", genre: "action" },
    { title: "The Hangover", genre: "comedy" },
    { title: "Superbad", genre: "comedy" }
];

function filterMovies() {
    const genre = document.getElementById("genreSelector").value;


    const filteredMovies = genre === "all" ? movies : movies.filter(movie => movie.genre === genre);

    displayMovies(filteredMovies);
}


function displayMovies(movies) {
    const moviesContainer = document.getElementById("moviesContainer");
    moviesContainer.innerHTML = "";


    movies.map(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.className = "box";
        movieDiv.innerHTML = `
            <h3>${movie.title}</h3>
            Genre: ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}
        `;
        moviesContainer.appendChild(movieDiv);
    });
}


filterMovies();
