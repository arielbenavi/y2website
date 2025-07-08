import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Desktop from "./pages/Desktop";
import Hoodies from "./pages/Hoodies";
import Tshirts from "./pages/Tshirts";
import Warning from "./pages/Warning";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/tshirts" element={<Tshirts />} />
        <Route path="/warning" element={<Warning />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;