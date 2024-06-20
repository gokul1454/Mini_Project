// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';

// const CartPage = () => {
//   const { cart } = useContext(CartContext);

//   return (
//     <div className="container">
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="list-group ">
//           {cart.map((item, index) => (
//             <div className="list-group-item " key={index}>
//               <img src={item.image} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
//               <div className=''>{item.title} - ${item.price}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CartPage;




import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import Rating from 'react-rating-stars-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/CartPage.css';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, incrementQuantity, decrementQuantity, removeItem, calculateTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before placing an order.');
      return;
    }

    navigate('/payment', { state: { cart, totalAmount: calculateTotal() } });
  };

  return (
    <div className="container mt-4 text-center">
      <h2 className='p-3' style={{ fontFamily: "'Anton", fontVariant: "small-caps" }}>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="list-group">
          {cart.map((item, index) => (
            <div className="list-group-item" key={index}>
              <div className="row">
                <div className="col-md-6 text-center bg-light">
                  <img src={item.image} alt={item.title} className="img-fluid Cart-img p-4" style={{ width: "200px", height: "300px" }} />
                </div>
                <div className="col-md-6 d-flex flex-column text-center justify-content-center">
                  <h5>{item.title}</h5>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <Rating
                      count={5}
                      value={item.rating.rate}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="quantity-controls mb-3">
                    <button className="btn btn-secondary" onClick={() => decrementQuantity(item.id)}>-</button>
                    <span className="px-3">{item.quantity}</span>
                    <button className="btn btn-secondary" onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                  <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="list-group-item text-center">
            <h4>Total Amount: ${calculateTotal()}</h4>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-info" onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;



