import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.view';
import Gallery from './components/pages/Gallery/Gallery.view';
function App() {
  return (
    <Router>
      <Home/>
      <Gallery/>
    </Router>
  );
}

export default App;
