import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import AddMovie from "./pages/AddMovie";
import NavBar from "./components/Navbar/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/add-movie" element={<AddMovie />} />
        </Routes>
        {/* Footer attribution & floating back-to-top btn on every page. */}
      </BrowserRouter>
    </div>
  );
}

export default App;
