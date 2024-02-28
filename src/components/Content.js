import React from 'react'
import "../styles/content.scss"
import trophy from "../images/1.png"
import award from "../images/2.png"
import Products from './Products'

const Content = () => {
    
  return (
    <main>
        <div id="wrapper">
            
        <div id="imageDiv">
            <img src={trophy} alt="" />
        </div>

        <div id="dataDiv">
        <h1> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
        <ul>
            <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, 
                as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) 
                    to replace the old inefficient 
                    pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
        </ul>
        <img src={award} alt="" />
        <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, 
            Joint Managing Director of C.R.I. Group received the award from Smt.
             Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
             </div>
</div>
        <Products></Products>
    </main>
  )
}

export default Content