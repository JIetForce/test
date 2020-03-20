import React, { useContext } from 'react';

import { useHistory } from 'react-router-dom';
import { Context } from '../../../context';

const Profile = () => {
  const { setAuth } = useContext(Context);
  const history = useHistory();

  const logout = () => {
    localStorage.setItem('auth', JSON.stringify(false));
    setAuth(false);
    history.push('/login');
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Profile;
