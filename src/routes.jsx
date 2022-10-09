import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Favo from "./pages/Favo/index";
import Filmes from "./pages/filmes/index";
import Header from "./components/Header/index";
import Error from "./pages/Error/index";
import React from 'react'

export default function routes() {
  return (
   <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favo />} />
          <Route path="/filmes/:id" element={<Filmes />} />
          <Route path="*" element={<Error />} />
      </Routes>
   </BrowserRouter>
  )
}
