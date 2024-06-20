import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const navii = useNavigate();

  // State variables for form data and validation errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Clear errors and proceed with registration logic (here, navigate to login page)
      setErrors({});
      // Assuming registration is successful, navigate to login page
      navii('/login');
    }
  };

  // Validate form inputs
  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <>
      <section className=" bg-dark">
        <div className="container  ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black bg-info" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit} noValidate>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="name">Your Name</label>
                            <input
                              type="text"
                              id="name"
                              className={`form-control ${errors.name && 'is-invalid'}`}
                              value={formData.name}
                              onChange={handleChange}
                            />
                            <div className="invalid-feedback">{errors.name}</div>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="email">Your Email</label>
                            <input
                              type="email"
                              id="email"
                              className={`form-control ${errors.email && 'is-invalid'}`}
                              value={formData.email}
                              onChange={handleChange}
                            />
                            <div className="invalid-feedback">{errors.email}</div>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input
                              type="password"
                              id="password"
                              className={`form-control ${errors.password && 'is-invalid'}`}
                              value={formData.password}
                              onChange={handleChange}
                            />
                            <div className="invalid-feedback">{errors.password}</div>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="confirmPassword">Repeat your password</label>
                            <input
                              type="password"
                              id="confirmPassword"
                              className={`form-control ${errors.confirmPassword && 'is-invalid'}`}
                              value={formData.confirmPassword}
                              onChange={handleChange}
                            />
                            <div className="invalid-feedback">{errors.confirmPassword}</div>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
