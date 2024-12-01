import { GetPodCasts } from "./useFetch";

function findPodCast(title) {
  const data = GetPodCasts();

  // Convert the search title to lowercase
  const lowerCaseTitle = title.toLowerCase();

  // Filter the data array to find podcasts where the title matches
  const matchingPodcasts = data.filter((podcast) =>
    podcast.title.toLowerCase().includes(lowerCaseTitle)
  );

  // Return an array of the matching podcast ids
  return matchingPodcasts.map((podcast) => podcast.id);
}

export default findPodCast;
