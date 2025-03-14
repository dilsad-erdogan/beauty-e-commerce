import { BsBasket3Fill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToCard = (e, product) => {
    e.stopPropagation()
    e.preventDefault()
    const user = localStorage.getItem('user');
    if(user){
      dispatch(addToCart(product))
      toast.success("Product added succesfully!")
    } else {
      toast.error('Please, login first.')
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Ürün Görseli */}
      <div className="flex justify-center my-4">
        <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
      </div>
  
      {/* Ürün İçeriği */}
      <div className="p-4 rounded-b-2xl">
        <h2 className="text-lg font-semibold mb-2">{data.name}</h2>
        <p className="text-sm mb-4 break-words">{data.description}</p>
  
        {/* Fiyat ve Sepet */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{data.price},00₺</span>
          <button className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 text-white transition duration-200" onClick={(e) => handleAddToCard(e, data)}>
            <BsBasket3Fill />
          </button>
        </div>
      </div>
    </div>
  );
};
  
export default ProductCard;