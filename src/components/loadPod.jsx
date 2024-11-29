import GetPodCasts from "../api";

function LoadCasts() {
  const { podcasts, error } = GetPodCasts(); // Use the hook to get podcasts and error

  // A mapping of genre IDs to genre names
  const genreMap = {
    5: "Drama",
    7: "Comedy",
    // Add more genre mappings here as needed
  };

  if (error) {
    return <div>Error: {error}</div>; // Show the error if any
  }

  return (
    <div className="w-full">
      <div className="grid-flow-row columns-3 ">
        {podcasts.map((podcast, index) => (
          <div
            key={index}
            className=""
            style={{
              backgroundImage: `url(${podcast.image})`, // Use image URL from the API
            }}
          >
            {/* Overlay for text */}
            <div className="">
              <h3 className="">{podcast.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadCasts;
