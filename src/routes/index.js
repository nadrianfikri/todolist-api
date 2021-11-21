const express = require('express');
const router = express.Router();

// controller
const { addTask, getAllTask, getTaskByStatus, getTask, updateTask, deleteTask } = require('../controllers/taskController');

// routes task
router.post('/task', addTask);
router.get('/task', getAllTask);
router.get('/task/:status', getTaskByStatus);
router.get('/task/:id', getTask);
router.patch('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

module.exports = router;
