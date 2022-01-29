import React, { createContext, useState } from "react";

export const MyContext = createContext({});

export function MyProvider({ children }) {
  const [category, setCategory] = useState("");

  return (
    <MyContext.Provider value={(category, setCategory)}>
      {children}
    </MyContext.Provider>
  );
}
