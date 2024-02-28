import React from 'react'
import "../styles/products.scss"
import products from "../images/3.png"

const Products = () => {
  return (
    <div id="productsWrapper">
        <h5>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
</h5>
<img src={products} alt="" />
<p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
<hr/>
<h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
<p id="list"> CHEMICALS <span className='verticalName'>|</span> PROCESS POWER WATER <span className='verticalName'>|</span>  WASTE WATER OILS <span className='verticalName'>|</span>  GAS PHARMA SUGARS <span className='verticalName'>|</span>  DISTILLERIES PAPER <span className='verticalName'>|</span>  PULP MARINE <span className='verticalName'>|</span>  DEFENCE METAL <span className='verticalName'>|</span>  MINING FOOD <span className='verticalName'>|</span>  BEVERAGE PETROCHEMICAL <span className='verticalName'>|</span>  
    REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span className='verticalName'>|</span>  RESIDENTIAL</p>
    </div>
  )
}

export default Products