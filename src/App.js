import logo from './logo.svg';
import './App.css';
import MovieCard from "./components/MovieCard";
import { movies } from "./data/movies";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Existing content */}
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* 👇 New Movie Section (Your Task) */}
        <h2 style={{ marginTop: "30px" }}>🎬 Movie List</h2>

        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
