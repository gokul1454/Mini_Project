// import React, { useEffect, useState } from 'react'

// const Shop = () => {
//   const [api, setApi] = useState([])

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => setApi(data));
//   }, [])
//   return (
//     <>
//       <div className='container-fluid bg-light'>
//         <div className='row'>
//           {api.map((val, ind) => (
//             <div className='col-lg-3 col-md-6' key={ind}>
//               <div className='card text-center'>
//               <img src={val.image} alt='no-imm' className='img-fluid' /> 
//               <p><b>Category : </b>{val.category}</p>
//               <p><b>Price : </b>{val.price}</p> 
//               <p><b>Rating : </b>{val.rating.rate}</p>
//               <button type='button' className='btn btn-secondary text-center px-3'> Buy Now</button>           
//                </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </>
//   )
// }

// export default Shop


import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from './CartContext';
import Rating from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const [api, setApi] = useState([]);
  const { cart, addItemToCart } = useContext(CartContext);
  const navigate = useNavigate(); // Correct usage of useNavigate

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setApi(data));
  }, []);

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  return (
    <div className="container-fluid bg-light">
      <div className="row">
        {api.map((val, ind) => (
          <div className="col-lg-3 col-md-6" key={ind}>
            <div className="card text-center">
              <img src={val.image} alt={val.title} className="img-fluid" />
              <p><b>Category: </b>{val.category}</p>
              <p><b>Price: </b>${val.price}</p>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <Rating
                  count={5}
                  value={val.rating.rate}
                  size={24}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <button
                type="button"
                className="btn btn-secondary text-center px-3"
                onClick={() => isInCart(val.id) ? navigate("/cart") : addItemToCart(val)}
              >
                {isInCart(val.id) ? "Go to Cart" : "Buy Now"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
