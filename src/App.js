import "./App.css";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Home from "./components/pages/Home/Home.view";
import Gallery from "./components/pages/Gallery/Gallery.view";
import Peminjaman from "./components/pages/Peminjaman/Peminjaman.view"
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/beranda" element={<Home />} />
        <Route exact path="/peminjaman" element={<Peminjaman />} />


      </Routes>
    </Router>
    
);
}

export default App;
