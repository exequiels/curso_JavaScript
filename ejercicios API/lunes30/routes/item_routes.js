const express = require('express');
const itemController = require('../controllers/item_controller');

const router = express.Router();

router.get('/items', itemController.getItems);
router.post('/items', itemController.addItem);

module.exports = router;
