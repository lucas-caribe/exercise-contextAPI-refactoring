// src/Cars.jsx
import React from 'react';
import CarsContext from './context/CarsContext';

import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
  return (
    <CarsContext.Consumer>
      {({ cars: { red, blue, yellow }, moveCar }) => (
        <div>
          <div>
            <img
              className={red ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button onClick={() => moveCar('red')} type="button">
              Move
            </button>
          </div>
          <div>
            <img
              className={blue ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button onClick={() => moveCar('blue')} type="button">
              Move
            </button>
          </div>
          <div>
            <img
              className={yellow ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button onClick={() => moveCar('yellow')} type="button">
              Move
            </button>
          </div>
        </div>
      )}
    </CarsContext.Consumer>
  );
}

export default Cars;
