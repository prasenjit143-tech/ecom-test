import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navber from "./Navbar";

function Wishlist() {
  const { id } = useParams();
  const [orderData, setOrderData] = useState("");
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5001/api/order/details/${id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         setOrderData(res.data.data);
//         console.log(res.data.data);
//       } catch (err) {
//         console.error("Error fetching order", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrder();
//   }, [id]);

//   if (loading || !orderData) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         Loading order details...
//       </div>
//     );
//   }

 

  return (
    <>
      {/* inner page section */}
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Wishlist</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end inner page section */}

      <div className="dashboard">
        <Navber />
        <main className="main-content">
          <header>
            <h1>Wishlist</h1>
            {/* <p>Here is your dashboard overview.</p> */}
          </header>
          {/* <section className="cards">
            <div style={containerStyle}>
              <div style={titleStyle}>Order Details</div>

              <div style={sectionStyle}>
                <div style={sectionTitleStyle}>Order Info</div>
                <div>Order ID: {orderData._id}</div>
                <div>Status: {orderData.status}</div>
                <div>
                  Placed on: {new Date(orderData.createdAt).toLocaleString()}
                </div>
              </div>

              <div style={sectionStyle}>
                <div style={sectionTitleStyle}>Shipping Info</div>
                <div>Address: {orderData.shippingAddress}</div>
                <div>City: {orderData.city}</div>
                <div>Country: {orderData.country}</div>
              </div>

              <div style={sectionStyle}>
                <div style={sectionTitleStyle}>Payment</div>
                <div>Method: {orderData.paymentMethod}</div>
                <div>Shipping Charge: ₹{orderData.shippingCharge}</div>
                <div style={{ fontWeight: "bold", marginTop: "10px" }}>
                  Discount Amount: ₹{orderData.discountAmount || "N/A"}
                </div>
                <div style={{ fontWeight: "bold", marginTop: "10px" }}>
                  Total: ₹{orderData.totalAmount || "N/A"}
                </div>
              </div>

              <div style={sectionStyle}>
                <div style={sectionTitleStyle}>Items</div>
                {Array.isArray(orderData.items) &&
                orderData.items.length > 0 ? (
                  orderData.items.map((item) => (
                    <div className="order-item" key={item._id}>
                      <span>Product ID: {item.product._id} </span>

                      <span>Qty: {item.quantity}</span>
                    </div>
                  ))
                ) : (
                  <div>No items found in this order.</div>
                )}
              </div>
            </div>
          </section> */}
        </main>
      </div>
    </>
    )
    
}
export default Wishlist