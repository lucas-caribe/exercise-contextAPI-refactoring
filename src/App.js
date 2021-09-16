import React from 'react';

import CarsProvider from './context/CarsProvider';

import Cars from './Cars';

import './App.css';

function App() {
  return (
    <CarsProvider>
      <Cars />
    </CarsProvider>
  );
}

export default App;
