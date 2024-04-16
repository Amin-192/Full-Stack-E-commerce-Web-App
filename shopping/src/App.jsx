
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Nav from "./assets/components/Nav";
import CV from "./assets/pages/CV";
import ColorPicker from "./assets/pages/ColorPicker";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/ColorPicker" element={<ColorPicker />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
