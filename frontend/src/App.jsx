import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Result from "./pages/Result";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/predict" element={<Predict />} />
      <Route path="/result" element={<Result />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/how" element={<HowItWorks />} />
    </Routes>
  );
}

export default App;