import React, { createContext, useState } from "react";
import { productsFake } from "../services/fakeData";

export const MyContext = createContext({});

export function MyProvider({ children }) {
  let [categorySelected, setCategorySelected] = useState([]);
  const [category, setCategory] = useState("");

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function filterCategory(e) {
    const value = e.target.value;
    categorySelected = productsFake.filter((item) => item.category === value);

    if (categorySelected.length <= 0) {
      console.log(categorySelected);
      return alert("Não a produtos dessa categoria !!");
    } else {
      console.log(categorySelected);
      setCategorySelected(categorySelected);
    }
  }

  return (
    <MyContext.Provider
      value={{
        category,
        categorySelected,
        handleCategory,
        filterCategory,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
