import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrCreateCartId } from '../Utils/cartUtils';
import axios from 'axios';
import './cart.css';

function Chekout() {

const navigate = useNavigate();

const [cartItems, setCartItems] = useState([]);
const [couponCode, setCouponCode] = useState('');
const [couponMessage, setCouponMessage] = useState('');
const [errcouponMessage, setErrCouponMessage] = useState('');
const [discountAmount, setDiscountAmount] = useState(0.00);
const [totalAmount, setTotalAmount] = useState(0.00);
const [quantities, setQuantities] = useState({});
const [formData, setFormData] = useState({
  shippingAddress: '',
  city: '',
  zipcode: '',
  country: '',
  paymentMethod: 'COD',
});

  const token = localStorage.getItem('token');
  let setcartId = null;
  let url = `http://localhost:5001/api/cart/getCart`;

  if(!token){
    setcartId = getOrCreateCartId();
    url = `http://localhost:5001/api/cart/getCart?cartId=${setcartId}`;
  }

  useEffect(() => {
    const fetchCart = async () => {
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
    };
  
    fetchCart();
  }, []);  

  const handleQuantityChange = (productId, qty) => {
    setQuantities((prev) => ({ ...prev, [productId]: qty }));
  }; 
  
  const getsubTotal = () => {
    const totalAmt = cartItems.reduce((total, item) => {
      const qty = quantities[item._id] || 1;
      return total + item.price * qty;
    }, 0).toFixed(2);

    return totalAmt;
  };

  const gettotalAmt = () => {
    const totalAmt = getsubTotal() - discountAmount;
    return totalAmt;
    // setTotalAmount(totalAmt)
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const placeOrder = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5001/api/order/place',
        {
          shippingAddress: formData.shippingAddress,
          zipcode: formData.zipcode,
          city: formData.city,
          country: formData.country,
          discountAmount:discountAmount,
          paymentMethod: formData.paymentMethod,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      const orderId = response.data?.order?._id;
      if (orderId) {
        navigate(`/order/details/`);
        // navigate(`/order/details/${orderId}`);
      }
      // You can redirect to the order confirmation page if needed
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order');
    }
  };

  const applyCoupon = async () => {
    setCouponMessage('');
    setErrCouponMessage('');
    try {
      const res = await axios.post(
        'http://localhost:5001/api/coupon/validate',
        { code: couponCode,
          cartTotal:getsubTotal()
         },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (res.status === 200) {
        setDiscountAmount((res.data.discount).toFixed(2));
        setCouponMessage(`Coupon applied! You saved ₹${res.data.discount}`);
        setTotalAmount(getsubTotal() - res.data.discount);
      } else {
        setErrCouponMessage(res.data.message || 'Invalid coupon');
      }
    } catch (err) {
      console.error('Error applying coupon', err);
      setErrCouponMessage(err.response.data.message);
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-title">Checkout</div>
      <div className="form-section">
        {/* LEFT SECTION */}
        <div className="form-left">
          <h3>Billing Details</h3>
          <form>
            <label>Address</label>
            <input
              type="text"
              name="shippingAddress"
              placeholder="123 Main St"
              value={formData.shippingAddress}
              onChange={handleInputChange}
              required
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="City Name"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <label>Zip/Postal Code</label>
            <input
              type="text"
              name="zipcode"
              placeholder="700000"
              value={formData.zipcode}
              onChange={handleInputChange}
              required
            />
            <label>Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="in">India</option>
            </select>
          </form>
          <div className="payment-methods">
            <h3>Payment Method</h3>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="ONLINE"
                checked={formData.paymentMethod === 'ONLINE'}
                onChange={handleInputChange}
              />
              Pay Online
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                checked={formData.paymentMethod === 'COD'}
                onChange={handleInputChange}
              />
              Cash on Delivery
            </label>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="form-right">
          <div className='gap-2'>
            <label>Apply Coupon</label>
            <input
              type="text"
              className='col-9'
              name="coupon_code"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              required
            />

            <button className="col-3 btn-checkout" onClick={applyCoupon}>
              Apply
            </button>
            {couponMessage && <p style={{ color: 'green' }}>{couponMessage}</p>}
            {errcouponMessage && <p style={{ color: 'red' }}>{errcouponMessage}</p>}
          </div>

          <h3>Order Summary</h3>
          <div className="order-summary">
            {cartItems.map((item) => (
              <div className="summary-item" key={item._id}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}

            <div className="summary-total">
              <span>Sub Total: ${getsubTotal()}</span>
            </div>

            <div className="summary-total">
              <span>Discount: ${discountAmount}</span>
            </div>

            <div className="summary-total">
              <span>Total: ${gettotalAmt()}</span>
            </div>
          </div>

          <button className="btn-checkout" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chekout;
