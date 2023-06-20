import React from 'react'

const CardBar = ({item}) => {
// console.log(item);
// arrivalTime : "5:00AM"
// busName : "maxx Bus"
// date : "2023-03-25"
// departureTime : "6:00AM"
// destination : "mumbai"
// id : "3"
// source : "pune"
// ticketPrice : "900"
  return (
    <div style={{background:'white',margin:'10px'}}>

        <div style={{display:'flex',justifyContent:"space-around",alignItems:'center'}}>

            <div><p style={{fontSize:"2rem",fontWeight:'700', whiteSpace:"wrap" ,width: '200px'  }}>{item.busName.toUpperCase().slice(0,25)}</p></div>

            <div>
                <div style={{textAlign:'center'}}>
                    <p style={{fontSize:"1.2rem",fontWeight:'400'}}>Departure</p>
                    <p style={{fontSize:"1.5rem",fontWeight:'700'}}>{item.departureTime}</p>
                </div>
            </div>

            <div>
                <div style={{textAlign:'center'}}>
                    <p style={{fontSize:"1.2rem",fontWeight:'400'}}>Arival</p>
                    <p style={{fontSize:"1.5rem",fontWeight:'700'}}>{item.arrivalTime}</p>
                </div>
            </div>

            <div><p style={{fontSize:'2rem',backgroundColor:'#1CA915',padding:'5px',fontWeight:'700'}}>9/10</p></div> {/*{Math.floor(Math.random() * 10)+1} */}

            <div><p style={{fontSize:'2rem',fontWeight:'700'}}>{item.ticketPrice}/-</p></div>
            
        </div>
      
    </div>
  )
}

export default CardBar
