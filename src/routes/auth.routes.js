import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "../context/auth";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { PostProduct } from "../pages/PostProduct";
import { Product } from "../pages/Product";
import { Loading } from "../components/Loading";

export function AppRoutes() {
  function Private({ children }) {
    const { authentificated, loading } = useContext(AuthContext);

    if (loading) {
      return <Loading />;
    }

    if (!authentificated) {
      return <Navigate to="/login" />;
    }

    return children;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
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
      <Route
        path="/produto/:id"
        element={
          <Private>
            <Product />
          </Private>
        }
      />
    </Routes>
  );
}
