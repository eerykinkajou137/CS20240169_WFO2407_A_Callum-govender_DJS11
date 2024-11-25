import { useEffect } from "react";
import GetData from "./api.jsx";

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await GetData(); // Wait for the data to resolve
        console.log(data); // Log the actual resolved data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return <div>Check the console for API data</div>;
}

export default App;
