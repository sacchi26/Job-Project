import React from 'react'
import "./Header.css"
import Logo from "../assets/Logo.png"
import video from "../assets/video.png"
import arrow from "../assets/arrow.svg"

const Header = () => {
  return (
    <div className="main">
        <div className="one">
        <div className="logo"> 
           <img src={Logo} alt="" /> 
          <p>Learning Exp.</p>
           </div>
           
        <div className="home">
            <a href="#">Home</a>
            <a href="#">Services Us</a>
            <a href="#">Why us</a>
            <a href="#">Our Goals</a>
            <button>Contact Us</button>
        </div>
        </div>
        <div className="two">
            <div className="text">
                <div className="slidebar">
                    <h1>We Creat Learning Experience With Excellent Technology</h1>
                    <p>Unlimited Access To 100+ World-Class Courses, Hands-On Project,And Job-Ready Certificate Programs-All Included
                        In Your Subscription.
                    </p>
                    <button>Book Demo Class</button>
                    <a href="#">Explore More </a>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div className="video">
                <img src={video} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Header