
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Nav from "./assets/components/Nav";
import CV from "./assets/pages/CV";
import ColorPicker from "./assets/pages/ColorPicker";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
