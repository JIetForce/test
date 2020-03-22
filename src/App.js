import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './containers/main';

function App() {
  // localStorage.setItem('auth', JSON.stringify(false));
  return (
    <BrowserRouter>
      <div className='App'>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
