import React, { Component } from 'react';
import Compound from "./Compound";
import "./App.css"



function App() {
  return (
        <div className="container">
            <div className="innercontainer">
                <h2 className="Heading">Compound Interest Calculator</h2>
                <Compound />
            </div>
        </div>
  );
}

export default App;
