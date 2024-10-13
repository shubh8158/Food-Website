import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../context/StoreContext";

// Here i am giving data from assets to the food Display component using props
const FoodItem = ({ id, name, description, price, image }) => {
  const [itemCount, setItemCount] = useState(0);
  const{cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        {/* Fetching image from assets */}
        <img src={url+"/images/"+image} className="food-item-image" alt="" />
        {!cartItems[id] ? 
          <img
            src={assets.add_icon_white}
            className="add"
            onClick={() => addToCart(id)}
            alt=""
          />
         : 
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() =>removeFromCart(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          {/* Fetching Name from  foodlist from assests */}
          <p>{name}</p>
          {/* Fetching rating image from foodlist from assests */}
          <img src={assets.rating_starts} alt="" />
        </div>
        {/* Fetching description and price from foodlist from assets */}
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
