import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Home from "./Components/Home";
import Cart from "./Pages/cart";
import About from "./Pages/about";
import Contact from "./Pages/contact"
import Topdeals from "./Pages/TopDeals"
import fuguFabric from './Pages/fuguFabric';
import kente from './Pages/kente';
import africanprint from './Pages/africanprint';
import accessories from './Pages/accessories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}>
            <Route path="/" exact Component={Topdeals} />
            <Route path="/fugufabric" exact Component={fuguFabric} />
            <Route path="/kente" exact Component={kente} />
            <Route path="africanprint" exact Component={africanprint} />
            <Route path="accessories" exact Component={accessories} />
          </Route>
          <Route path='/Cart' exact Component={Cart} />
          <Route path='/About' exact Component={About} />
          <Route path='/Contact' exact Component={Contact} />
        </Routes>
        <Footer />
      </Router>
      
   
    </div>
  );
}

export default App;
