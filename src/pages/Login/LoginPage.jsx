import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            "http://localhost:8000/login",
            {
                name,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        const { role } = response.data;
        // console.log("Login response:", response.data);

        console.log(role);
        if (role){
          navigate(`${role}/dashboard`);
        }else{
          console.log("error");
        }
    } catch (error) {
        alert("error");
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
