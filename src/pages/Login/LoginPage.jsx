import { Link }from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className='login-page'>
      <div className='logos'>
        <div className='unc-logo' />
        <div className='eie-logo' />
      </div> 
      <div className='title'><h5>EIE Management System</h5></div>

      <div className='content'>
        <form className='login-form'>
          <div className='input-group'>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' placeholder='Username' />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' placeholder='Password' />
          </div>
        </form>
      </div>
      <div className='footer'>
        <Link to='/forgot-password' className='forgot-password'>Forgot Password?</Link>
        <button type='submit' className='login-button'>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;

