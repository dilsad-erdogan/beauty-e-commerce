const express = require('express');
const router = express.Router();
const { setOrder, getOrder, getActiveOrder, getOrderById, updateStatus, deleteOrder } = require('../controllers/order');

router.route('/set').post(setOrder)
router.route('/get').get(getOrder)
router.route('/getActive').get(getActiveOrder)
router.route('/getById/:id').get(getOrderById)
router.route('/updateStatus/:id').put(updateStatus)
router.route('/delete/:id').patch(deleteOrder)

module.exports = router