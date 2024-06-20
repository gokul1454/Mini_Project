import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import '../styles/home.css';
import download from '../assets/life.jpg'
import lady from '../assets/img11.jpg'
// import product from '../assets/img11.jpg'
// import online from '../assets/img3.jpg'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast, faArrowRightArrowLeft, faChalkboard } from '@fortawesome/free-solid-svg-icons'
import image12 from '../assets/image12.jpg'
import image19 from '../assets/image19.jpg'
import image17 from '../assets/image17.jpg'
import image13 from '../assets/image13.webp'
import bracelet from '../assets/bracelet.webp'
import image14 from '../assets/image14.webp'
import image21 from '../assets/image21.gif'
import image15 from '../assets/image15.avif'
import bags from '../assets/bags.webp'
// import image18 from '../assets/image18.avif'

const Home = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='header bg-danger  text-light text-center align-items-center justify-content-center'>
          <div className='header-content  '>
            <h1 className='heading pt-5'></h1>
            <h4 className='headingLine2 pt-4'>FASHION</h4>
            <h2 className='headingLine2 pt-4'>CHANGING</h2>
            <h2 className='headingLine2 pt-4'>ALWAYS</h2>
            <h2 className='headingLine3'>
              <span><FontAwesomeIcon icon={faMinus} /></span>
            </h2>
            <h5 className='headingline4 pb-5 text-secondary' >Welcome To BOnDaMArt</h5>
          </div>

        </div>
        <div className='container '>

          <img id='float-img' className='col-12 ' src={download} alt='no-imggg' />
        </div>
        <div className='mostPopular'>
          <h1 className='mostHeader text-center p-3' style={{ fontFamily: 'Noto Serif Display', fontVariant: "small-caps" }}>Most Popular</h1>


          <div className='container '>
            <div className='row'>
              <div className='img_bar col-lg-3 col-md-6'>
                <img className='img-fluid img-fuild2' src={bags} alt='Noimage' />
                <p className='text-secondary text-center'>Casual & Party</p>
                <h6 className='text-dark text-center'>Bags for students and Travellers</h6>
                <h6 className='text-dark text-center'>$144.44</h6>
                <div className='text-center '>
                  <button type="button" className="btn btn-outline-info col-2 m-1">8"</button>
                  <button type="button" className="btn btn-outline-info col-2 m-1">14"</button>
                  <button type="button" className="btn btn-outline-info col-2 m-1">20"</button>
                  <button type="button" className="btn btn-outline-info col-2 m-1">36"</button>
                </div>
                <Link to='/shop' type="button" className="btn btn-outline-secondary col-12 m-1" style={{ fontVariant: "small-caps" }}>Click To View</Link>
              </div>
              <div className='img_bar col-lg-3 col-md-6'>
                <img src={image17} className='img-fluid img-fuild2' alt='Noimage' /><p className='text-secondary text-center'>Work & Office</p>
                <h6 className='text-dark text-center'>Women's Classic Collection</h6>
                <h6 className='text-dark text-center'>$9.44</h6>
                <div className='text-center '>
                  <button type="button" className="btn btn-outline-info col-2 m-1">S</button>
                  <button type="button" className="btn btn-outline-info col-2 m-1">M</button>
                  <button type="button" className="btn btn-outline-info col-2 m-1">L</button>
                  <button type="button" className="btn btn-outline-info col-2 m-1">XL</button>
                </div>
                <Link to='/shop' type="button" className="btn btn-outline-secondary col-12 m-1" style={{ fontVariant: "small-caps" }}>Click To View</Link>

              </div>
              <div className='img_bar col-lg-3 col-md-6 '>
                <img src={image19} className='img-fluid img-fuild2 ' alt='Noimage' width="300px" height="400px" /><p className='text-secondary text-center'>Work & Office</p>
                <h6 className='text-dark text-center'>Mens Classic Collection</h6>
                <h6 className='text-dark text-center'>$50.10</h6>
                <div className='text-center '>
                  <button type="button" className="btn btn-outline-info col-2 m-1">S</button>
                  <button type="button" className="btn btn-outline-info col-2 m-1">M</button>
                  <button type="button" className="btn btn-outline-info col-2 m-1">L</button>
                  <button type="button" className="btn btn-outline-info col-2 m-1">XL</button>
                </div>
                <Link to='/shop' type="button" className="btn btn-outline-secondary col-12 m-1" style={{ fontVariant: "small-caps" }}>Click To View</Link>

              </div>
              <div className='img_bar col-lg-3 col-md-6 '>
                <img src={bracelet} className='img-fluid img-fuild2' alt='Noimage' width="300px" height="400px" />
                <p className='text-secondary text-center'> Casual, Daily & Workwear</p>
                <h6 className='text-dark text-center'> Silver Men's Bracelet</h6>
                <h6 className='text-dark text-center'>$104.4</h6>
                <div className='text-center '>
                  <button type="button" className="btn btn-outline-info col-sm-2  ">S</button>
                  <button type="button" className="btn btn-outline-info col-sm-2  m-1">M</button>
                  <button type="button" className="btn btn-outline-info col-sm-2   m-1">L</button>
                  <button type="button" className="btn btn-outline-info col-sm-2   m-1">XL</button>
                </div>
                <Link to='/shop' type="button" className="btn btn-outline-secondary col-12   m-1 mb-5" style={{ fontVariant: "small-caps" }}>Click To View</Link>

              </div>
              {/* <img className='col-3 ps-4' src={download} alt='Noimage' width="300px" height="400px"/>
            <img className='col-3 ps-4' src={download} alt='Noimage' width="300px" height="400px"/>
            <img className='col-3 ps-4' src={download} alt='Noimage' width="300px" height="400px"/> */}
            </div>
          </div>
          <div className=' container-fulid bg-secondary welcome'>
            <div className='row'>
              <div className='col-sm-8  '>



              </div>
              <div className='explore-image col-sm-3 mt-5 text-center'>
                <img src={image12} alt='no-image' className='img-fluid img-fluid1' />
                <h3 className='  mt-3  text-warning ' style={{ fontFamily: "Forte", fontSize: "30px" }}>Explore Our Exquisite Bag Collection Now!</h3>
                <Link to='/shop' type="button" className="btn btn-light my-4 px-5 py-3 text-dark" style={{ fontVariant: "small-caps" }}>View Collection</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className=' work col-md-6 text-center'>
              <h6 className='align-items-center'>WORK & OFFICE ATTIRE</h6>
              <h1 className='' style={{ fontFamily: "Foret", fontVariant: "small-caps" }}>Professional Pinstripe Blazers Collection</h1>
              <p className=''>Elevate your workwear with our Professional Pinstripe Blazers Collection, where tailored sophistication meets modern confidence for a powerfully polished office look.</p>
              <Link to='/shop' type="button" className="btn btn-outline-warning my-4 px-5 py-3 text-dark" style={{ fontVariant: "small-caps" }}>View Collection</Link>

            </div>
            <div className='col-md-6'>
              <img src={lady} alt='no imgg' className='img-fluid' id='eeee' />
            </div>
          </div>
        </div>
        <div className='container-fluid  welocome2'>
          <div className='row text-center'>
            <div className=' img-float col-md-4  '>
              <img src={image21} alt='no-imgg' className='img-fluid ' id='imgg' />
              <h1 className='pt-3 text-center' style={{ fontFamily: "Foret" }}>Discover The Allure Of Fashion Reinvented!</h1>
              <Link to='/shop' type='button' className='btn btn-outline-info  px-5 p-3 bg-light '>Shop</Link>
            </div>
          </div>
        </div>
        <div className='newproducts'>
          <h1 className='new text-center p-3' style={{ fontFamily: 'Noto Serif Display', fontVariant: "small-caps" }}>Newest Products</h1>
          <div className='container '>
            <div className='row'>
              <div className='img_bar col-lg-3 col-md-6 col-sm-12'>
                <Link to='/cart'><span className='icons'><FontAwesomeIcon icon={faCartShopping} /></span></Link>
                <Link to='/shop'><img className='img-fluid img-fuild2' src={image12} alt='Noimage' /></Link>
                <p className='text-secondary text-center'>Comestic for Female</p>
                <h6 className='text-dark text-center'>Priceless and best Collection</h6>
                <h6 className='text-dark text-center'>$1.4</h6>
              </div>
              <div className='img_bar col-lg-3 col-md-6 col-sm-12'>
                <Link to='/cart'><span className='icons'><FontAwesomeIcon icon={faCartShopping} /></span></Link>
                <Link to='/shop'><img className='img-fluid img-fuild2' src={image13} alt='Noimage' /></Link>
                <p className='text-secondary text-center'>Women's Casual Wears </p>
                <h6 className='text-dark text-center'>Women's Outfit Collection</h6>
                <h6 className='text-dark text-center'>$2.55</h6>
              </div>
              <div className='img_bar col-lg-3 col-md-6 col-sm-12'>
                <Link to='/cart'><span className='icons'><FontAwesomeIcon icon={faCartShopping} /></span></Link>
                <Link to='/shop'><img className='img-fluid img-fuild2' src={image14} alt='Noimage' /></Link>
                <p className='text-secondary text-center'> men & Women</p>
                <h6 className='text-dark text-center'>Smart watches Collection</h6>
                <h6 className='text-dark text-center'>$26.90</h6>
              </div>
              <div className='img_bar col-lg-3 col-md-6 col-sm-12'>
                <Link to='/cart'><span className='icons'><FontAwesomeIcon icon={faCartShopping} /></span></Link>
                <Link to='/shop'><img className='img-fluid img-fuild2 ' src={image15} alt='Noimage' /></Link>
                <p className='text-secondary text-center'>Casual Wears</p>
                <h6 className='text-dark text-center'>Men's Collection</h6>
                <h6 className='text-dark text-center'>$100.44</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid d-flex flex-wrap mt-5'>
          <div className='row w-100'>
            <div className='col-lg-3 col-sm-6 mb-4'>
              <div className='secure text-center pt-3'>
                <span className='mt-5'><FontAwesomeIcon icon={faCreditCard} /></span>
                <h3 className='p-3'>Secure Payments</h3>
                <p className='pb-2'>Shop with confidence knowing that your transactions are safeguarded.</p>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 mb-4'>
              <div className='free text-center pt-3'>
                <span className='mt-5'><FontAwesomeIcon icon={faTruckFast} /></span>
                <h3 className='p-3'>Free Shipping</h3>
                <p className='pb-2'>Shop with confidence knowing that your transactions are safeguarded.</p>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 mb-4'>
              <div className='easy text-center pt-3'>
                <span className='mt-5'><FontAwesomeIcon icon={faArrowRightArrowLeft} /></span>
                <h3 className='p-3'>Easy Returns</h3>
                <p className='pb-2'>Shop with confidence knowing that your transactions are safeguarded.</p>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 mb-4 '>
              <div className='order text-center pt-3'>
                <span className='mt-5'><FontAwesomeIcon icon={faChalkboard} /></span>
                <h3 className='p-3'>Order Tracking</h3>
                <p className='pb-2'>Shop with confidence knowing that your transactions are safeguarded.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
