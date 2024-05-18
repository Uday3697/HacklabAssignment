import React, { useState, useEffect } from 'react';
import './App.css';
import roadImg from './assets/road.jpg'
const TrafficLight = () => {
  const [state, setState] = useState('RED');

  useEffect(() => {
    let timer;
    switch (state) {
      case 'RED':
        timer = setTimeout(() => setState('GREEN'), 20000); // 20 seconds
        break;
      case 'GREEN':
        timer = setTimeout(() => setState('YELLOW'), 15000); // 15 seconds
        break;
      case 'YELLOW':
        timer = setTimeout(() => setState('RED'), 5000); // 5 seconds
        break;
      default:
        break;
    }
    return () => clearTimeout(timer);
  }, [state]);

  const handleClick = (newState) => {
    setState(newState);
  };

  return (
    <div className="main-container">
      <img src={roadImg} alt="road image" className='imgRoad' />
      <div className="traffic-light">
        <div className="light-head">
          <div
            id="red"
            className={`light ${state === 'RED' ? 'red' : ''}`}
            onClick={() => handleClick('RED')}
          ></div>
          <div
            id="yellow"
            className={`light ${state === 'YELLOW' ? 'yellow' : ''}`}
            onClick={() => handleClick('YELLOW')}
          ></div>
          <div
            id="green"
            className={`light ${state === 'GREEN' ? 'green' : ''}`}
            onClick={() => handleClick('GREEN')}
          ></div>
        </div>
        <div className="traffic-pole"></div>

      </div>

    </div>
  );
};
function App() {
  return (
    <div className="App">
      <TrafficLight />
    </div>
  );
}

export default App;
