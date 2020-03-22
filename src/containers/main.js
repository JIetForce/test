import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Context } from '../context';

import Home from '../components/home/home';
import Login from '../components/login/login';
import News from '../components/news/news';
import Profile from '../components/profile/profile';
import Header from '../components/header/header';

const Main = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')));

  return (
    <div className='header'>
      <Context.Provider value={{ auth, setAuth }}>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          {<Route path='/login' component={Login} />}
          <Route path='/news' component={News} />
          {auth ? (
            <Route path='/profile' component={Profile} />
          ) : (
            <Redirect to='/login' component={Login} />
          )}
        </Switch>
      </Context.Provider>
    </div>
  );
};

export default Main;
