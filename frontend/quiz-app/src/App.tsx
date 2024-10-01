import "./App.css"
import LandingPage from "./components/LandingPage/index"
import MCQQuestion from "./components/QuestionFormat/Questions"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ResponsiveAppBar from "./components/ResponsiveAppbar"
import Join from "./components/JoinGamePage/join"
import GamePage from "./components/GameplayArea/GamePage"

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        {/* <Route path="join" element={<Join />} /> */}
        <Route path="/game" element={<GamePage />} />
        <Route path="/q" element={<MCQQuestion />} />
      </Routes>
    </Router>
  )
}

export default App
