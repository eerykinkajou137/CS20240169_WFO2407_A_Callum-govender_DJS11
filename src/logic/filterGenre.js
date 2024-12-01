import { GetPodCasts } from "./getPodCast";

function getIdByGenre(genreString) {
  const data = GetPodCasts();

  const genreMapping = {
    1: "Personal Growth",
    2: "Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",
  };

  function getGenreNumber(genreString) {
    // Convert the genreString to match the case of the values in genreMapping
    const lowerCaseGenre = genreString.toLowerCase();

    // Loop through the genreMapping object to find a match
    for (const [key, value] of Object.entries(genreMapping)) {
      if (value.toLowerCase() === lowerCaseGenre) {
        return key; // Return the number associated with the genre
      }
    }

    // Return null if no match is found
    return null;
  }

  const genreId = getGenreNumber(genreString);

  const matchingPodcasts = data.filter((podcast) =>
    podcast.genres.includes(genreId)
  );

  // Return an array of the matching podcast ids
  return matchingPodcasts.map((podcast) => podcast.id);
}
export default getIdByGenre;
