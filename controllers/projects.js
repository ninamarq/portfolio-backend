const services = require('../services/projects');

const getProjects = async (req, res) => {
  try {
    const projects = await services.allProjects();
    return res.status(200).json(projects);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProjects,
};
