import { useState, useEffect } from "react";

const GetPodCasts = () => {
  const [podcasts, setPodcasts] = useState([]); // State for the fetched podcasts
  const [error, setError] = useState(""); // State for error handling

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app");
        if (!response.ok) {
          throw new Error("Failed to fetch posts. Please try again later.");
        }

        const data = await response.json();
        console.log(data);
        setPodcasts(data); // Store the data in the state
      } catch (err) {
        setError(err.message); // Set the error if something goes wrong
        console.log(err); // Log the error for debugging
      }
    };

    fetchPodcasts();

    // Optionally, you could add a cleanup function here to cancel fetch requests on unmount
  }, []); // Empty dependency array ensures this effect only runs once when the component mounts

  // Return the podcasts and any errors
  return { podcasts, error };
};

export default GetPodCasts;
