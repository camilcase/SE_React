import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import users from '../../data/users';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      switch (user.role) {
        case 'pochead':
          navigate('/pochead/dashboard');
          break;
        case 'collegepoc':
          navigate('/class-management');
          break;
        case 'student':
          navigate('/student/classroom');
          break;
        default:
          alert('Role not recognized');
      }
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='login-page'>
      <div className='logos'>
        <div className='unc-logo' />
        <div className='eie-logo' />
      </div>
      <div className='title'><h5>EIE Management System</h5></div>
      <div className='contents'>
        <form className='login-form' onSubmit={handleLogin}>
          <div className='input-group'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='footer'>
            <Link to='/forgot-password' className='forgot-password'>Forgot Password?</Link>
            <button type='submit' className='login-button'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
