//criar elementos no dom
var novoParagrafo = document.createElement('p')

var colocarTexto = document.createTextNode('parágrafo aqui')

novoParagrafo.appendChild(colocarTexto)

console.log(novoParagrafo)

var body = document.querySelector('body')

body.appendChild(novoParagrafo)

//remover elemento filho: removeChild
var h1 = document.querySelector('#titulo')
body.removeChild(h1)

//remover o elemento em si

var subtitulo = document.querySelector('#subtitulo')
subtitulo.remove()

//criar e colocar identificador no elemento

var newelement = document.createElement('div')
var classe= newelement.classList = "div-criada"
var textodiv = document.createTextNode('dasdadas')
newelement.appendChild(textodiv)
body.appendChild(newelement)
console.log(newelement)