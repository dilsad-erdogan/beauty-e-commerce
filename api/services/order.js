import axios from 'axios';
const ORDER = "http://localhost:3000/order";

const add = async (data) => {
    try{
        const response = await axios.post(`${ORDER}/set`, data);
        return response.data;
    } catch (error){
        console.error('Error adding online order:', error);
        throw error;
    }
};

const get = async () => {
    try{
        const response = await axios.get(`${ORDER}/get`);
        return response.data;
    } catch (error){
        console.error('Error fetching online order:', error);
        throw error;
    }
};

const getActive = async () => {
    try{
        const response = await axios.get(`${ORDER}/getActive`);
        return response.data;
    } catch (error){
        console.error('Error fetching online order:', error);
        throw error;
    }
};

const byId = async (id) => {
    try{
        const response = await axios.get(`${ORDER}/getById/${id}`);
        return response.data;
    } catch (error){
        console.error('Error fetching online order by id:', error);
        throw error;
    }
};

const updateStatus = async (id, data) => {
    try{
        const response = await axios.put(`${ORDER}/updateStatus/${id}`, data);
        return response.data;
    } catch (error){
        console.error('Error updating online order time:', error);
        throw error;
    }
};

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${ORDER}/delete/${id}`);
        return response.data;
    } catch (error){
        console.error('Error deleting online order:', error);
        throw error;
    }
};

const orderServices = { add, get, getActive, byId, updateStatus, deleted };
export default orderServices;