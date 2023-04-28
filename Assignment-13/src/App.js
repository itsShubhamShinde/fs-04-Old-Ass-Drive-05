import React from 'react'
import './App.css';
import Nav from './Components/Nav';
import User from './Components/User';

function App() {
  return (
    <div className="App">
      <div className="maindiv">
        <Nav />
        <User />
      </div>
    </div>
  );
}

export default App;