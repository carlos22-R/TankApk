import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    Departamento:"",
    municpio: '',
    tasaC:0,
    zonaPoblacion:"",
    lotes:0,
    lotesPersona:0,
    lotesHabitantes:0,
    totalSub:0
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;