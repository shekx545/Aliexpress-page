import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromHeart } from "../../redux/heartSlice";
import { addToCart } from "../../redux/cartSlice";
import { FaTrash } from "react-icons/fa";
import "./CartProducts.css"; 

const Favorites = () => {
  const heartItems = useSelector((state) => state.heart.heartItems);
  const dispatch = useDispatch();

  return (
    <div className="favorites-container">
      <h2>Saqlanganlar</h2>
      {heartItems.length === 0 ? (
        <p>Saqlangan mahsulotlar yo'q.</p>
      ) : (
        <div className="favorites-grid">
          {heartItems.map((item) => (
            <div key={item.id} className="favorite-card">
              <img
                src={item.image || item.img || "https://via.placeholder.com/150"}
                alt={item.name || "Mahsulot"}
              />
              <h4>{item.name || item.title}</h4>
              <p className="price">{item.currentPrice || item.price} UZS</p>

              <div className="favorite-actions">
                <button
                  className="buy-btn"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Savatga qo'shish
                </button>
                <button
                  className="delete-btn"
                  aria-label="O'chirish"
                  onClick={() => dispatch(removeFromHeart(item.id))}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;