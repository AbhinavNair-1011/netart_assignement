import React from 'react'
import globe from "../images/globe.jpg"
import fb from "../images/fb.png"
import phone from "../images/phone.jpg"

import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer>
        <div id="footerWrapper">

       <div>
        <img src={phone} alt="" />
        <p>
            Toll free <b>1800 200 1234</b>
        </p>
       </div>
       <div>
        <img src={fb} alt="" />
        <p>
        www.facebook.com/cripumps
        </p>
       </div>
       <div>
        <img src={globe} alt="" />
        <p>
        www.cripumps.com
        </p>
       </div>

        </div>
    </footer>
  )
}

export default Footer