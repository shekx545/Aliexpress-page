import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';

// Pages
import Home from './pages/home/Home';
import AddProducts from './components/addProducts/AddProducts'; // This is Cart demo
import CartProducts from './components/cartProducts/CartProducts'; // This is Favorites demo
import CategoryProducts from './pages/category/CategoryProducts'; // New Category Products page

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
