import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import './App.css';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/Shop' exact Component={Shop}/>
          <Route path='/About' exact Component={About}/>
          <Route path='/Contact' exact Component={Contact}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
