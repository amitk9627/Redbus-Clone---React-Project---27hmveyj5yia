import React from 'react'

const CardBar = () => {
  return (
    <div style={{
        background:'white',margin:'10px'
    }}>
        <div style={{
            display:'flex',justifyContent:"space-around",alignItems:'center'
        }}>
            <div><p style={{fontSize:"2rem",fontWeight:'700'}}>Name</p></div>
            <div>
                <div style={{
                   textAlign:'center'
                }}>
                    <p style={{fontSize:"1.2rem",fontWeight:'400'}}>Departure</p>
                    <p style={{fontSize:"1.5rem",fontWeight:'700'}}>42:34Am</p>
                </div>
            </div>
            <div>
                <div style={{
                   textAlign:'center'
                }}>
                    <p style={{fontSize:"1.2rem",fontWeight:'400'}}>Arival</p>
                    <p style={{fontSize:"1.5rem",fontWeight:'700'}}>25:00 Am</p>
                </div>
            </div>
            <div><p style={{fontSize:'2rem',backgroundColor:'lightgreen',padding:'5px',fontWeight:'700'}}>9/10</p></div>
            <div><p style={{fontSize:'2rem',fontWeight:'700'}}>512/-</p></div>
        </div>
      
    </div>
  )
}

export default CardBar
