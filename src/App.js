import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import About from "./Page/About";
import "./Style/settings.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
