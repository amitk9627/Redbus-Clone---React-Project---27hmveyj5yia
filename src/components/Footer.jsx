import React from 'react'
import BusLogo from '../Assets/bus.jpg'
const Footer = () => {
  return (
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"space-evenly",
      alignItems:'center',
      padding:'2.96rem 3rem',
    }}>

      <div><h1 style={{color:'white',fontSize:'4rem',padding:"0 2rem"}}>Book your bus with redbus</h1></div>
      <div><img src={BusLogo} style={{height:"200px"}}/></div>

    </div>
  )
}

export default Footer
