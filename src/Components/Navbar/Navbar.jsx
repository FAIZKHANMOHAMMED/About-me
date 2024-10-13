import { useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo.svg'
export default function Navbar() {
    return (
        <div className="navbar">
            
            <h1>Faiz</h1>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect with me</div>
          
        </div>
    )
}
