import { useState, useEffect } from "react";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setMovies([]);
      setNoResults(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      setLoading(true);

      fetch(
        `https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${encodeURIComponent(
          query
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.Response === "True") {
            setMovies(data.Search);
            setNoResults(false);
          } else {
            setMovies([]);
            setNoResults(true);
          }
          setLoading(false);
        })
        .catch(() => {
          setMovies([]);
          setNoResults(true);
          setLoading(false);
        });
    }, 500); // ✅ Debounce (500ms)

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div>
      <h2>Movie Search</h2>

      <input
        type="text"
        placeholder="Search movies by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {!loading && movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              {movie.Title} ({movie.Year})
            </li>
          ))}
        </ul>
      )}

      {!loading && noResults && <p>No Results Found</p>}
    </div>
  );
}

export default MovieSearch;
