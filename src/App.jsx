import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbarr from "./components/Navbar/Navbarr.jsx";
import Home from "./pages/home/Home";
import Departments from "./pages/department/Departments";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Departments" element={<Departments />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
