import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieList from "./components/Movielist"
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="text-white">
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="movies/:type" element={<MovieList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
