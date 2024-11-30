import { GetPodCasts } from "../api.jsx"; // Named import
export default function RenderCards() {
  const { podcasts, error, GetGenre } = GetPodCasts(); // Get the podcasts, error, and GetGenre function

  // Handle loading or error states
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!podcasts || podcasts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {podcasts.map((podcast) => (
        <div
          key={podcast.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {/* Podcast Image */}
          <img
            src={podcast.image}
            alt={podcast.title}
            className="w-full h-32 object-cover" // Smaller square image (half the size of typical cards)
          />

          {/* Podcast Title */}
          <h2 className="mt-2 text-sm font-semibold text-gray-800 truncate px-2">
            {podcast.title}
          </h2>

          {/* Genres */}
          <div className="mt-2 flex flex-wrap gap-2 px-2">
            {podcast.genres?.map((genreId) => (
              <span
                key={genreId}
                className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
              >
                {GetGenre([genreId])[0]} {/* Get the genre title */}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
