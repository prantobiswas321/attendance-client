import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Search from "./components/Home/Search";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees/:id" element={<Search/>} />
        {/* <Route path="/search" element={<Search/>} /> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
