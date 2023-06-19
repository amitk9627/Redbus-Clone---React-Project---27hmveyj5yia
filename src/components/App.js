import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import Footer from './Footer'
import Logo from '../Assets/sideBus.jpg'
import CardBar from './CardBar';
import SortComponent from './SortComponent';
const App = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchedData = async () => {
      const res = await fetch("https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses");
      const jsonData = await res.json();
      setData(jsonData);
      // console.log(data);
    }
    fetchedData();

  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    if (source && destination) {
      console.log("s :" + source, "d :" + destination);
      setDestination("");
      setSource("");
    }
   
  }



  return (<>
    <div id="main">
      <form className='input-wrapper' onSubmit={handleChange}>
        <div className='single-InputField'>
          {/* from */}
          <label>FROM</label>
          <input type='text' value={source} onChange={(e) => setSource(e.target.value)} />
        </div>
        <div className='single-InputField arrow'>
          <div>{ }</div>
          &hArr;
        </div>
        <div className='single-InputField'>
          {/* to */}
          <label>TO</label>
          <input type='text' value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        <div className='single-InputField'>
          <label>DATE</label>
          <input type='date' />
        </div>
        <button type='submit' >Search Buses</button>
      </form>

    </div>
    <div className='bus-svg'><img src={Logo} /></div>
    <div style={{ background: 'red', padding: '10px' }}>
      {true && <SortComponent />}
     {data.map((item,i)=><CardBar key={i} item={item} />)}

      <Footer />
    </div>
  </>)
}


export default App;
