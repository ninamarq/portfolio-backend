const { Projects } = require('../models');

const allProjects = async () => {
  const allProjects = await Projects.findAll();

  return allProjects;
};

module.exports = {
  allProjects,
}