import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/OrderConfirmationPage.css'

const OrderConfirmationPage = () => {
  const location = useLocation();
  const { cart, totalAmount, paymentMethod, name, email, address } = location.state;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mt-4 text-center">
      <h2 className='p-3' style={{ fontFamily: "'Anton", fontVariant: "small-caps" }}>Order Confirmation</h2>
      <div className="list-group-item card b mt-3">
        <h4>Your order has been placed!</h4>
        <p>Thank you for shopping with us.</p>
        <div className="order-details mt-4">
          <h5 style={{fontVariant:"small-caps"}}>Order Details:</h5>
          <div className="table-responsive">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td><img src={item.image} alt={item.title} className="img-fluid" style={{ width: "100px", height: "100px" }} /></td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}
                  
                  
                  </td>
                  
                </tr>
                
              ))}
            </tbody>
            <thead>
            <tr>
                <th  className='bg-light' colSpan={4}><h4>Total</h4></th>
                <td className='bg-info' style={{fontSize:"30px"} }colSpan={1}>${totalAmount}</td>
            </tr>
            </thead>
          </table>
          </div>
        </div>
        <div className="order-details mt-4">
          <h5 className='' style={{fontVariant:"small-caps"}}>Delivery Details:</h5>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td><strong>Name:</strong></td>
                <td>{name}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{email}</td>
              </tr>
              <tr>
                <td><strong>Address:</strong></td>
                <td>{address}</td>
              </tr>
            </tbody>
          </table>
          {/* <p style={{fontVariant:"small-caps"}}><strong>Total Amount:</strong> ${totalAmount}</p> */}
          <h4 className='diplay-6' style={{fontVariant:"small-caps"}}><strong>Payment Method:</strong> {paymentMethod}</h4>
        </div>
        <div className="mt-4">
          <button className="btn btn-outline-info text-dark px-5" onClick={handlePrint}>Print</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
