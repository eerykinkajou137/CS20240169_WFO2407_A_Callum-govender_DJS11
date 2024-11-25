// call the api
async function GetData() {
  try {
    const response = await fetch("https://podcast-api.netlify.app");

    if (!response.ok) {
      console.log("Error: Failed to fetch data from API");
      return; // You may want to return early in case of an error
    }

    const data = await response.json(); // Awaiting the response.json() as well

    return data;
  } catch (error) {
    console.log("Error:", error); // Catching any other errors (e.g., network issues)
  }
}

export default GetData;
