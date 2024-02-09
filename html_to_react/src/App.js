import React from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Announcements from "./components/Announcements";

import './app.css';

function App() {
  return (
    
    <>
      <div className="container">
        <Header />
        <Aside />  
        <Main />
        <Announcements />
      </div>
    </>
  );
}

export default App;
