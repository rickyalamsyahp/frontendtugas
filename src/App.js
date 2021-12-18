import "./App.css";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Home from "./components/pages/Home/Home.view";
import Gallery from "./components/pages/Gallery/Gallery.view";
import Peminjaman from "./components/pages/Peminjaman/Peminjaman.view"
import Login from "./components/pages/Login/Login.pages";
import Daftar from "./components/pages/Daftar/Daftar.view";
import SyaratPeminjaman from "./components/pages/SyaratPeminjaman/SyaratPeminjaman.view";
import Profile from "./components/pages/Profile/Profile.view";
import ProfileSetting from "./components/pages/ProfileSetting/ProfileSetting.view";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/beranda" element={<Home />} />
        <Route exact path="/peminjaman" element={<Peminjaman />} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/daftar' element={<Daftar/>}/>
        <Route exact path='/SyaratPeminjaman' element={<SyaratPeminjaman/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/profile-setting' element={<ProfileSetting/>}/>
      </Routes>
    </Router>
    
);
}

export default App;
