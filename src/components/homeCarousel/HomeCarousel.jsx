import React from "react";
import headerData from "../../static/headerData";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { addToHeart } from "../../redux/heartSlice";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <div className="product-grid">
        {headerData.map((item) => (
          <div key={item.id} className="product-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} />
              <button 
                className="like-btn" 
                onClick={() => dispatch(addToHeart(item))}
              >
                ❤
              </button>
            </div>

            <div className="price-section">
              <span className="old-price">{item.oldPrice} UZS</span>
              <span className="discount">{item.discount}</span>
              <p className="current-price">{item.currentPrice} UZS</p>
            </div>

            <div className="rating-section">
              <span className="star">⭐ {item.rating}</span>
              <span className="sales">{item.salesCount}</span>
            </div>
            
            <h3 className="product-name">{item.name}</h3>

            {item.recommendation && (
              <p className="recommendation">{item.recommendation}</p>
            )}
            
            <p className="delivery">{item.delivery}</p>

            <button
              className="buy-btn"
              onClick={() => dispatch(addToCart(item))}
            >
              Olish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;