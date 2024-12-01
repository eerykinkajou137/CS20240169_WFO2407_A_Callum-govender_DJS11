import { useFetchPodCasts } from "../logic/getPodCast"; // Hook to fetch podcasts
import { GetGenre } from "../logic/getGenre"; // Function to get genres

export function DisplayCards(sort) {
  const { podcasts, error } = useFetchPodCasts(); // Use the hook to fetch podcasts

  // If there is an error, display it
  if (error) {
    return <div>Error: {error}</div>;
  }

  // If podcasts are still loading, you can show a loading state
  if (podcasts.length === 0) {
    return <div>Loading...</div>;
  }

  // Sort the podcasts based on the `sort` parameter
  let sortedPodcasts = [...podcasts]; // Create a copy of the podcasts array to avoid direct mutation

  switch (sort) {
    case "ABC":
      sortedPodcasts.sort((a, b) => a.title.localeCompare(b.title)); // Alphabetical order
      break;
    case "ABCDESC":
      sortedPodcasts.sort((a, b) => b.title.localeCompare(a.title)); // Reverse alphabetical order
      break;
    case "date":
      sortedPodcasts.sort((a, b) => new Date(a.updated) - new Date(b.updated)); // Sort by updated date ascending
      break;
    case "dateDESC":
      sortedPodcasts.sort((a, b) => new Date(b.updated) - new Date(a.updated)); // Sort by updated date descending
      break;
    default:
      // No sorting, keep original order
      break;
  }

  // Render the podcasts
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
      {sortedPodcasts.map((podcast) => (
        <div
          key={podcast.id}
          className="hover:bg-[#606060] w-[80%] mx-auto py-2 rounded-lg overflow-hidden hover:shadow-lg transition-color duration-300 flex flex-col items-center"
        >
          {/* Podcast Image */}
          <img
            src={podcast.image}
            alt={podcast.title}
            className="w-[60%] h-32 object-cover mx-auto rounded-xl"
          />

          {/* Podcast Title */}
          <h2 className="mt-2 text-sm font-semibold text-white truncate px-2">
            {podcast.title}
          </h2>

          {/* Genres */}
          <div className="mt-2 flex flex-wrap gap-2 px-2">
            {GetGenre(podcast.genres).map((genreTitle, index) => (
              <span
                key={index}
                className="text-[0.5rem] bg-[#202020] text-white px-3 py-2 rounded-full"
              >
                {genreTitle}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
