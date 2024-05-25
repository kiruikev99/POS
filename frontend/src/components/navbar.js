import { LoginContex } from "./Context/LoginContex";
import { useContext } from "react";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import pos from '../images/pos.png'
import './landing.css';
import Button from 'react-bootstrap/Button';
const Navbar = () => {

    const { Username, setPosPage } = useContext(LoginContex); // Provide default value in case of null or undefined

    const [date, setDate] = useState(new Date());

    const click = () => {
      setPosPage(false)
    }

    return(
    <div className="header">
    <div className="img">
      <img src={pos} width={180} alt="POS "></img>
    </div>
    <div className="credentials">
      <h3>User Logged: {Username}</h3>
      <p>{date.toString()}</p>

      <div style={{display: "flex", gap: "50px"}} className="buttons">
          <Button style={{backgroundColor: "orange"}} variant="info"><Link style={{textDecoration: "none", color: "white  "}} to="/addProduct">Add Product</Link> </Button><br></br><br></br>
          <Button style={{backgroundColor: "orange"}} ><Link style={{textDecoration: "none", color: "white"}} to="/DeleteProduct">Remove Product</Link> </Button><br></br><br></br>
            <button className="logout">
            <Link onClick={click} >LOGOUT</Link> 
            </button>
    </div>
      
    </div>
   
  </div>
    )

}
export default Navbar;