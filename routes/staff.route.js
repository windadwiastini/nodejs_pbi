const express = require('express');
const router = express.Router();
const staff_controller = require('../controllers/staff.controller');

router.get('/', staff_controller.staff_all);
router.post('/', staff_controller.staff_create);
router.get('/:id', staff_controller.staff_details);
router.put('/:id', staff_controller.staff_update);
router.patch('/:id',staff_controller.staff_update);
router.delete('/:id', staff_controller.staff_delete);

module.exports = router;