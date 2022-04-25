const express = require('express');
const { getProjects } = require('./controllers/projects');

const app = express();

app.get('/', getProjects);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
