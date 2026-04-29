import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import { FaTrash, FaRegBookmark, FaStore } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import "./AddProducts.css";

const AddProducts = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const priceString = String(item.currentPrice || item.price || "0");
      const cleanPrice = parseInt(
        [...priceString].filter((char) => char >= "0" && char <= "9").join(""),
        10,
      );
      return total + (isNaN(cleanPrice) ? 0 : cleanPrice);
    }, 0);
  };

  const totalSum = calculateTotal();
  const formattedSum = new Intl.NumberFormat("ru-RU").format(totalSum) + " UZS";

  return (
    <div className="cart-container">
      <h2>Savat</h2>

      {cartItems.length === 0 ? (
        <p>Savatingiz bo'sh. Mahsulot qo'shing.</p>
      ) : (
        <div className="cart-wrapper">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-info">
                  <img
                    src={item.image || "https://via.placeholder.com/80"}
                    alt={item.name}
                  />
                  <div className="item-text">
                    <h4>{item.name || item.title}</h4>
                    <p className="price">
                      {item.currentPrice || item.price} UZS
                    </p>
                  </div>
                </div>

                <div className="item-actions">
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    <FaTrash /> O'chirish
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Jami: {formattedSum}</h3>
            <button className="checkout-btn">Rasmiylashtirish</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProducts;
