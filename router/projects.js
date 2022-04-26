const { Router } = require('express');
const projectsControllers = require('../controllers/projects');

const ProjectRouter = Router();

ProjectRouter.get('/', projectsControllers.getProjects);

ProjectRouter.post('/', projectsControllers.postProject);

ProjectRouter.put('/:id', projectsControllers.editProject);

ProjectRouter.delete('/:id', projectsControllers.deleteProject);

module.exports = ProjectRouter;