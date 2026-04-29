import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Register from "../Register/Register";
import Categories from "../categories/Categories";

const Navbar = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  return (
    <header className="navbar-container">
      <Link to="/" className="logo-link">
        AliExpress
      </Link>

      <div className="catalog-wrapper">
        <button
          className="catalog-btn"
          onClick={() => setIsCatalogOpen(!isCatalogOpen)}
        >
          <span className="icon">☰</span> Katalog
        </button>
        {isCatalogOpen && (
          <div className="categories-dropdown">
            <Categories onClose={() => setIsCatalogOpen(false)} />
          </div>
        )}
      </div>

      <div className="search-box">
        <input type="text" placeholder="iphone 13" />
        <button className="search-btn">Topish</button>
      </div>

      <div className="nav-actions">
        <Link to="/favorites" className="nav-link">
          Saqlanganlar
        </Link>
        <Link to="/cart" className="nav-link">
          Savat
        </Link>
        <Register />
      </div>
    </header>
  );
};

export default Navbar;
