import React, { useState } from 'react';

import TrafficContext, { initialState } from './TrafficContext';

const TrafficProvider = ({ children }) => {
  const [signal, setSignal] = useState(initialState);

  const changeSignal = (color) => {
    setSignal({ ...signal, color });
  };

  console.log(changeSignal)

  return (
    <TrafficContext.Provider value={{ signal, changeSignal }}>
      {children}
    </TrafficContext.Provider>
  );
};

export default TrafficProvider;
