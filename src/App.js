import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Show from "./pages/Show";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";
import Search from "./pages/Search";

function App() {
  return (
    <div className="bg-slate-800">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/shows" element={<Show />} />
        <Route path="/:media_type/:id" element={<Detail />} />
        <Route path="/search/:query" element={<Search />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
