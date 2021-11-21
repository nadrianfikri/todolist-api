// import model
const { Task } = require('../../models');

exports.addTask = async (req, res) => {
  try {
    const data = req.body;
    await Task.create(data);

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
