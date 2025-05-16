function Footer() {
  return (
    <>
      {/* footer start */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="full">
                <div className="logo_footer">
                  <a href="#">
                    <img
                      width={210}
                      src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                      alt="#"
                    />
                  </a>
                </div>
                <div className="information_f">
                  <p>
                    <strong>ADDRESS:</strong> 28 White tower, Street Name New
                    York City, USA
                  </p>
                  <p>
                    <strong>TELEPHONE:</strong> +91 987 654 3210
                  </p>
                  <p>
                    <strong>EMAIL:</strong> yourmain@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/product">Product</a>
                          </li>
                          <li>
                            <a href="/testimonial">Testimonial</a>
                          </li>
                          <li>
                            <a href="/blog">Blog</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="widget_menu">
                        <h3>Account</h3>
                        <ul>
                          <li>
                            <a href="/profile">Account</a>
                          </li>
                          <li>
                            <a href="/checkout">Checkout</a>
                          </li>
                          <li>
                            <a href="/login">Login</a>
                          </li>
                          <li>
                            <a href="/register">Register</a>
                          </li>
                          <li>
                            <a href="/shopping">Shopping</a>
                          </li>
                          <li>
                            <a href="/widget">Widget</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="widget_menu">
                    <h3>Newsletter</h3>
                    <div className="information_f">
                      <p>
                        Subscribe by our newsletter and get update protidin.
                      </p>
                    </div>
                    <div className="form_sub">
                      <form>
                        <fieldset>
                          <div className="field">
                            <input
                              type="email"
                              placeholder="Enter Your Mail"
                              name="email"
                            />
                            <input type="submit" defaultValue="Subscribe" />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
      <div className="cpy_">
        <p className="mx-auto">
          © 2025 All Rights Reserved By{" "} Developer
          <br />
        </p>
      </div>
    </>
  );
}
export default Footer;
