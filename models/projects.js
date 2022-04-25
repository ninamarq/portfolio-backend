const Projects = (sequelize, DataTypes) => {
  const Projects = sequelize.define("Projects", {
    name: DataTypes.STRING,
    github_link: DataTypes.STRING,
    img_link: DataTypes.STRING,
  });

  return Projects;
};

module.exports = Projects;