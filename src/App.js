import React from 'react';
import logo from './logo.svg';
import headerBkGround from './assets/images/banner.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="col-6">
        <div className="row">
          <img src={headerBkGround} className="header-background" alt="header-background" />
          Here we go
        </div>
      </div>
    </div>
  );
}

export default App;
