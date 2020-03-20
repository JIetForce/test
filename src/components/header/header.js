import React, { useState } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { Context } from '../../context';

import './header.css';
import Home from './home/home';
import Login from './login/login';
import News from './news/news';
import Profile from './profile/profile';

const Header = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')));

  return (
    <div className='header'>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to='/'>
                To the main
              </NavLink>
            </li>

            {!auth ? (
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
            ) : null}

            <li>
              <NavLink to='/news'>News</NavLink>
            </li>
            <li>
              <NavLink to='/profile'>Profile</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Context.Provider value={{ auth, setAuth }}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/news' component={News} />
          {auth ? (
            <Route to='/profile' component={Profile} />
          ) : (
            <Redirect to='/login' component={Login} />
          )}
        </Switch>
      </Context.Provider>
    </div>
  );
};

export default Header;
