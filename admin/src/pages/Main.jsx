import React, { useEffect, useState } from "react";
import Widgets from "../components/Widgets";
import TopSeller from "../components/TopSeller";
import GoalComp from "../components/GoalComp";
import OrderStat from "../components/OrderStat";
import orderService from "../../../api/services/order";
import productService from "../../../api/services/product";
import categoryService from "../../../api/services/categorie";
import serviceService from "../../../api/services/service";
import { useDispatch } from "react-redux";
import { setOrders } from "../redux/orderSlice";
import { setProducts } from "../redux/productSlice";
import { setCategories } from "../redux/categorySlice";
import { setServices } from "../redux/serviceSlice";

const Main = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState([]);
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await orderService.get();
        setOrder(data.data || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    const fetchPro = async () => {
      try {
        const data = await productService.get();
        setProduct(data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchCat = async () => {
      try {
        const data = await categoryService.get();
        setCategory(data.data || []);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    const fetchService = async () => {
      try {
        const data = await serviceService.get();
        setService(data.data || []);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };

    fetchOrder();
    fetchPro();
    fetchCat();
    fetchService();
  }, []);

  useEffect(() => {
    dispatch(setOrders(order));
    dispatch(setProducts(product));
    dispatch(setCategories(category));
    dispatch(setServices(service));
  }, [order, product, category, service]);

  return (
    <div className="flex w-full justify-center p-6 bg-black">
      <div className="w-full max-w-6xl">
        {/* Widget Container */}
        <div className="mt-10">
          <Widgets />
        </div>

        {/* Containers */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          {/* Top Seller */}
          <div className="col-span-1">
            <TopSeller />
          </div>

          {/* Goal Completion */}
          <div className="col-span-2">
            <GoalComp />
          </div>

          {/* Order Stat. */}
          <div className="col-span-1">
            <OrderStat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;