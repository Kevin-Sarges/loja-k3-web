import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  let [categorySelected, setCategorySelected] = useState([]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [category, setCategory] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function filterCategory(e) {
    const value = e.target.value;
    categorySelected = product.filter(
      (item) => item.category__product === value
    );

    if (categorySelected.length <= 0) {
      alert("Nenhum produto encontrado !!");
      setCategorySelected([]);
    } else {
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

    const tokenUser = response.data.token;

    if (tokenUser) {
      localStorage.setItem("token", tokenUser);
      api.defaults.headers.Authorization = `Bearer ${tokenUser}`;

      setToken({ email });
      setLoading(false);
      navigate("/");
    } else {
      alert("Email ou Senha incorretas !!");
      setLoading(false);
      navigate("/login");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;

    setToken(null);
    navigate("/login");
  }

  useEffect(() => {
    async function listProduct() {
      try {
        const response = await api.get("/products");
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    listProduct();
  }, []);

  useEffect(() => {
    const tokenUser = localStorage.getItem("token");

    if (tokenUser) {
      setToken(tokenUser);
      api.defaults.headers.Authorization = `Bearer ${tokenUser}`;
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        product,
        category,
        categorySelected,
        handleCategory,
        filterCategory,
        handleChange,
        handleLogin,
        authentificated: !!token,
        token,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
