import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function OrderDetails() {
  const { id } = useParams();
  const [orderData, setOrderData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/order/details/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setOrderData(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        console.error('Error fetching order', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading || !orderData) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading order details...</div>;
  }

  const containerStyle = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#333',
  };

  const sectionStyle = {
    marginBottom: '25px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
  };

  const sectionTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#444',
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Order Details</div>

      <div style={sectionStyle}>
        <div style={sectionTitleStyle}>Order Info</div>
        <div>Order ID: {orderData._id}</div>
        <div>Status: {orderData.status}</div>
        <div>Placed on: {new Date(orderData.createdAt).toLocaleString()}</div>
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
        <div style={{ fontWeight: 'bold', marginTop: '10px' }}>
          Discount Amount: ₹{orderData.discountAmount || 'N/A'}
        </div>
        <div style={{ fontWeight: 'bold', marginTop: '10px' }}>
          Total: ₹{orderData.totalAmount || 'N/A'}
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionTitleStyle}>Items</div>
        {Array.isArray(orderData.items) && orderData.items.length > 0 ? (
        orderData.items.map((item) => (
            <div className="order-item" key={item._id}>
            <span>Product ID: {item.product._id}    </span>
            
            <span>Qty: {item.quantity}</span>
            </div>
        ))
        ) : (
        <div>No items found in this order.</div>
        )}
      </div>
    </div>
  );
}

export default OrderDetails;
