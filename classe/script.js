class livro{
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.`)
    }
}

const NodeJS = new livro("Primeiros passos com NodeJS",
"Casa do código", 156)

NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

/*const livro = function(livro, editora, paginas){
    gLivro = livro,
    gEditora = editora,
    gPaginas = paginas

    this.getLivro = function(){
        return gLivro
    }
    this.getEditora = function(){
        return gEditora
    }
    this.getPaginas = function(){
        return gPaginas
    }
}
const GraphQL = new livro("GraphQL", "Casa do código", 146)

console.log(GraphQL.getLivro())
console.log(GraphQL.getEditora())
console.log(GraphQL.getPaginas())

const nome = "alura"

const temp = new String(nome)
console.log(temp.toString())*/