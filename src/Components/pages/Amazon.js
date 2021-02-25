import React from 'react'
import "./Amazon.css"
function Amazon() {
  return (
    <>
      <div className="hero-container">
        <h1>EXPLORE AMAZON DEEP INSIDE</h1>
        <p>what are you waiting for?</p>

      </div>

    
      <div className="card-list">

        <div className="card" >

          <div className="card--content">
            <h3 className="card--title">Day-by-Day</h3>
            <div className="card--desc3"><ol>
              <li>Day 1 : Arrive Lima</li>
              <li>Day 2 : Fly to Puerto Maldonado - Transfer to Amazon Lodge</li>
              <li>Day 3 : Explore the Amazon</li>
              <li>Day 4 : Amazon Lodge</li>
              <li>Day 5 : Fly to Cusco</li>
              <li>Day 6 : Sacred Valley</li>
              <li>Day 7 : Ollantaytambo Ruins | Train to Machu Picchu</li>
              <li>Day 8 : Free Day at Machu Picchu | Return to Cusco</li>
              <li> Day 9 : Explore Cusco</li>
              <li>Day 10 : Fly Home</li>
            </ol>
            <div className="card--desc1">
            <h3 className="card--title">Price 84$</h3>
            <div className="card--desc2">
            <button className="btn btn-dark btn-lg m-2 pr-4">Book now</button>
              <button className="bbtn btn-dark btn-lg m-2 pr-4">Wishlist</button>
            </div>
            
          </div>
            </div>
            </div>
            <div className="card--desc">
            <strong>Highlights</strong>
            <ul>
              <li>Canoe Lake Sandoval in search of Giant Otters and other wildlife</li>
              <li>Hike through weaving trails searching for animals that only appear at night</li>
              <li>Take your time exploring the ruins of Machu Picchu with your local guide</li>
              <li>Visit the Center for Traditional Textiles in Cusco to learn about weaving</li>
            </ul>
            </div>
           
          <img className="" src="../../images/img-9.jpg"
            alt="image not loaded"/>

        </div>

      </div>

    </>
  )
}

export default Amazon
