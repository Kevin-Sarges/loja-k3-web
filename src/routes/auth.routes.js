import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "../context/auth";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { PostProduct } from "../pages/PostProduct";

export function AppRoutes() {
  function Private({ children }) {
    const { authentificated, loading } = useContext(AuthContext);

    if (loading) {
      return <p>Carregando...</p>;
    }

    if (!authentificated) {
      return <Navigate to="/" />;
    }

    return children;
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <Private>
            <Home />
          </Private>
        }
      />
      <Route
        path="/posta-produto"
        element={
          <Private>
            <PostProduct />
          </Private>
        }
      />
    </Routes>
  );
}
