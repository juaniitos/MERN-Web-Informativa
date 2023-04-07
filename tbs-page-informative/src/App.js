import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import QuienesSomos from './pages/QuienesSomos';
import ServiciosPage from './pages/ServiciosPage';
import ProductosPage from './pages/ProductosPage';

function App() {
  return (
    
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/tbs' Component={QuienesSomos} />
          <Route exact path='/servicios' Component={ServiciosPage} />
          <Route exact path='/productos' Component={ProductosPage} />
          <Route exact path='*' Component={Home} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
