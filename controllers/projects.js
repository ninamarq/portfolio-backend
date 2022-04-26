const services = require('../services/projects');

const getProjects = async (_req, res) => {
  try {
    const projects = await services.allProjects();
    return res.status(200).json(projects);
  } catch (error) {
    console.log(error);
  }
};

const postProject = async (req, res) => {
  try {
    const newProject = await services.postProject(req.body);
    return res.status(201).json(newProject);
  } catch (error) {
    console.log(error);
  }
};

const editProject = async (req, res) => {
  try {
    const { id } = req.params;
    const editedProject = await services.editProject(id, req.body);
    
    if(!editedProject) return res.status(404).json({ message: 'Projeto não encontrado' });

    return res.status(200).json({ message: 'Projeto atualizado com sucesso!' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProjects,
  postProject,
  editProject,
};
