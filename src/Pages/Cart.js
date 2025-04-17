import './cart.css';

function Cart() {
  return (
    <>
    {/* inner page section */}
    <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Cart</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end inner page section */}

      <div className="cart-container">
        <div className="cart-title">Shopping Cart</div>
        <div className="cart-item">
          <div className="item-details">
            <img src={`${process.env.PUBLIC_URL}/assets/images/p1.png`} alt="Product" />
            <div>
              <h4>Product Name 1</h4>
              <div className="item-price">$19.99</div>
            </div>
          </div>
          <div className="quantity">
            <label htmlFor="qty1">Qty:</label>
            <input type="number" id="qty1" min={1} defaultValue={1} />
          </div>
          <button className="remove-btn">Remove</button>
        </div>
        <div className="cart-item">
          <div className="item-details">
            <img src={`${process.env.PUBLIC_URL}/assets/images/p1.png`} alt="Product" />
            <div>
              <h4>Product Name 2</h4>
              <div className="item-price">$29.99</div>
            </div>
          </div>
          <div className="quantity">
            <label htmlFor="qty2">Qty:</label>
            <input type="number" id="qty2" min={1} defaultValue={2} />
          </div>
          <button className="remove-btn">Remove</button>
        </div>
        <div className="cart-summary">
          <h3>Total: $79.97</h3>
          <a href='checkout' className="checkout-btn">Proceed to Checkout</a>
        </div>
      </div>
    </>
  );
}

export default Cart;
