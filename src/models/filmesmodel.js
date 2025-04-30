// vai receber via props as informaçoes
// clean code escrita
// s.o.l.i.d organizaçao de código

const connection = require("./conection")

async function insertFilme(filme) {
    const filmeInsert = await connection.query('INSERT INTO filme (titulo, genero, ano, minutos) VALUES ($1, $2, $3, $4) RETURNING *', [filme.titulo, filme.genero, filme.ano, filme.minutos])
    return filmeInsert.rows[0]
}

async function getFilmes(){
    const filme = await connection.query("SELECT * FROM filme")
    return filme.rows
}

async function getFilmeById(id) {
    const filme = await connection.query("SELECT * FROM filme WHERE id = $1", [id])
}

module.exports = {
    insertFilme,
    getFilmes,
    getFilmeById
}