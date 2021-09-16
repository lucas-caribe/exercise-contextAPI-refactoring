import { createContext } from 'react';

const initialState = {
  blue: false,
  red: false,
  yellow: false,
};

const CarsContext = createContext(initialState);

export default CarsContext;
