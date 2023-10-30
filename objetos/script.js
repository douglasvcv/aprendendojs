let pessoa = {
    nome: 'Douglas',
    idade: 21,
    email:'teste@gmail.com',
    funçao: ()=> console.log("Olá, mundo!"),
    soma: function(a, b){
        return a + b
    }
    
}

console.log(pessoa.nome)
pessoa.funçao()

console.log(pessoa.soma(1, 9))