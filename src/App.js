
import './App.css';
import React from "react"
import Homepage from './components/Homepage.jsx';
import { useContext, useState } from 'react';
import ChangeUser from "./components/ChangeUser"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import ItemList from './components/ItemList';
import Cart from "./components/Cart"
import CreateUserProfile from "./components/CreateUserProfile"

function App() {
const [currentUser, setCurrentUser] = useState("Paul-R")
  
  //const loggedInUser = useContext(UserContext)

  return (  
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1> Alex and Jacks's Magical Marketplace</h1>
        </header>
      </div>
  
      <p>Welcome: {currentUser} </p>
      
      <nav>
        <div id='nav-buttons'>
          <Link to="/">Shop</Link>
          <Link to="/change-user">Change User</Link>
          <Link to="/create-user">Create User</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/change-user" element={<ChangeUser currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        <Route path="/create-user" element={<CreateUserProfile />}/>
        <Route path="/cart" element={<Cart username={currentUser}/>}/>
      </Routes>
    
    </BrowserRouter>      
  );
}

export default App;
