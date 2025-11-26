import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Inspection from "./pages/inspection.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inspection" element={<Inspection />} />
    </Routes>
  );
}

export default App;
