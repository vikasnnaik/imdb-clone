import MovieCard from "./components/MovieCard";

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/I/71n58aO413L._AC_SL1024_.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/I/51CbU6H5SSL._AC_.jpg",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-3xl font-bold text-white mb-6">
        🎬 Movie List
      </h1>

      <div className="flex flex-wrap gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
