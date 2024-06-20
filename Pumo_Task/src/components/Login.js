import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import '../styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      return;
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      return;
    }

   
    
  };

  return (
    <>
      <section className="vh-100 bg-info">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <span className="p-1" style={{ fontSize: "30px" }}> <FontAwesomeIcon icon={faFacebook} /></span>
                  <span className="p-1" style={{ fontSize: "30px" }}> <FontAwesomeIcon icon={faTwitter} /></span>
                  <span className="p-1" style={{ fontSize: "30px" }}> <FontAwesomeIcon icon={faInstagram} /></span>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                  <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    value={email} onChange={handleEmailChange} />
                  {emailError && <div className="text-danger">{emailError}</div>}
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password"
                    value={password} onChange={handlePasswordChange} />
                  {passwordError && <div className="text-danger">{passwordError}</div>}
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input className="form-check-input" type="checkbox" value={rememberMe} id="form2Example3"
                      onChange={handleRememberMeChange} />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg"
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>

                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    {loginSuccess && 'Login successful! Redirecting to home page...'}
                    {!loginSuccess && 'Don\'t have an account? '}
                    <Link to="/signup" className="link-danger">{!loginSuccess ? 'Register' : ''}</Link>
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
