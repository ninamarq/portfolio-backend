const { Projects } = require('../models');

const allProjects = async () => {
  const allProjects = await Projects.findAll();
  return allProjects;
};

const postProject = async (project) => {
  const { name, github_link, img_link } = project;
  const newObj = {
    name,
    github_link,
    img_link,
    createdAt: new Date(),
    updated: new Date(),
  }
  const newProject = await Projects.create(newObj);
  return newProject;
}

const editProject = async (id, project) => {
  console.log(id, project);
  const { name, github_link, img_link } = project;

  const newObj = {
    name,
    github_link,
    img_link,
    createdAt: new Date(),
    updated: new Date(),
  }

  const [updateProject] = await Projects.update(
    newObj,
    { where: { id } },
  );

  console.log(updateProject); // confira o que é retornado quando o user com o id é ou não encontrado;
  return updateProject;
};

module.exports = {
  allProjects,
  postProject,
  editProject,
}