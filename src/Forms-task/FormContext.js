import React, { createContext, useState } from "react";
// import  from "react";

const ContextStore = createContext("some value");

export default function FormContext({ children }) {
  const [childrenData, setchildrenData] = useState([]);
  const formData = () => {};
  return (
    <ContextStore.Provider value="vinay">{children}</ContextStore.Provider>
  );
}
