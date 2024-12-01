import { useState, useEffect } from "react";

// Custom hook to fetch podcasts
export const useFetchPodCasts = () => {
  const [podcasts, setPodcasts] = useState([]); // State for the fetched podcasts
  const [error, setError] = useState(""); // State for error handling

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app");

        // Check if the response is ok (status code in the range 200-299)
        if (!response.ok) {
          throw new Error("Failed to fetch podcasts. Please try again later.");
        }

        const data = await response.json();
        console.log(data);

        // Ensure data is an array before setting it
        if (Array.isArray(data)) {
          setPodcasts(data); // Store the data in the state
        } else {
          throw new Error("Fetched data is not an array.");
        }
      } catch (err) {
        setError(err.message); // Set the error if something goes wrong
        console.error(err); // Log the error for debugging
      }
    };

    fetchPodcasts();
  }, []); // Empty dependency array ensures this effect only runs once when the component mounts

  return { podcasts, error }; // Return podcasts and error for use in components
};
