import { useState } from "react";
import { DisplayCards } from "../components/result";
import { SkeletonCards } from "../components/SkeletonCards";
export function Explore() {
  // State to manage the current sorting option
  const [sort, setSort] = useState("ABC"); // Default to alphabetical order
  const [loading, setLoading] = useState(true); // State to handle loading

  // Function to handle sort change when a user selects a different option
  const handleSortChange = (e) => {
    setSort(e.target.value); // Update sort based on dropdown selection
  };

  // Simulate loading for demonstration purposes (remove in production)
  setTimeout(() => {
    setLoading(false); // Stop loading after 3 seconds
  }, 3000);

  return (
    <div className="p-4">
      {/* Sort Dropdown */}
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2 text-lg text-gray-800">
          Sort By:
        </label>
        <select
          id="sort"
          value={sort}
          onChange={handleSortChange}
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="ABC">Alphabetical (A-Z)</option>
          <option value="ABCDESC">Alphabetical (Z-A)</option>
          <option value="date">Date (Newest First)</option>
          <option value="dateDESC">Date (Oldest First)</option>
        </select>
      </div>

      {/* Display Skeleton or Display Cards */}
      {loading ? (
        <SkeletonCards /> // Display SkeletonCards when loading
      ) : (
        <DisplayCards sort={sort} /> // Display DisplayCards once data is loaded
      )}
    </div>
  );
}
