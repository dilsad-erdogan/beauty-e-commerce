import { Toaster } from "react-hot-toast";
import SliderMain from "../components/Slider/SliderMain";
import { useSelector } from "react-redux";
import ProductCard from "../components/Card/ProductCard";

const Main = () => {
  const products = useSelector(state => state.product.products);

  // Take last 3 products
  const lastProducts = [...products].sort((a, b) => new Date(b.date_time) - new Date(a.date_time)).slice(0, 3);

  return (
    <div className="flex flex-col justify-center items-center">
      <Toaster position="top-right" />

      {/* Slider */}
      <SliderMain />

      {/* Last 3 product */}
      <div className="w-full mx-auto p-6 relative max-w-screen-lg text-center">
        <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>
          Last Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {lastProducts.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
              <ProductCard data={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;