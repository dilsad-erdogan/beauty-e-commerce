import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchTerm } from "../../redux/productSlice";
import { setProducts } from "../../redux/productSlice";
import { setCategories } from "../../redux/categorySlice";
import productServices from "../../../../api/services/product";
import categorieServices from "../../../../api/services/categorie";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate('/search');
  };

  useEffect(() => {
    dispatch(setProducts(product));
    dispatch(setCategories(category));
  }, [product, category]);

  useEffect(() => {
    const fetchPro = async () => {
      try {
        const data = await productServices.get();
        setProduct(data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchCat = async () => {
      try {
        const data = await categorieServices.get();
        setCategory(data.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchPro();
    fetchCat();
  }, []);

  return (
    <nav className="flex flex-col justify-center items-center w-full">
      <div className="text-3xl font-bold" style={{ fontFamily: "'Lucida Handwriting', cursive" }} onClick={() => navigate('/')}>NUDE</div>

      <div className="hidden lg:flex w-full pt-8 justify-between items-center">
        {/* Search text */}
        <div className="ml-4">
          <div className="relative flex-1 mx-4">
            <form onSubmit={handleSearch}>
              <FaSearch className="absolute top-3" />
              <input type="text" placeholder="Search..." className="w-full hover:border-b py-2 px-6" onChange={(e) => setSearch(e.target.value)} />
            </form>
          </div>
        </div>

        {/* Menu */}
        <ul className="flex gap-6 items-center justify-center" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>
          <li onClick={() => navigate('/shop')}>SHOP</li>
          <li onClick={() => navigate('/service')}>SERVICES</li>
          <li>GIFT CARD</li>
          <li onClick={() => navigate('/contact-us')}>CONTACT</li>
        </ul>

        {/* Login and basket */}
        <div className="flex gap-5 m-5 text-2xl">
          <FaUserCircle />
          <CartSidebar />
        </div>
      </div>

      <div className="lg:hidden mt-4">
        <IoMdMenu className="text-4xl" onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col items-center gap-6 w-full">
          {/* Search text */}
          <div className="ml-4">
            <div className="relative flex-1 mx-4">
              <form onSubmit={handleSearch}>
                <FaSearch className="absolute top-3" />
                <input type="text" placeholder="Search..." className="w-full hover:border-b py-2 px-6" onChange={(e) => setSearch(e.target.value)} />
              </form>
            </div>
          </div>

          {/* Menu */}
          <ul className="flex flex-col gap-3 items-center" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>
            <li onClick={() => navigate('/shop')}>SHOP</li>
            <li onClick={() => navigate('/service')}>SERVICES</li>
            <li>GIFT CARD</li>
            <li>CONTACT</li>
          </ul>

          {/* Login and basket */}
          <div className="flex gap-5 mr-4 text-2xl">
            <FaUserCircle />
            <CartSidebar />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;