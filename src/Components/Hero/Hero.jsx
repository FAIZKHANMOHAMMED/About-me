import { useState } from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
export default function Hero () {
    return(<div className="hero">
       <div className="logo-box"><img src={profile_img} alt="" />
       <h1><span>I'm FaizKhan</span> <br />Web developer </h1></div>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos maxime excepturi expedita unde illum iure omnis eum! Corrupti hic, necessitatibus temporibus facere neque, delectus quas nobis incidunt repudiandae voluptas aperiam?</p>
        <div className="hero-action">
            <div className="hero-connect">connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>)
}