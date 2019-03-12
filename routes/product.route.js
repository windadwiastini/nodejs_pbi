const express = require('express');
const router = express.Router();
const product_controller = require('../controllers/product.controller');

router.get('/', product_controller.product_all);
router.get('/test', product_controller.test);
router.get('/:id', product_controller.product_details);
// router.post('/create', product_controller.product_create);
router.post('/', product_controller.product_create);
// router.put('/:id/update', product_controller.product_update);
router.put('/:id', product_controller.product_update);
// router.delete('/:id/delete', product_controller.product_delete);
router.delete('/:id', product_controller.product_delete);
module.exports = router;