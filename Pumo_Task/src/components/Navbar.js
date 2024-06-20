// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCartShopping, faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';
// import '../styles/navbar.css'
// const Navbar = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">BOnDaMArt</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse justify-content-center " id="navbarNavDropdown" >
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link className="nav-link active ps-5" aria-current="page" id='menu' to="/">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link ps-5" to="/contact">Contact Us</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link ps-5" to="/shop">Shop</Link>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle ps-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Account
//                                 </a>
//                                 <ul className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdownMenuLink">
//                                     <li><Link className="dropdown-item text-center text-warning" to="#" >Log IN</Link></li>
//                                     <li><Link className="dropdown-item text-center text-warning" to="#">Sign UP</Link></li>
//                                     <li><Link className="dropdown-item text-center text-warning" to="#">Log OUT</Link></li>
//                                 </ul>
//                             </li>
//                         </ul>

//                           <div className="col-md-3"> 
//                             <form class="d-flex justify-content-end "style={{ maxWidth: '300px' }}>
//                                 <input class="form-control ms-5" type="search" placeholder="Search" aria-label="Search"/>

//                             </form>

//                         </div>
//                         <div className='cart' >
//                         <span className=' ms-4 text-info'><FontAwesomeIcon icon={faCartShopping} /> Cart</span>
//                         <span  className=' ms-4 text-dark'><FontAwesomeIcon icon={faPhoneVolume} /> 004-8974894</span>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;


import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import '../styles/navbar.css';

const Navbar = () => {
  const { cart } = useContext(CartContext);


  return (
    <>
      

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">BOnDaMArt</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active ps-5" aria-current="page" id='menu' to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-5" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-5" to="/shop">Shop</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle ps-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </a>
                <ul className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link to='/login' className="dropdown-item text-center text-warning" >Log IN</Link></li>
                  <li><Link className="dropdown-item text-center text-warning" to="/signup">Sign UP</Link></li>
                  <li><Link className="dropdown-item text-center text-warning" to="/">Log OUT</Link></li>
                </ul>
              </li>
            </ul>
            <div className="col-md-3">
              <form className="d-flex justify-content-end" style={{ maxWidth: '300px' }}>
                <input className="form-control ms-5" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </div>
            <div className='cart'>
              <Link to="/cart" className="text-info" style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faCartShopping} /> Cart ({cart.length})
            </Link>
            <span className='ms-4 text-dark'><FontAwesomeIcon icon={faPhoneVolume} /> 004-8974894</span>
          </div>
        </div>
      </div>
    </nav >
    </>
  );
}

export default Navbar;
