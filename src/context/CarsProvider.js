import React, { useState } from 'react';
import CarsContext, { initialState } from './CarsContext';

function CarsProvider({ children }) {
  const [cars, setCars] = useState(initialState);

  const move = {
    red: () => ({ ...cars, red: !cars.red }),
    blue: () => ({ ...cars, blue: !cars.blue }),
    yellow: () => ({ ...cars, yellow: !cars.yellow }),
  }

  function moveCar(color) {
    setCars(move[color]());
  }

  return (
    <CarsContext.Provider value={{ cars, moveCar }}>
      {children}
    </CarsContext.Provider>
  )
}

export default CarsProvider;
