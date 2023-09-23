import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
