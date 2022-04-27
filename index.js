const express = require('express');

require('dotenv').config();

const ProjectRouter = require('./router/projects');

const app = express();

app.use(express.json());

app.use(ProjectRouter);

const PORT = process.env.DB_PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
