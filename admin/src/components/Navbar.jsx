import { FaSearch } from "react-icons/fa";

const Navbar = () => {
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