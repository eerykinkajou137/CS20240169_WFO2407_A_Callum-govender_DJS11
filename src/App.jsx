import { Header } from "./components/header";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
// import { FavouritesPage } from "./pages/FavouritesPage";
// import { SearchResultsPage } from "./pages/SearchResultsPage";
// import { MoreDetailsPage } from "./pages/MoreDetailsPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/favourites" element={<FavouritesPage />} /> */}
        {/* <Route path="/search" element={<SearchResultsPage />} /> */}
        {/* <Route path="/details" element={<MoreDetailsPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
