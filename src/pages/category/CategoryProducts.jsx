import React from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { katalogData } from '../../static/katalogData';
import './CategoryProducts.css';

const CategoryProducts = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  let targetSubcategory = null;
  katalogData.catalog.forEach(cat => {
    cat.subcategories.forEach(sub => {
      if (sub.name === name) {
        targetSubcategory = sub;
      }
    });
  });

  if (!targetSubcategory) {
    return <div className="category-products-container">Kategoriya topilmadi.</div>;
  }

  return (
    <div className="category-products-container">
      <h2>{targetSubcategory.name}</h2>
      
      <div className="cat-products-grid">
        {targetSubcategory.products && targetSubcategory.products.map((product) => (
          <div key={product.id} className="cat-product-card-large">
            <img 
              src={product.img === "url" || !product.img ? "https://via.placeholder.com/200" : product.img} 
              alt={product.name} 
            />
            <div className="cat-product-info-large">
              <p className="cat-product-title">{product.name}</p>
              <h3 className="cat-product-price">{product.price} UZS</h3>
              <button 
                className="buy-btn-large" 
                onClick={() => dispatch(addToCart(product))}
              >
                Savatga qo'shish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
