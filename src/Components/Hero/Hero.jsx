import { useState } from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'

export default function Hero () {
    return(<div className="hero">
       <div className="logo-box"><img src={profile_img} alt="" />
       <h1><span>I'm Faiz Khan</span> <br />Web Developer </h1></div>
       <p>As a web development enthusiast and a Third-year B.Tech student at Vignan's Institute of Information Technology and Sciences, I enjoy coding and creating amazing websites using HTML, CSS, and JavaScript. I have built some cool projects, such as a personal portfolio website, a blog platform, and a quiz app, that showcase my skills and creativity. You can check out some of my work on my GitHub profile or on my website. I am always eager to learn new things and improve my coding skills. I am currently exploring backend development with Node.js, and I am also interested in cloud computing, machine learning, and artificial intelligence. I am looking for opportunities to collaborate with other developers, gain more experience, and contribute to the web development community. If you share similar interests or have any questions, feel free to reach out to me. I would love to hear from you</p>
        <div className="hero-action">
            <div className="hero-connect">connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>)
}