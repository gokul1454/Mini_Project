import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const initialFormData = {
    fname: '',
    lname: '',
    email: '',
    mob: '',
    job: '',
    ans: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fname) newErrors.fname = 'First name is required';
    if (!formData.lname) newErrors.lname = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.mob) {
      newErrors.mob = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.mob)) {
      newErrors.mob = 'Phone number is invalid';
    }
    if (!formData.job) newErrors.job = 'Feedback is required';
    if (!formData.ans) newErrors.ans = 'Complaints are required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid, handle form submission
      console.log('Form data:', formData);

      // Reset form data to initial state to clear input fields
      setFormData(initialFormData);
    }
  };

  return (
    <div className="container-fluid px-1 py-5 mx-auto" style={{ backgroundImage: `url("https://i.imgur.com/GMmCQHC.png")` }}>
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <div className="card">
            <h5 className="text-center mb-4">Contact US</h5>
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    First name<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter your first name"
                    value={formData.fname}
                    onChange={handleChange}
                  />
                  {errors.fname && <span className="text-danger">{errors.fname}</span>}
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Last name<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter your last name"
                    value={formData.lname}
                    onChange={handleChange}
                  />
                  {errors.lname && <span className="text-danger">{errors.lname}</span>}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Business email<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Phone number<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="mob"
                    name="mob"
                    placeholder="Enter your phone number"
                    value={formData.mob}
                    onChange={handleChange}
                  />
                  {errors.mob && <span className="text-danger">{errors.mob}</span>}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Feed Back<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="job"
                    name="job"
                    placeholder="Enter your feedback"
                    value={formData.job}
                    onChange={handleChange}
                  />
                  {errors.job && <span className="text-danger">{errors.job}</span>}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-12 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Complaints<span className="text-danger"> *</span>
                  </label>
                  <textarea
                    id="ans"
                    name="ans"
                    placeholder="Enter your complaints"
                    value={formData.ans}
                    onChange={handleChange}
                  />
                  {errors.ans && <span className="text-danger">{errors.ans}</span>}
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="form-group col-sm-6">
                  <button type="submit" className="btn-block btn-primary bg-primary px-5">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
