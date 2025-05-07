function validateInsertFilmes(req, res, next) {
    const { titulo, ano, genero, minutos, nota, sinopse, banner } = req.body

    if (!titulo || !ano || !genero || !minutos || !nota || !sinopse || !banner) {
        return res.status(400).send("Preencha todos os campos corretamente")
    }

    if (titulo.length > 140) {
        return res.status(400).send("Título deve ter no máximo 150 caracteres")
    }

    if (genero.length > 50) {
        return res.status(400).send("Gênero deve ter no máximo 50 caracteres")
    }

    if (typeof ano !== "number" || typeof minutos !== "number") {
        return res.status(400).send("Ano e minutos devem ser numeros")
    }

    next()
}

function validateGetFilmeById(req, res, next) {
    const { id } = req.params
    //metodos get n passam pelo body

    if (!id) {
        return res.status(400).send("ID não informado")
    }

    next()

}

module.exports = {
    validateInsertFilmes,
    validateGetFilmeById
}