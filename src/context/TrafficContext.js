import { createContext } from 'react';

export const initialState = {
  color: 'red',
};

const TrafficContext = createContext(initialState);

export default TrafficContext;
