// import model
const { Task } = require('../../models');

// create
exports.addTask = async (req, res) => {
  try {
    const data = await Task.create({
      ...req.body,
      status: 'active',
    });

    res.send({
      status: 'success',
      message: 'add new task successfull',
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'Failed',
      message: 'Server error',
    });
  }
};

// read
exports.getAllTask = async (req, res) => {
  try {
    const allTaskData = await Task.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      order: [['createdAt', 'ASC']],
    });
    res.send({
      status: 'success',
      message: 'Get all data success',
      data: allTaskData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'Failed',
      message: 'Server error',
    });
  }
};
// read data by status
exports.getTaskByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const taskDataByStatus = await Task.findAll({
      where: {
        status,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      order: [['updatedAt', 'ASC']],
    });

    res.send({
      status: 'success',
      message: 'Get all data by status success',
      data: taskDataByStatus,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'Failed',
      message: 'Server error',
    });
  }
};

// read one data
exports.getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskData = await Task.findOne({
      where: {
        id,
      },
    });

    res.send({
      status: 'success',
      message: 'Get data success',
      data: taskData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'Failed',
      message: 'Server error',
    });
  }
};

// update
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.update(req.body, {
      where: {
        id,
      },
    });

    const updatedData = await Task.findOne({
      where: {
        id,
      },
    });

    res.send({
      status: 'success',
      message: 'update task is successfull',
      data: updatedData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'Failed',
      message: 'Server error',
    });
  }
};

// delete
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: {
        id,
      },
    });
    res.send({
      status: 'success',
      message: `delete task with id: ${id} success`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'failed',
      message: 'server error',
    });
  }
};
