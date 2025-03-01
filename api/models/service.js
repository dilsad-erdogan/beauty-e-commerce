const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    time: { type: Number, required: true },
    image: { type: String, required: true },
    date_time: { type: Date, default: Date.now() },
    is_active: { type: Boolean, default: true }
}, { timestamps: true });

serviceSchema.index({ coordinates: "2dspehere" });
const Product = mongoose.model("Services", serviceSchema);
module.exports = Product;