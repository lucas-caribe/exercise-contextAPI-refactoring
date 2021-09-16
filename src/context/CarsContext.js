import { createContext } from 'react';

export const initialState = {
  red: false,
  blue: false,
  yellow: false,
};

const CarsContext = createContext(initialState);

export default CarsContext;
