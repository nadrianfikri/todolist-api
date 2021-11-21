const express = require('express');
const router = express.Router();

// controller
const { addTask } = require('../controllers/taskController');

// routes task
router.post('/task', addTask);

module.exports = router;
