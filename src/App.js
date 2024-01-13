import { useState } from 'react';
import './App.css';
import Tours from './components/Tours';
import data from './data';

const App = () => {
  // we initialized the tour data
  const [tours, setTours] = useState(data);

  // this is the logic of removetour when we click the button not interested it wil remove cards
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  // this is the logic of when we removed all cards then we see the ui and refresh button when we click on the refresh button it gives all the removed cards
  if(tours.length === 0) {
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }
  
  return(
    <div className='App'>
    {/* here we pass all the tours data and removetour function by props ot Tours component */}
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
  };
export default App;

