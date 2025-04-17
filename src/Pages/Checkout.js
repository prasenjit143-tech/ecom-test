import './cart.css'

function Chekout() {
  return (
    <>
      <div className="checkout-container">
        <div className="checkout-title">Checkout</div>
        <div className="form-section">
          {/* LEFT SECTION */}
          <div className="form-left">
            <h3>Billing Details</h3>
            <form>
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
              <label>Phone Number</label>
              <input type="tel" placeholder="123-456-7890" required />
              <label>Address</label>
              <input type="text" placeholder="123 Main St" required />
              <label>City</label>
              <input type="text" placeholder="City Name" required />
              <label>Zip/Postal Code</label>
              <input type="text" placeholder={10001} required />
              <label>Country</label>
              <select required>
                <option value>Select Country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="in">India</option>
              </select>
            </form>
            <div className="payment-methods">
              <h3>Payment Method</h3>
              <label>
                <input type="radio" name="payment" defaultChecked /> Credit Card
              </label>
              <br />
              <label>
                <input type="radio" name="payment" /> PayPal
              </label>
              <br />
              <label>
                <input type="radio" name="payment" /> Cash on Delivery
              </label>
            </div>
          </div>
          {/* RIGHT SECTION */}
          <div className="form-right">
            <h3>Order Summary</h3>
            <div className="order-summary">
              <div className="summary-item">
                <span>Product 1</span>
                <span>$19.99</span>
              </div>
              <div className="summary-item">
                <span>Product 2</span>
                <span>$29.99</span>
              </div>
              <div className="summary-item">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>$54.98</span>
              </div>
            </div>
            <button className="btn-checkout">Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chekout;
