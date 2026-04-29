import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cartSlice";
import { FaTrash } from "react-icons/fa";
import { Alert } from "@mui/material";
import "./AddProducts.css";

const AddProducts = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const priceString = String(item.currentPrice || item.price || "0");
      const cleanPrice = Number(
        priceString
          .split("")
          .filter((char) => char >= "0" && char <= "9")
          .join(""),
      );
      const quantity = item.quantity || 1;
      return total + cleanPrice * quantity;
    }, 0);
  };

  const handleCheckout = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const totalSum = calculateTotal();
  const formattedSum = new Intl.NumberFormat("ru-RU").format(totalSum) + " UZS";

  return (
    <div className="cart-container">
      <h2>Savat</h2>

      {showSuccess && (
        <Alert variant="filled" severity="success" sx={{ mb: 2 }}>
          Buyurtmangiz muvaffaqiyatli rasmiylashtirildi!
        </Alert>
      )}

      {cartItems.length === 0 ? (
        <p>Savatingiz bo'sh.</p>
      ) : (
        <div className="cart-wrapper">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
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

                <div className="quantity-control">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    -
                  </button>
                  <span style={{ margin: "0 10px" }}>{item.quantity || 1}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                  </button>
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
            <button className="checkout-btn" onClick={handleCheckout}>
              Rasmiylashtirish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProducts;
