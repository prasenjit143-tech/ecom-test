import React, { useEffect, useState } from "react";
import { getOrCreateCartId } from '../Utils/cartUtils';
import axios from 'axios';

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

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem('token');
    let setcartId = null;
    const parameter = { productId: product._id };
    if(!token){
      setcartId = getOrCreateCartId();
      const parameter = { productId: product._id, setcartId };
    }

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    try {
      const response = await axios.post(
        'http://localhost:5001/api/cart/createCart',
         parameter,
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      alert(error?.response?.data?.error || "Something went wrong");
      console.error("Error adding product to cart:", error);
    }
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
                      <a href="/" className="option2">
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

        </div>
      </section>
    </>
  );
}

export default Product;
