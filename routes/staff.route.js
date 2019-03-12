const express = require('express');
const router = express.Router();
const staff_controller = require('../controllers/staff.controller');

router.get('/', staff_controller.test);
router.post('/', staff_controller.staff_create);

module.exports = router;