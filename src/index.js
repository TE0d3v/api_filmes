const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000
const routesFilmes = require('./routes/filmes');

app.use(cors())
app.use(express.json());

app.use(routesFilmes);

app.listen(port, () => {
    console.log(`tá rodando nessa porta ai se liga: http://localhost:${port}`)
})