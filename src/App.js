import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.view';
function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
