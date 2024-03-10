import React from 'react'
import "./Box.css"
import Tick from "../assets/tick.svg"
import Face from "../assets/human logo.svg"

const Box = () => {
  return (
    <div className="box">
        <div className="b1">
            <h1>We Completed 1200+ Certification Program Successfully & Counting</h1>
            <p>
            At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers 
            You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.
            </p>
        </div>

        <div className="b2">
            <img src={Tick} alt="" />
            <h1>100+</h1>
            <p>Batch Complete</p>

            <img src={Tick} alt="" />
            <h1>50+</h1>
            <p>Active Batch</p>

            <img src={Face} alt="" />
            <h1>10000+</h1>
            <p>Student Satisfied</p>

            <img src={Face} alt="" />
            <h1>10+</h1>
            <p>Course Modules</p>
        </div>

        <div className="b3">
            <h1>Our Students Feedback</h1>
            <p>
            At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers 
            You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.
            </p>
            <button>Read Moreb</button>
        </div>
    </div>
  )
}

export default Box