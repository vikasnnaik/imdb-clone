export default function MovieCard({ movie }) {
  return (
    <div className="w-56 bg-gray-900 rounded-xl shadow-md hover:scale-105 transition transform overflow-hidden cursor-pointer">
      <img
        src={movie.poster}
        alt={movie.title}
        className="h-80 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-white font-semibold text-lg">{movie.title}</h3>

        <div className="flex justify-between mt-2 text-gray-300 text-sm">
          <span className="bg-gray-700 px-2 py-1 rounded-full">{movie.year}</span>
          <span className="text-yellow-400 font-bold">⭐ {movie.rating}</span>
        </div>
      </div>
    </div>
  );
}
