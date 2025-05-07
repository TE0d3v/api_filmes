const modelFilmes = require("../models/filmesmodel")
// controllers sempre deve ter try catch
async function getFilmes(req, res) {
    try {
        const filmes = await modelFilmes.getFilmes()

        return res.status(200).send(filmes)
    } catch (error) {
        return res.status(400).send("Erro ao listar filmes")
    }
}

async function getFilmeById(req, res) {
    // rotas get n devem ter acesso ao body. deve ser usado parametros pela url
    const { id } = req.params

    try {
        const filme = await modelFilmes.getFilmeById(id)

        return res.status(200).send(filme)
    } catch (error) {
        return res.status(400).send("Erro ao buscar Filme")
    }
}

async function insertFilmes(req, res) {
    const filme = req.body

    try {
        const filmeInsert = await modelFilmes.insertFilme(filme)

        return res.status(201).send(filmeInsert)
    } catch (error) {
        return res.status(400).send("Erro ao inserir filme")
    }
}

async function deleteFilme(req, res) {
    const { id } = req.params

    try{
        const filme = await modelFilmes.deleteFilme(id)
        return res.status(200).send(filme)
    }catch{
        return res.status(400).send("Erro ao deletar filme")
    }
}
// n á a necessidade de validações simples passarem pelo model para isso é utilizado os middleware
module.exports = {
    getFilmes,
    insertFilmes,
    getFilmeById,
    deleteFilme
}