import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import Footer from './Footer'
import Logo from '../Assets/sideBus.jpg'
import CardBar from './CardBar';
import SortComponent from './SortComponent';
import Loading from './Loading';
const App = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [isLoading,setIsLoading]=useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchedData();
  }, [])
  const fetchedData = async () => {
    setIsLoading(true);
    const res = await fetch("https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses");
    const jsonData = await res.json();
    setIsLoading(false);
    setData(jsonData);

  }

  const searchChange = (e) => {
    e.preventDefault();
    if (source && destination) {
      fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}`)
        .then(res => res.json())
        .then(data => {
          setData(data);
          console.log(data);
        })
      
      setDestination("");
      setSource("");
    }

  }

  // sorting
  const sortDeperature = () => {
    
    const filteredData = [...data].sort((a, b) => {
      const timeA = a.departureTime.split(":");
      const timeB = b.departureTime.split(":");
    
      const hourA = parseInt(timeA[0]);
      const hourB = parseInt(timeB[0]);
      
      const minuteA = parseInt(timeA[1].slice(0, 2));
      const minuteB = parseInt(timeB[1].slice(0, 2));

      const periodA = timeA[1].slice(2);
      const periodB = timeB[1].slice(2);
    
      if (periodA === "AM" && periodB === "PM") {
        return -1;
      }
    
      if (periodA === "PM" && periodB === "AM") {
        return 1;
      }
    
      if (hourA === hourB) {
        if (minuteA === minuteB) {
          return 0;
        } else {
          return minuteA < minuteB ? -1 : 1;
        }
      }
    
      return hourA < hourB ? -1 : 1;
    });
    setData(filteredData);
    console.log(filteredData);

  }
  const sortArival = () => {
    
    const filteredData = [...data].sort((a, b) => {
      const timeA = a.arrivalTime.split(":");
      const timeB = b.arrivalTime.split(":");
    
      const hourA = parseInt(timeA[0]);
      const hourB = parseInt(timeB[0]);

      const minuteA = parseInt(timeA[1].slice(0, 2));
      const minuteB = parseInt(timeB[1].slice(0, 2));

      const periodA = timeA[1].slice(2);
      const periodB = timeB[1].slice(2);
    
      if (periodA === "AM" && periodB === "PM") {
        return -1;
      }
    
      if (periodA === "PM" && periodB === "AM") {
        return 1;
      }
    
      if (hourA === hourB) {
        if (minuteA === minuteB) {
          return 0;
        } else {
          return minuteA < minuteB ? -1 : 1;
        }
      }
    
      return hourA < hourB ? -1 : 1;
    });
    setData(filteredData);
    console.log(filteredData);

  }
 

    const sortRating = () => {
      alert("rating data not present API \n Hard coded value")
    }

    const sortPrice = () => {
      setData("");
      const filteredData = [...data].sort((item1, item2) => item1.ticketPrice - item2.ticketPrice);
      setData(filteredData);

      console.log(data);
    }



    return (
      <>
        <div id="main">
          <form className='input-wrapper' onSubmit={searchChange}>
            <div className='single-InputField'>
              {/* from */}
              <label>FROM</label>
              <input type='text' value={source} onChange={(e) => setSource(e.target.value)} />
            </div>
            <div className='single-InputField arrow'>

              <div>&hArr;</div>
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
          {!isLoading && <SortComponent sortDeperature={sortDeperature} sortRating={sortRating} sortPrice={sortPrice} sortArival={sortArival}/>}
          {isLoading ?  <Loading /> : (data.map((item, i) => <CardBar key={i} item={item} />)) }

          <Footer />
        </div>
      </>
    )
  }


  export default App;
