import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ForgotPass.css';

function ForgotPass() {
  const navigate= useNavigate();

  const handleCancel= () => {
    navigate('/');
  };
  
  return (
    <div className='forgot-page'>
      <div className='logos'>
        <div className='unc-logo' />
        <div className='eie-logo' />
      </div> 
      <div className='title'><h5>EIE Management System</h5></div>
      <div className='subtitle'><p>Forgot Password</p></div>

      <div className='contentt'>
        <form className='forgot-form'>
          <div className='input-group'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' placeholder='Email' />
          </div>
          <div className='input-group'>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' placeholder='Username' />
          </div>
        </form>
      </div>
      <div className='footer'>
        <button onClick={handleCancel} className='cancel-button'>Cancel</button>
        <button type='submit' className='submit-button'>Submit</button>
      </div>
    </div>
  );
}

export default ForgotPass
