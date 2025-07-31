import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HeroContainer from "./components/HeroContainer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroContainer />} />
        <Route path="/flights" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
