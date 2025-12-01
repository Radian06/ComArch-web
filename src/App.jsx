import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Inspection from "./pages/inspection.jsx";
import Result from "./pages/result.jsx";
import Login from "./pages/login.jsx";
import Join from "./pages/join.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inspection" element={<Inspection />} />
      <Route path="/result" element={<Result />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
}

export default App;