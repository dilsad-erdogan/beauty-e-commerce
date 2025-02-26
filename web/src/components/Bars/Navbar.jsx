import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaSearch, FaUserCircle, FaShoppingBasket } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchTerm } from "../../redux/productSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate('/search');
  };

  return (
    <nav className="flex flex-col justify-center items-center w-full">
      <div className="text-3xl font-bold" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>NUDE</div>

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
          <li>SHOP</li>
          <li>SERVICES</li>
          <li>GIFT CARD</li>
        </ul>

        {/* Login and basket */}
        <div className="flex gap-5 m-5 text-2xl">
          <FaUserCircle />
          <FaShoppingBasket  />
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
            <li>SHOP</li>
            <li>SERVICES</li>
            <li>GIFT CARD</li>
          </ul>

          {/* Login and basket */}
          <div className="flex gap-5 mr-4 text-2xl">
            <FaUserCircle />
            <FaShoppingBasket  />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;