import React from 'react'
import "./Card.css"
import C1 from "../assets/C1.svg"
import C2 from "../assets/C2.svg"
import C3 from "../assets/C3.svg"

const Card = () => {
  return (
    <div className="main-card">
        <div className="card">
          <div className="c1">
          <img src={C1} alt="" />
            <h1>Learn anything</h1>
            <p>
              It Is A Long Established Fact That A Reader Will Be Distracted By The Readable
              </p>
          </div>
            
            <div className="c2">
            <img src={C2} alt="" />
            <h1>Flexible Learning</h1>
            <p>
            It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When 
            </p>
            </div>

            <div className="c3">
            <img src={C3} alt="" />
            <h1>Expert Connect</h1>
            <p>
            It Is A Long Established Fact That A Reader Will Be Distracted By The Readable
            </p>
            </div>

        </div>
    </div>
  )
}

export default Card