import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Inspection from "./pages/inspection.jsx";
import Result from "./pages/result.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inspection" element={<Inspection />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;