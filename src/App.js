import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';

function App() {
  // localStorage.setItem('auth', JSON.stringify(false));
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
