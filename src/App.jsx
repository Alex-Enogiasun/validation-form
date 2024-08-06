import { useState } from 'react';
import React from 'react'
import './App.css'

const App = () => {
  const [formData, setFormData] = useState({ email: '', firstname: '', lastname:"", message:"" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required' ;
    }
    if (!formData.firstname) {
      errors.firstname = 'Firstname is required';
    }
    if (!formData.lastname) {
      errors.lastname = 'Lastname is required';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      
      console.log('Form submitted successfully', formData);
    ; alert("Form submitted successfully. Thank You")} else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className='wrapper'>
      <h1>Contact Us</h1>
     <label id='firstname1'>First Name <strong>*</strong>  </label>
     <input type='text'  className='firstname'
     name="firstname" value={formData.firstname} onChange={handleChange}
/>
{errors.firstname && <p id='err1' style={{color:"red"}}>{errors.firstname}</p>}

     <label id='lastname'>Last Name   <strong> *</strong></label>
     <input  type='text'  className='lastname'
     name='lastname'
     value={formData.lastname} onChange={handleChange}
     />
     {errors.lastname && <p id='err2' style={{color:"red"}}>{errors.lastname}</p>}

     <label htmlFor='email'>Email Address  <strong>*</strong></label>
     <input type='email' 
     className='email' 
     name="email" value={formData.email} onChange={handleChange}
     />
      {errors.email && <p id='err3' style={{color:"red"}}>{errors.email}</p>}
    
    <label  id='query'>Query Type <strong>*</strong></label>
    <div className='child1'>
    <input type='radio' id='enquiry' name='selectOption' required
    />
    <label id='general' htmlFor='enquiry'>General Enquiry</label>
    </div>

    <div className='child2'>
    <input type='radio' id='request' name='selectOption' required
    />
    <label id='support'  htmlFor='request'>Support Request</label>
    </div>
    
  
    <label htmlFor='messagebox'>Message <strong>*</strong></label>
    <textarea id='messagebox' 
    name='message'
    value={formData.message} onChange={handleChange}
    />
     {errors.message && <p id='err4' style={{color:"red"}}>{errors.message}</p>}

    
    <p> <input type='checkbox'
    required
    />   I consent to being contacted by the team <strong>*</strong></p>
    
    <button type='submit'>Submit</button>

    </div>
  
    </form>
  )
}

export default App