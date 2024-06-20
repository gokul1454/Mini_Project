import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faHouse ,faPhone} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
const Footer = () => {
    return (
        <div className="container-fluid">
            <footer className="text-center text-lg-start text-dark bg-light" style={{ backgroundColor: '#98ABD7' }}>
                <div className="container p-4 pb-0">
                    <section className="">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <a className="navbar-brand" href="#">BOnDaMArt</a>
                                <p>
                                    Here you can use rows and columns to organize your footer content.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p>
                                    <a href="#" className="text-dark" style={{ textDecoration: 'none' }}>MDBootstrap</a>
                                </p>
                                <p>
                                    <Link to="#" className="text-dark" style={{ textDecoration: 'none' }}>MDWordPress</Link>
                                </p>
                                <p>
                                    <a href="#!" className="text-dark" style={{ textDecoration: 'none' }}>BrandFlow</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-dark" style={{ textDecoration: 'none' }}>Bootstrap Angular</a>
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><FontAwesomeIcon icon={faHouse} /> New York, NY 10012, US</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> info@gmail.com</p>
                                <p> <FontAwesomeIcon icon={faPhone} />+ 01 234 567 88</p>
                                <p><FontAwesomeIcon icon={faPhone} />+ 01 234 567 89</p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#3b5998' }}
                                    href="#!"
                                    role="button"
                                >
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#55acee' }}
                                    href="#!"
                                    role="button"
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#dd4b39' }}
                                    href="#!"
                                    role="button"
                                >
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#ac2bac' }}
                                    href="#!"
                                    role="button"
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <p className='para pt-3'>Follow our page for more information</p>
                                {/* <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#0082ca' }}
                                    href="#!"
                                    role="button"
                                >
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a> */}
                                {/* <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#333333' }}
                                    href="#!"
                                    role="button"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a> */}
                            </div>
                        </div>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className="text-dark" style={{ textDecoration: 'none' }} href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
