var test = 6

console.log(this)

let pessoa = {
    nome: 'Douglas',
    idade: 21,
    falar: function(){
        console.log("olá, mundo!")
    },
    dizerNome: function(){
        console.log(`O seu nome é ${this.nome}`)
    },
    aniversaio: function(){
    this.idade += 1
    }
}
pessoa.dizerNome()
console.log(pessoa.idade)


for(i = pessoa.idade; i <= 32; i++){
    pessoa.aniversaio()
    console.log(i)
}
