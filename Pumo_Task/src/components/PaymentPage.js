import React, { useContext, useState } from 'react';
import qrcode from '../assets/qr-code.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../components/CartContext'; 

const PaymentPage = () => {
  const location = useLocation();
  const { cart, totalAmount } = location.state;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [inputsValid, setInputsValid] = useState(false);
  const navigate = useNavigate();
  const { setCart } = useContext(CartContext); 

  // Function to validate inputs
  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() !== '' && email.trim() !== '' && address.trim() !== '' && emailRegex.test(email)) {
      setInputsValid(true);
    } else {
      setInputsValid(false);
    }
  };

  // Handle input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
    validateInputs();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateInputs();
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    validateInputs();
  };

  // Handle payment selection
  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
  };

  // Handle confirm order button click
  const handleConfirmOrder = () => {
    
    validateInputs();

    
    if (inputsValid) {
      
      // Empty the cart
      setCart([]);

     
      navigate('/order-confirmation', { 
        state: { 
          cart, 
          totalAmount, 
          paymentMethod,
          name,    
          email,
          address
        } 
      });
    } else {
      alert('Please fill out all required fields (Name, Email, Address) correctly before confirming your order.');
    }
  };

  return (
    <div className="container mt-4 text-center">
      <h2 className="p-3" style={{ fontFamily: "'Anton", fontVariant: "small-caps" }}>Payment</h2>
      <div className="list-group-item mt-3">
        <input type="text" className="form-control my-2" placeholder="Name" value={name} onChange={handleNameChange} />
        <input type="email" className="form-control my-2" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input type="text" className="form-control my-2" placeholder="Address" value={address} onChange={handleAddressChange} />
      </div>
      <div className="list-group-item mt-3">
        <h4>Select Payment Method:</h4>
        <button className="btn btn-primary mx-2" onClick={() => handlePaymentSelection('cash')} disabled={!inputsValid}>Cash on Delivery</button>
        <button className="btn btn-primary mx-2" onClick={() => handlePaymentSelection('card')} disabled={!inputsValid}>Credit Card</button>
        <button className="btn btn-primary mx-2" onClick={() => handlePaymentSelection('upi')} disabled={!inputsValid}>UPI</button>
      </div>
      {paymentMethod === 'cash' && (
        <div className="list-group-item mt-3">
          <button className="btn btn-success mt-2" onClick={handleConfirmOrder} disabled={!inputsValid}>Confirm Order</button>
        </div>
      )}
      {paymentMethod === 'card' && (
        <div className="list-group-item mt-3">
          <h4>Enter Credit Card Details:</h4>
          <input type="text" placeholder="Card Number" className="form-control my-2" required />
          <input type="text" placeholder="Expiry Date" className="form-control my-2"  required/>
          <input type="text" placeholder="CVV" className="form-control my-2" required/>
          <button className="btn btn-success mt-2" onClick={handleConfirmOrder} disabled={!inputsValid}>Confirm Order</button>
        </div>
      )}
      {paymentMethod === 'upi' && (
        <div className="list-group-item mt-3">
          <h4>Scan QR Code:</h4>
          <img src={qrcode} alt="QR Code" className="img-fluid my-2" style={{ width: "100px", height: "100px" }} />
          <button className="btn btn-success mt-2" onClick={handleConfirmOrder} disabled={!inputsValid}>Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
