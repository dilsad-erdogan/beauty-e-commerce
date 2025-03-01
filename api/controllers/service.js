const Service = require("../models/service");

async function setService (req, res) {
    try{
        const { name, time, price, image } = req.body;

        const service = new Service({
            name: name,
            price: price,
            time: time,
            image: image,
            date_time: Date.now(),
            is_active: true
        });

        const savedService = await service.save();
        if(savedService) {
            res.status(201).json({ success: true, data: savedService });
        } else {
            res.status(400).json({ success: false, message: 'Service error!' });
        }
    } catch(error){
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function getService (req, res) {
    try{
        const service = await Service.find({ is_active: true });

        if(service) {
            res.status(200).json({ success: true, data: service })
        } else {
            res.status(404).json({ success: false, message: 'Service not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function getServiceById (req, res) {
    try{
        const id = req.params.id;
        const service = await Service.findById(id);

        if(service && service.is_active === true){
            res.status(200).json({ success: true, data: service });
        } else {
            res.status(404).json({ success: false, error: 'Service not found!' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

async function updateName (req, res) {
    try{
        const id = req.params.id;
        const { name } = req.body;

        const service = await Service.findById(id);
        if(!service) {
            return res.status(404).json({ success: false, message: 'Service not found!' });
        }

        service.name = name;
        service.save();

        res.status(200).json({ success: true, message: 'Service updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updatePrice (req, res) {
    try{
        const id = req.params.id;
        const { price } = req.body;

        const service = await Service.findById(id);
        if(!service) {
            return res.status(404).json({ success: false, message: 'Service not found!' });
        }

        service.price = price;
        service.save();

        res.status(200).json({ success: true, message: 'Service updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateImage (req, res) {
    try{
        const id = req.params.id;
        const { image } = req.body;

        const service = await Service.findById(id);
        if(!service) {
            return res.status(404).json({ success: false, message: 'Service not found!' });
        }

        service.image = image;
        service.save();

        res.status(200).json({ success: true, message: 'Service updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function updateTime (req, res) {
    try{
        const id = req.params.id;
        const { time } = req.body;

        const service = await Service.findById(id);
        if(!service) {
            return res.status(404).json({ success: false, message: 'Service not found!' });
        }

        service.time = time;
        service.save();

        res.status(200).json({ success: true, message: 'Service updated successfully' });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

async function deleteService (req, res) {
    try{
        const id = req.params.id;
        const service = await Service.findById(id);

        if(!service) {
            res.status(404).json({ success: false, message: 'Service not found!' });
        } else {
            await service.updateOne({ is_active: false });
            res.status(200).json({ success: true, message: 'Service deleted successfully.' });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error!' });
    }
}

module.exports = { setService, getService, getServiceById, updateName, updateTime, updatePrice, updateImage, deleteService }