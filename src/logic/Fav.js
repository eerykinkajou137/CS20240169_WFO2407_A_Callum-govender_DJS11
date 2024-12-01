export function getFav() {
  // Retrieve the 'favPodcasts' array from localStorage (it will be a JSON string)
  const favPodcasts = JSON.parse(localStorage.getItem("favPodcasts"));

  // If the 'favPodcasts' is null or undefined, return an empty array
  if (!favPodcasts) {
    return [];
  }

  // Return the array of podcast ids
  return favPodcasts;
}

export function setFav(podcastId) {
  // Retrieve the existing 'favPodcasts' array from localStorage, or initialize it as an empty array
  let favPodcasts = JSON.parse(localStorage.getItem("favPodcasts")) || [];

  // Check if the podcastId is already in the array to avoid duplicates
  if (!favPodcasts.includes(podcastId)) {
    // Add the podcastId to the array
    favPodcasts.push(podcastId);

    // Save the updated array back to localStorage
    localStorage.setItem("favPodcasts", JSON.stringify(favPodcasts));
  }
}

export function removeFav(podcastId) {
  // Retrieve the existing 'favPodcasts' array from localStorage, or initialize it as an empty array
  let favPodcasts = JSON.parse(localStorage.getItem("favPodcasts")) || [];

  // Filter out the podcastId from the array
  favPodcasts = favPodcasts.filter((id) => id !== podcastId);

  // Save the updated array back to localStorage
  localStorage.setItem("favPodcasts", JSON.stringify(favPodcasts));
}
