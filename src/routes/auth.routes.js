import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { PostProduct } from "../pages/PostProduct";

export function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/posta-produto" element={<PostProduct />} />
    </Routes>
  );
}
