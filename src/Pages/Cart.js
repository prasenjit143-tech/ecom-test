import React, { useEffect, useState } from 'react';
import { getOrCreateCartId } from '../Utils/cartUtils';
import axios from 'axios';
import './cart.css';

const Cart = ({ cart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  const token = localStorage.getItem('token');
  let setcartId = null;
  let url = `http://localhost:5001/api/cart/getCart`;

  if(!token){
    setcartId = getOrCreateCartId();
    url = `http://localhost:5001/api/cart/getCart?cartId=${setcartId}`;
  }

  useEffect(() => {
    const fetchCart = async () => {

    try {  

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const items = res.data?.data?.cart_items || [];
      setCartItems(items);
  
      const q = {};
      items.forEach(item => q[item._id] = 1);
      setQuantities(q);
      
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
    };
  
    fetchCart();
  }, []);  

  const handleQuantityChange = (productId, qty) => {
    setQuantities((prev) => ({ ...prev, [productId]: qty }));
  };
  
  const handleRemove = async (productId) => {
    try {
      await axios.delete("http://localhost:5001/api/cart/removeItemFromCart", {
        data: {
          productId:productId,
          cartId: setcartId,
        },
      });
  
      // Refetch the updated cart
      const res = await axios.get(`http://localhost:5001/api/cart/getCart?cartId=${setcartId}`);
      const items = res.data?.data?.cart_items || [];

      setCartItems(items);

      const updatedQuantities = {};
      items.forEach(item => {
        updatedQuantities[item._id] = quantities[item._id] || 1;
      });
      setQuantities(updatedQuantities);
    
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };  
  
  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const qty = quantities[item._id] || 1;
      return total + item.price * qty;
    }, 0).toFixed(2);
  };  

  return (
    <div className="cart-container">
      <div className="cart-title">Shopping Cart</div>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="item-details">
            <img src={item.productFeaturePic || `${process.env.PUBLIC_URL}/assets/images/p1.png`} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <div className="item-price">${item.price.toFixed(2)}</div>
            </div>
          </div>
          <div className="quantity">
            <label htmlFor={`qty-${item._id}`}>Qty:</label>
            <input
              type="number"
              id={`qty-${item._id}`}
              min={1}
              defaultValue={quantities[item._idid] || 1}
              onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
            />
          </div>
          <button className="remove-btn" onClick={() => handleRemove(item._id)}>Remove</button>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total: ${getTotal()}</h3>
        <a href="/checkout" className="checkout-btn">Proceed to Checkout</a>
      </div>
    </div>
  );
};

export default Cart;
