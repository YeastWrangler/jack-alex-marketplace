
import './App.css';
import React from "react"
import Homepage from './components/Homepage.jsx';
import { useContext } from 'react';

function App() {

  const loggedInUser = useContext("Paul-R")
  return (<>
    <div className="App">
      <header className="App-header">
        <h1> Alex and Jacks's Magical Marketplace</h1>
      </header>
    </div>
        <Homepage />
        </>
  );
}

export default App;
