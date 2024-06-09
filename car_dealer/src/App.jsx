import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import AddCarPage from "./pages/AddCarPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/add_car" element={<AddCarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
