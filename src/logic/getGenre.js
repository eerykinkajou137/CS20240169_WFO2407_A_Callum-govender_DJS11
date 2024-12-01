// Function to get genre titles by genre IDs
export const GetGenre = (genreIds) => {
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

  // Use genreIds to map genre IDs to titles and filter out undefined titles
  return genreIds.map((genreId) => genreMapping[genreId]).filter(Boolean);
};
