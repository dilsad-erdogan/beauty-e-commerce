const Order = require("../models/order");

async function setOrder (req, res) {
    try{
        const { user_id, products, address, totalPrice, deliveryStatus } = req.body;

        const order = new Order({
            user_id: user_id,
            products: products,
            address: address,
            totalPrice: totalPrice,
            deliveryStatus: deliveryStatus,
            date_time: Date.now(),
            is_active: true
        });

        const savedOrder = await order.save();
        if(savedOrder) {
            res.status(201).json({ success: true, data: savedOrder });
        } else {
            res.status(400).json({ success: false, message: 'Order error!' });
        }
    } catch(error){
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function getOrder (req, res) {
    try{
        const order = await Order.find();

        if(order) {
            res.status(200).json({ success: true, data: order })
        } else {
            res.status(404).json({ success: false, message: 'Order not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getActiveOrder (req, res) {
    try{
        const order = await Order.find({ is_active: true });

        if(order) {
            res.status(200).json({ success: true, data: order })
        } else {
            res.status(404).json({ success: false, message: 'Order not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getOrderById (req, res) {
    try{
        const id = req.params.id;
        const order = await Order.findById(id);

        if(order && order.is_active === true){
            res.status(200).json({ success: true, data: order });
        } else {
            res.status(404).json({ success: false, error: 'Order not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function updateStatus (req, res) {
    try{
        const id = req.params.id;
        const { deliveryStatus } = req.body;

        const order = await OnlineOrder.findById(id);
        if(!order) {
            return res.status(404).json({ success: false, message: 'Order not found!' });
        }

        order.deliveryStatus = deliveryStatus;
        order.save();

        res.status(200).json({ success: true, message: 'Order updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function deleteOrder (req, res) {
    try{
        const id = req.params.id;
        const order = await Order.findById(id);

        if(!order) {
            res.status(404).json({ success: false, message: 'Order not found!' });
        } else {
            await order.updateOne({ is_active: false });
            res.status(200).json({ success: true, message: 'Order deleted successfully.' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

module.exports = { setOrder, getOrder, getActiveOrder, getOrderById, updateStatus, deleteOrder }