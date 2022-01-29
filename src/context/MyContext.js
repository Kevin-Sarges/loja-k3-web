import React, { createContext, useState } from "react";

export const MyContext = createContext({});

export function MyProvider({ children }) {
  const [category, setCategory] = useState("");

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  return (
    <MyContext.Provider value={(category, handleCategory)}>
      {children}
    </MyContext.Provider>
  );
}
