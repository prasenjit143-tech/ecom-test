import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5001/api/product/getProducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.data.product);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Add to cart handler
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart:", [...cart, product]);
  };

  return (
    <>
      {/* inner page section */}
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Product Grid</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product section */}
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>

          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                <div className="box">
                  <div className="option_container">
                    <div className="options">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="option1"
                      >
                        Add To Cart
                      </button>
                      <a href="#" className="option2">
                        Buy Now
                      </a>
                    </div>
                  </div>
                  <div className="img-box">
                    <img
                      src={product.productFeaturePic}
                      alt={product.name}
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="detail-box">
                    <h5>{product.name}</h5>
                    <h6>${product.price}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="btn-box">
            <a href="#">View All products</a>
          </div>

          {/* Cart Summary (Optional) */}
          {cart.length > 0 && (
            <div className="mt-4 p-3 border">
              <h4>🛒 Cart Summary</h4>
              <ul>
                {cart.map((item, i) => (
                  <li key={i}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
              <strong>Total Items: {cart.length}</strong>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Product;
