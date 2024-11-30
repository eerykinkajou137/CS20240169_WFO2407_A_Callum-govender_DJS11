import { useState, useEffect } from "react";

export const GetPodCasts = () => {
  const [podcasts, setPodcasts] = useState([]); // State for the fetched podcasts
  const [error, setError] = useState(""); // State for error handling

  // Genre ID to Title mapping
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

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app");
        if (!response.ok) {
          throw new Error("Failed to fetch podcasts. Please try again later.");
        }

        const data = await response.json();
        console.log(data);
        setPodcasts(data); // Store the data in the state
      } catch (err) {
        setError(err.message); // Set the error if something goes wrong
        console.error(err); // Log the error for debugging
      }
    };

    fetchPodcasts();
  }, []); // Empty dependency array ensures this effect only runs once when the component mounts

  // Function to get genre titles by excluding specific IDs
  const GetGenre = (genreIds) => {
    // Use genreIds directly to map genre IDs to titles
    return genreIds.map((genreId) => genreMapping[genreId]).filter(Boolean); // Filter out undefined titles
  };

  return { podcasts, error, GetGenre };
};
