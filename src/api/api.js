const API_KEY = "YOUR_OMDB_API_KEY"; // replace with your key
const BASE_URL = "https://www.omdbapi.com/";

export async function fetchPopularMovies() {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=popular&type=movie`
  );
  const data = await response.json();

  if (data.Response === "True") {
    return data.Search;
  }
  return [];
}
