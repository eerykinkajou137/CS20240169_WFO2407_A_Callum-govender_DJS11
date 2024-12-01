import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate(); // Correct hook usage

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  const handleSearch = () => {
    if (search) {
      navigate(`/search?query=${search}`);
    }
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
    navigate(`/genre?filter=${e.target.value}`);
  };

  return (
    <header>
      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/favourites")}>Favourites</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search titles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        <select value={genre} onChange={handleGenreChange}>
          <option value="">Select Genre</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="thriller">Thriller</option>
        </select>
      </div>
    </header>
  );
}
