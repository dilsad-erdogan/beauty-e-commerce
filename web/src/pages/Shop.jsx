import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import ProductCard from "../components/Card/ProductCard";

const Shop = () => {
  const products = useSelector((state) => state.product.products);
  const categories = useSelector((state) => state.category.categories);

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [priceRange, setPriceRange] = useState([10, 200]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All Products" || product.cat_id === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="flex flex-col lg:flex-row">
      <Toaster position="top-right" />

      {/* Sidebar - Filters */}
      <div className="w-full lg:w-1/4 p-6 border-r border-gray-300">
        <h3 className="text-2xl font-semibold mb-4">Browse by</h3>
        <ul className="mb-6 space-y-2">
          {/* All categories option */}
          <li>
            <button onClick={() => setSelectedCategory("All Products")} className={`text-left w-full ${selectedCategory === "All Products" ? "font-bold" : ""}`}>All Products</button>
          </li>
          
          {/* Categories */}
          {categories.map((category) => (
            <li key={category._id}>
              <button onClick={() => setSelectedCategory(category._id)} className={`text-left w-full ${selectedCategory === category._id ? "font-bold" : ""}`}>{category.name}</button>
            </li>
          ))}
        </ul>

        {/* Price Filter */}
        <h3 className="text-2xl font-semibold mb-4">Filter by</h3>
        <label className="text-sm">Price</label>
        <input type="range" min="10" max="200" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} className="w-full my-2" />
        <div className="text-sm">
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full lg:w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-6">All Products</h2>
        <p className="mb-4">{filteredProducts.length} products</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
              <ProductCard data={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;