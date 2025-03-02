import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const GiftCard = () => {
    const [amount, setAmount] = useState(25);
    const [quantity, setQuantity] = useState(1);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleBuyNow = async () => {
        if (!email) {
        alert("Please enter a recipient email!");
        return;
        }

        try {
            await axios.post("http://localhost:5000/send-gift-card", { email, amount, quantity});
            toast.success(`Gift card sent successfully to ${email}`);
        } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send the gift card.");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-5xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
            <img src="https://static.wixstatic.com/media/f15cd7453d09866e4a418b65c8558bf5.png" alt="Gift Card" className="w-full rounded-lg shadow-md" />
        </div>
        
        {/* Form Section */}
        <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Gift Card</h1>
            <p className="text-gray-600 mt-2">Choose an amount and write a personalized message.</p>
            
            {/* Amount Selection */}
            <div className="mt-4">
            <h3 className="font-semibold">Amount</h3>
            <div className="flex gap-2 mt-2">
                {[25, 50, 100, 150, 200].map((amt) => (
                <button key={amt} className={`px-4 py-2 border rounded ${amount === amt ? "bg-black text-white" : "bg-white text-black"}`} onClick={() => setAmount(amt)}>
                    ${amt}
                </button>
                ))}
            </div>
            </div>
            
            {/* Quantity Selection */}
            <div className="mt-4">
            <h3 className="font-semibold">Quantity</h3>
            <div className="flex items-center gap-4 mt-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 border rounded">
                <FaMinus />
                </button>
                <span className="text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 border rounded">
                <FaPlus />
                </button>
            </div>
            </div>
            
            {/* Input Fields */}
            <div className="mt-4 space-y-3">
            <input type="email" placeholder="Recipient email *" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" />
            <textarea placeholder="Message (Optional)" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 border rounded"></textarea>
            </div>

            <button onClick={handleBuyNow} className="w-full px-4 py-2 border rounded bg-black text-white mt-4">Buy Now</button>
        </div>
        </div>
    );
};

export default GiftCard;