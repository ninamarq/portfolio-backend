const express = require('express');

require('dotenv').config();

const ProjectRouter = require('./router/projects');

const app = express();

app.use(express.json());

app.use(ProjectRouter);

app.listen(process.env.DB_PORT || 3000, () => console.log(`Ouvindo na ${process.env.DB_PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
