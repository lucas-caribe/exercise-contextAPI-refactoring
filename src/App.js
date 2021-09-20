import React from 'react';

import CarsProvider from './context/CarsProvider';
import TrafficProvider from './context/TrafficProvider';

import TrafficSignal from './TrafficSignal';
import Cars from './Cars';

import './App.css';

function App() {
  return (
    <TrafficProvider>
      <CarsProvider>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </CarsProvider>
    </TrafficProvider>
  );
}

export default App;
