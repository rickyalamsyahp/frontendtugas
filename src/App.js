import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home.view";
import Gallery from "./components/pages/Gallery/Gallery.view";
function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path='/' component={<Home/>} />
        <Route path='/Gallery' component={<Gallery/>} />
      </Routes>
    </Router>
  );
}

export default App;
