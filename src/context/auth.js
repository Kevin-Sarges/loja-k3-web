/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const { id } = useParams();

  let [categorySelected, setCategorySelected] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [category, setCategory] = useState("");
  const [selectImage, setSelectImage] = useState();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    whatsapp: "",
    description: "",
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function filterCategory(e) {
    const value = e.target.value;
    categorySelected = products.filter(
      (item) => item.category__product === value
    );

    if (categorySelected.length <= 0) {
      setCategorySelected([]);
      alert("Nenhum produto encontrado 🥲");

      // toast.error("Nenhum produto encontrado !!", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
    } else {
      setCategorySelected(categorySelected);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  }

  function handleChangeForm(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
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
      setLoading(false);
      toast.error("Email ou Senha incorretas !!");
      navigate("/login");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;

    setToken(null);
    navigate("/login");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, price, whatsapp, description } = formData;

    const data = new FormData();

    data.append("name_product", name);
    data.append("category__product", category);
    data.append("price", price);
    data.append("whatsapp", whatsapp);
    data.append("description", description);
    data.append("url_image_product", selectImage);

    api
      .post("/products/post-product", data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("erro ao salvar!!");
      });
  }

  function handleUpdated(e) {
    e.preventDefault();

    const { name, price, whatsapp, description } = formData;

    const data = new FormData();

    data.append("name_product", name);
    data.append("category__product", category);
    data.append("price", price);
    data.append("whatsapp", whatsapp);
    data.append("description", description);
    data.append("url_image_product", selectImage);

    api
      .post(`/products/update-product/${id}`, data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        console.log(id);
        toast.error("erro ao editar!!");
      });
  }

  useEffect(() => {
    async function listProduct() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        navigate("/login");
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
        modalIsOpen,
        product,
        products,
        category,
        categorySelected,
        authentificated: !!token,
        token,
        loading,
        openModal,
        closeModal,
        setProduct,
        handleCategory,
        filterCategory,
        handleChange,
        handleLogin,
        logout,
        handleSubmit,
        setSelectImage,
        setFormData,
        handleChangeForm,
        handleUpdated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
