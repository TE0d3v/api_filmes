//configurar rotas de filmes
const express = require('express')
const router = express.Router();
const controllerFilmes = require('../controllers/filmesControl')
const middlewareFilmes = require('../middlewares/filmesmiddle')




router.get("/", controllerFilmes.getFilmes)
router.post("/",middlewareFilmes.validateInsertFilmes, controllerFilmes.insertFilmes)


module.exports = router;
//estudar e criar módulos de importação posteriormente