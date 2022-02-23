import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignIn from "./pages/signin";
import Services from "./pages/services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/services" exact element={<Services/>} />
        <Route path="/contact-us" exact element={<Contact />} />
        <Route path="/signin" exact element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
