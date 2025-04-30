const express = require('express');
const app = express();
const port = 5000
const routesFilmes = require('./routes/filmes');

app.use(express.json());

app.use(routesFilmes);

app.listen(port, () => {
    console.log(`tá rodando nessa porta ai se liga: localhost:${port}`)
})