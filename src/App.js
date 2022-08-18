
import './App.css';
import React from "react"
import Homepage from './components/Homepage.jsx';
import { useContext, useState } from 'react';
import ChangeUser from "./components/ChangeUser"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemList from './components/ItemList';
import Cart from "./components/Cart"
import CreateUserProfile from "./components/CreateUserProfile"

function App() {
const [currentUser, setCurrentUser] = useState("Paul-R")
const [currentCart, setCurrentCart] = useState([])

  
  //const loggedInUser = useContext(UserContext)

  return (<>
  
  
    <div className="App">
      <header className="App-header">
        <h1> Alex and Jacks's Magical Marketplace</h1>
      </header>
    </div>
        <p>Welcome: {currentUser} </p>
        <CreateUserProfile />
        <Cart currentCart={currentCart} setCurrentCart={setCurrentCart}/>
        <ChangeUser setCurrentUser={setCurrentUser}/>
        <Homepage currentCart={currentCart} setCurrentCart={setCurrentCart}/>
        
        </>

  );
}

export default App;
