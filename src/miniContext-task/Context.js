import React, { useState, createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [contextData, setcontextData] = useState();
  console.log(contextData, "contextData");
  return (
    <Context.Provider value={{ contextData, setcontextData }}>
      {children}
    </Context.Provider>
  );
};

export default { Context, ContextProvider };
