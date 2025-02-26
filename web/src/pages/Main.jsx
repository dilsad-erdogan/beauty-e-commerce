import { Toaster } from "react-hot-toast"
import SliderMain from "../components/Slider/SliderMain"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/productSlice";
import productServices from "../../../api/services/product";

const Main = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    dispatch(setProducts(product));
  }, [product]);

  useEffect(() => {
    const fetchPro = async () => {
      try{
        const datas = await productServices.get();
        setProduct(datas.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchPro();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Toaster position='top-right' />

      <SliderMain />
    </div>
  )
};

export default Main;