import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { X } from "lucide-react";
import { FaShoppingBasket } from "react-icons/fa";
import { increaseQuantity, decreaseQuantity, removeFromCart, dropCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const cartItems = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      {/* Basket icon */}
      <button className="relative" onClick={() => setIsOpen(true)}>
        <FaShoppingBasket size={24} />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* Basket Panel */}
      <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Üst Bar */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Cart ({cartItems.length} items)</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Basket content */}
        <div className="p-4 overflow-y-auto h-[65%]">
            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty.</p>
            ) : (
                <ul className="space-y-4">
                    {cartItems.map((item) => (
                        <li key={item._id} className="flex items-center gap-4 border-b pb-2">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold">{item.name}</h3>
                                <p className="text-sm text-gray-500">${item.price}</p>

                                {/* Quantity Controller */}
                                <div className="flex items-center gap-2 mt-2">
                                    <button onClick={() => dispatch(decreaseQuantity(item._id))} className="px-2 py-1 bg-gray-200 rounded">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(increaseQuantity(item._id))} className="px-2 py-1 bg-gray-200 rounded">+</button>
                                </div>
                            </div>
                            
                            {/* Remove Button */}
                            <button onClick={() => dispatch(removeFromCart(item._id))} className="text-pink-500 text-sm">X</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>

        {/* Total and order */}
        {cartItems.length > 0 && (
            <div className="p-4 border-t">
                <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>

                <button onClick={() => dispatch(dropCart())} className="w-full bg-red-500 text-white py-2 mt-4 rounded">Clear Cart</button>
                <button className="w-full bg-green-500 text-white py-2 mt-2 rounded" onClick={() => navigate('/order')}>Complete Order</button>
            </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;