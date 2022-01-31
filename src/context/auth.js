import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { productsFake } from "../services/fakeData";
import { api } from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  let [categorySelected, setCategorySelected] = useState([]);
  const [user, setUser] = useState(null);
  const [category, setCategory] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);

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

  function handleChange(e) {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  }

  async function handleLogin(e) {
    e.preventDefault();

    const { email, password } = inputs;

    const response = await api.post("/login", {
      email,
      password,
    });

    console.log("login", response.data);

    const tokenUser = response.data.token;

    localStorage.setItem("user", tokenUser);

    api.defaults.headers.Authorization = `Bearer ${tokenUser}`;

    setUser({ email });
    navigate("/home");
  }

  function logout() {
    localStorage.removeItem("user");
    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/");
  }

  useEffect(() => {
    const recovereTokenUser = localStorage.getItem("user");

    if (recovereTokenUser) {
      setUser(recovereTokenUser);
      api.defaults.headers.Authorization = `Bearer ${recovereTokenUser}`;
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        category,
        categorySelected,
        handleCategory,
        filterCategory,
        handleChange,
        handleLogin,

        authentificated: !!user,
        user,

        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
