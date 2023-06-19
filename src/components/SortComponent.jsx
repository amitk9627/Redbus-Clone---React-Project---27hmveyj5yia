import React from 'react'

const SortComponent = () => {
  return (
    <div style={{backgroundColor:'white', margin:'0 5rem'}}>
      <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>

        <div><p style={{fontSize:'1.7rem',fontWeight:'700'}}>Sort By:</p></div>
        <div  ><p style={{fontSize:'1.4rem',background:'red',padding:'10px 25px',fontWeight:'500'}}>Departure</p></div>
        <div  ><p style={{fontSize:'1.4rem',background:'red',padding:'10px 25px',fontWeight:'500'}}>Rating</p></div>
        <div  ><p style={{fontSize:'1.4rem',background:'red',padding:'10px 25px',fontWeight:'500'}}>Price</p></div>
 
      </div>
    </div>
  )
}

export default SortComponent;
