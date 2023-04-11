import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import { Link } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import * as React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SearchPage" element={<SearchPage />} />
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HomePage/> */}
      
      <p></p><Link to= "/">HomePage</Link>
    </div>
  );
}

export default App;
