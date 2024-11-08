import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import About from "./Page/About";
import "./Style/settings.css";
import { useState } from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";

function App() {
  // L'état visible détermine si la navigation (Navigation) doit être affichée ou non.
  const [visible, setVisible] = useState(false);
  // La fonction 'displayNav' est utilisée pour changer l'état de 'visible'.
  const displayNav = () => {
    // On inverse la valeur de 'visible' chaque fois que la fonction est appelée.
    setVisible(!visible);
  };
  return (
    <div className="App">
      <Router>
        <Header displayNav={displayNav} />
        {visible && <Navigation displayNav={displayNav} visible={visible} />}
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
