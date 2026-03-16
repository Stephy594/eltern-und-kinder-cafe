import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Kontakt from "./Pages/Kontakt";
import Story from "./Pages/Story";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </Router>
  );
}

export default App;