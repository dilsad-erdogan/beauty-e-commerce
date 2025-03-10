import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import orderService from "../../../api/services/order";
import productService from "../../../api/services/product";
import categoryService from "../../../api/services/categorie";
import serviceService from "../../../api/services/service";
import { useDispatch } from "react-redux";
import { setOrders } from "../redux/orderSlice";
import { setProducts } from "../redux/productSlice";
import { setCategories } from "../redux/categorySlice";
import { setServices } from "../redux/serviceSlice";

const Navbar = () => {
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
    <nav className="flex justify-center items-center p-5 gap-10 w-full bg-gray-700">
      <div className="text-3xl font-bold" style={{ fontFamily: "'Lucida Handwriting', cursive" }} onClick={() => navigate('/')}>NUDE Admin</div>

      {/* Search text */}
      <div className="ml-4">
        <div className="relative flex-1 mx-4">
          <form>
            <FaSearch className="absolute top-3" />
            <input type="text" placeholder="Search..." className="w-full hover:border-b py-2 px-6" onChange={(e) => setSearch(e.target.value)} />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;