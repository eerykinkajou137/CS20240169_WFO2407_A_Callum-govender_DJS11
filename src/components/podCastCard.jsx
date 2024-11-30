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
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
      {podcasts.map((podcast) => (
        <div
          key={podcast.id}
          className="hover:bg-[#606060] w-[80%] mx-auto py-2 rounded-lg overflow-hidden hover:shadow-lg transition-color duration-300 flex flex-col items-center"
        >
          {/* Podcast Image */}
          <img
            src={podcast.image}
            alt={podcast.title}
            className="w-[60%] h-32 object-cover mx-auto rounded-xl" // Smaller square image (half the size of typical cards)
          />

          {/* Podcast Title */}
          <h2 className="mt-2 text-sm font-semibold text-white truncate px-2">
            {podcast.title}
          </h2>

          {/* Genres */}
          <div className="mt-2 flex flex-wrap gap-2 px-2">
            {GetGenre(podcast.genres).map((genreTitle, index) => (
              <span
                key={index} // Use index as key if genres may repeat
                className="text-[0.5rem] bg-[#202020]  text-white px-3 py-2 rounded-full"
              >
                {genreTitle} {/* Get the genre title */}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
