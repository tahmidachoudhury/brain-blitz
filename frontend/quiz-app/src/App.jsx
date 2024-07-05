import "./App.css";
import LandingPage from "./components/LandingPage/index";
import MCQQuestion from "./components/QuestionFormat/Question";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppbar";

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/q" element={<MCQQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
