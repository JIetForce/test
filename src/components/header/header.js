import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context';

import './header.css';

const Header = () => {
  const { auth } = useContext(Context);

  return (
    <header>
      <nav>
        <ul className='nav justify-content-center'>
          <li className='nav-item'>
            <NavLink exact to='/' className='nav-link' href='#'>
              To the main
            </NavLink>
          </li>
          {!auth ? (
            <li className='nav-item'>
              <NavLink to='/login' className='nav-link' href='#'>
                Login
              </NavLink>
            </li>
          ) : null}
          <li className='nav-item'>
            <NavLink to='/news' className='nav-link' href='#'>
              News
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/profile' className='nav-link' href='#'>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
