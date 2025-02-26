const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
            quantity: { type: Number, required: true }
        }
    ],
    address: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    deliveryStatus: { type: Boolean, required: true },
    date_time: { type: Date, default: Date.now() },
    is_active: { type: Boolean, default: true }
}, { timestamps: true });

orderSchema.index({ coordinates: "2dspehere" });
const OnlineOrder = mongoose.model("Orders", orderSchema);
module.exports = OnlineOrder;