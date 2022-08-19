
import './App.css';
import React from "react"
import Homepage from './components/Homepage.jsx';
import { useContext, useState } from 'react';
import ChangeUser from "./components/ChangeUser"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import ItemList from './components/ItemList';
import Cart from "./components/Cart"
import CreateUserProfile from "./components/CreateUserProfile"
import { UserContext } from './contexts/user';

function App() {
  const [currentUser, setCurrentUser] = useState("")

  return (  
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1> Alex and Jacks's Magical Marketplace</h1>
        </header>
      </div>
  
      <p id='welcome-text'>Welcome {currentUser} </p>
      
      <nav>
        <div id='nav-buttons'>
          <Link to="/">Shop</Link>
          <Link to="/change-user">Change User</Link>
          <Link to="/create-user">Create User</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/change-user" element={<ChangeUser />}/>
          <Route path="/create-user" element={<CreateUserProfile />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </UserContext.Provider>

    
    </BrowserRouter>      
  );
}

export default App;
