"use client";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux"
import store from "../redux/store";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Order from "../pages/Order";
import Service from "../pages/Service";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="h-screen bg-black text-white">
        <Router>
          {/* Navbar */}
          <Navbar />

          <div className="flex w-full h-screen overflow-hidden">
            <Toaster position="top-right" />

            {/* Sidebar */}
            <div className="hidden lg:block w-1/6 p-5 overflow-y-auto bg-gray-700">
              <Sidebar />
            </div>

            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/category' element={<Category />} />
              <Route path='/product' element={<Product />} />
              <Route path='/order' element={<Order />} />
              <Route path='/service' element={<Service />} />
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>
  )
}