import { createContext } from 'react';

export const initialState = {
  blue: false,
  red: false,
  yellow: false,
};

const CarsContext = createContext(initialState);

export default CarsContext;
