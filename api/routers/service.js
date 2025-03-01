const express = require('express');
const router = express.Router();
const { setService, getService, getServiceById, updateName, updateTime, updatePrice, updateImage, deleteService } = require('../controllers/service');

router.route('/set').post(setService)
router.route('/get').get(getService)
router.route('/getById/:id').get(getServiceById)
router.route('/updateName/:id').put(updateName)
router.route('/updateTime/:id').put(updateTime)
router.route('/updatePrice/:id').put(updatePrice)
router.route('/updateImage/:id').put(updateImage)
router.route('/delete/:id').patch(deleteService)

module.exports = router