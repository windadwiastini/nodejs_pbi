const express = require('express');
const router = express.Router();
const staff_controller = require('../controllers/staff.controller');

router.get('/', staff_controller.staff_all);
router.post('/', staff_controller.staff_create);
router.get('/:id', staff_controller.staff_details);

module.exports = router;