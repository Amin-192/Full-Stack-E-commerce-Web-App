
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Nav from "./assets/components/Nav";
import CV from "./assets/components/CV";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/CV" element={<CV />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
