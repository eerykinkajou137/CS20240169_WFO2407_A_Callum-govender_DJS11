import { useState, useEffect } from "react";

const GetPodCasts = () => {
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app");
        if (!response.ok) {
          //Check if the res is ok
          throw new Error("Failed to fetch posts. Please try again later.");
        }

        const data = await response.json();
        setCasts(data);
      } catch (err) {
        setError(err.message);
        console.log(error);
      }
    };

    fetchPosts();
  });

  return casts;
};

export default GetPodCasts;
