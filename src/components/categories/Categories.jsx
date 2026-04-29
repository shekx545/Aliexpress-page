import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  MdPhoneAndroid,
  MdLaptop,
  MdElectricalServices,
  MdKitchen,
  MdCheckroom,
  MdShoppingBag,
} from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { katalogData } from "../../static/katalogData";
import "./Categories.css";

const iconMap = {
  "Mobil telefonlar": <MdPhoneAndroid />,
  Kompyuterlar: <MdLaptop />,
  Elektronika: <MdElectricalServices />,
  "Maishiy Texnika": <MdKitchen />,
  "Oyoq kiyimlari": <MdCheckroom />,
};

const Categories = ({ onClose }) => {
  const categories = katalogData.catalog;
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const navigate = useNavigate();

  const handleSubCategoryClick = (subName) => {
    if (onClose) onClose();
    navigate(`/category/${encodeURIComponent(subName)}`);
  };

  return (
    <div className="catalog-menu">
      <div className="sidebar-left">
        {categories.map((cat) => (
          <div
            key={cat.category_name}
            className={`menu-item ${activeCategory.category_name === cat.category_name ? "active" : ""}`}
            onMouseEnter={() => setActiveCategory(cat)}
          >
            <div className="menu-item-left">
              <span className="icon">
                {iconMap[cat.category_name] || <MdShoppingBag />}
              </span>
              <span className="text">{cat.category_name}</span>
            </div>
            {activeCategory.category_name === cat.category_name && (
              <FiArrowRight className="arrow-icon" />
            )}
          </div>
        ))}
      </div>

      <div className="sidebar-right">
        <div className="cat-header-row">
          <h3>{activeCategory.category_name}</h3>
          <a href="#" className="view-all-link">
            Hammasini ko'rish
          </a>
        </div>
        <ul className="sub-categories-list">
          {activeCategory.subcategories.map((sub, idx) => (
            <li
              key={idx}
              className="sub-category-item"
              onClick={() => handleSubCategoryClick(sub.name)}
            >
              {sub.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
