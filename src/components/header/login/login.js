import React, { useState, useContext } from 'react';
import './login.css';

import { useHistory } from 'react-router-dom';

import { Context } from '../../../context';

const Login = () => {
  const { auth, setAuth } = useContext(Context);

  const [error, setError] = useState(null);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const submit = e => {
    e.preventDefault();

    if (login === 'admin' && password === '12345') {
      localStorage.setItem('auth', JSON.stringify(true));
      setAuth(true);
      history.push('/profile');
    } else {
      setError(<p className='error'>The username or password you entered is incorrect</p>)
    }
  };
  console.log(auth);

  return (
    <form className='login' onSubmit={submit}>
      <h1>Login Page</h1>
      {error}
      <input
        type='text'
        name=''
        placeholder='Username'
        onChange={e => setLogin(e.target.value)}
      />
      <input
        type='password'
        name=''
        placeholder='Password'
        onChange={e => setPassword(e.target.value)}
      />
      <input type='submit' name='' value='Login' />
    </form>
  );
};

export default Login;
