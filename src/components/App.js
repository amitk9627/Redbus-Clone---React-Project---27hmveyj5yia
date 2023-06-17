import React from 'react'
import '../styles/App.css';
import Footer from './Footer'
import Logo from '../Assets/sideBus.jpg'
import CardBar from './CardBar';
import SortComponent from './SortComponent';
const App = () => {


  return (<>
    <div id="main">
      <div className='input-wrapper'>
        <div className='single-InputField'>
          <label>FROM</label>
          <input type='text' />
        </div>
       <div className='single-InputField arrow'>
        <div>{ }</div>
         &hArr;
        </div>
        <div className='single-InputField'>
          <label>TO</label>
          <input type='text' />
        </div>
        <div className='single-InputField'>
          <label>DATE</label>
          <input type='date' />
        </div>
        <button type='submit'>Search Buses</button>
      </div>
      
    </div>
    <div className='bus-svg'><img src={Logo} /></div>
    <div style={{background:'red',padding:'10px'}}>
      {true && <SortComponent />}
     {true && <CardBar />}
      <Footer/> 
    </div>
  </>)
}


export default App;
