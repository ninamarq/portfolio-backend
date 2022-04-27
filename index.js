const express = require('express');

const ProjectRouter = require('./router/projects');

const cors = require('cors');

const app = express();

app.use(express.json());

const corsOptions = {
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(ProjectRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
