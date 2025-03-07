"use client";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Order from "../pages/Order";
import Service from "../pages/Service";

export default function Home() {
  return (
    <div className="h-screen bg-black text-white">
      <Router>
        {/* Navbar */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/category' element={<Category />} />
          <Route path='/product' element={<Product />} />
          <Route path='/order' element={<Order />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </Router>
    </div>
  )
}