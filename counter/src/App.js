import React from 'react';
import Basic from "./components/Basic";
import BtnStartReset from "./components/BtnStartReset";
import ButtonClickUpDown from "./components/ButtonClickUpDown";
import StopWatch from "./components/StopWatch";
import './app.css'; 

function App() {
  return (
  <>
    <div className="container">
      <h2 className="title">Basic Counter</h2>
      <Basic />
    </div>
    <div className="container">
      <h2 className="title">Start/Reset Button</h2>
      <BtnStartReset />
    </div>
    <div className="container">
      <h2 className="title">Click Up/Down Button</h2>
      <ButtonClickUpDown />
    </div>
    <div className="container">
      <h2 className="title">StopWatch</h2>
      <StopWatch />
    </div>
    <hr className="separator" />
  </>
  );
}

export default App;