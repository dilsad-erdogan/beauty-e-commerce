import axios from 'axios'
const SERVICE = "http://localhost:3000/service"

const add = async (data) => {
    try{
        const response = await axios.post(`${SERVICE}/set`, data);
        return response.data;
    } catch (error){
        console.error('Error adding service:', error);
        throw error;
    }
};

const get = async () => {
    try{
        const response = await axios.get(`${SERVICE}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching service:', error);
        throw error;
    }
};

const byId = async (id) => {
    try{
        const response = await axios.get(`${SERVICE}/getById/${id}`);
        return response.data;
    } catch (error){
        console.error('Error fetching service by id:', error);
        throw error;
    }
};

const updateName = async (id, name) => {
    try{
        const response = await axios.put(`${SERVICE}/updateName/${id}`, name);
        return response.data;
    } catch (error){
        console.error('Error updating service name:', error);
        throw error;
    }
};

const updateTime = async (id, time) => {
    try{
        const response = await axios.put(`${SERVICE}/updateTime/${id}`, time);
        return response.data;
    } catch (error){
        console.error('Error updating product time:', error);
        throw error;
    }
};

const updatePrice = async (id, price) => {
    try{
        const response = await axios.put(`${SERVICE}/updatePrice/${id}`, price);
        return response.data;
    } catch (error){
        console.error('Error updating service price:', error);
        throw error;
    }
};

const updateImage = async (id, image) => {
    try{
        const response = await axios.put(`${SERVICE}/updateImage/${id}`, image);
        return response.data;
    } catch (error){
        console.error('Error updating service image:', error);
        throw error;
    }
};

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${SERVICE}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting service:', error);
        throw error;
    }
};

const productServices = { add, get, byId, updateName, updateTime, updatePrice, updateImage, deleted };
export default productServices 