import React from 'react'
import "./Why.css"
import image from "../assets/video.png"

const Why = () => {
  return (
    <div className="content">
        <div className="type">
            <h1>Why Us</h1>
            <p>
            At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers 
            You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.
            </p>
        </div>

        <div className="image">
            <div className="video">
            <img src={image} alt="" />
            </div>

            <div className="tag">
                <h1>Crafting Your Dream Career: Building a Path Yoou Love With US</h1>
                <p>
                At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals.
                 Join Us Today And Embark On A Journey Of Discovery, Growth, And Success. 
                </p>
                <p>
                Our plateform Is Designed To Empower Learners Like You To Excel in Today's Dynamic World.
                </p>
                <button>Get More</button>
            </div>


        </div>
    </div>
  )
}

export default Why