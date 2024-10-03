import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category, Home, Item, Memo } from "../pages";
import { NavBar } from "../components";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </BrowserRouter>
  );
};