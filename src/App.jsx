import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import AddProducts from './components/addProducts/AddProducts'; 
import CartProducts from './components/cartProducts/CartProducts'; 
import CategoryProducts from './pages/category/CategoryProducts'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<AddProducts />} />
          <Route path="/favorites" element={<CartProducts />} />
          <Route path="/category/:name" element={<CategoryProducts />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
