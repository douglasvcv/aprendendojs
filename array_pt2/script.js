//splice: adiciona números novos e/ou remove elementos dentro do array

var arr = [1, 2, 3, 4, 5]

arr.splice(3, 0, 8898)

console.log(arr)

arr.splice(4, 1)

console.log(arr)

//indexOf: diz em qual o índice o elemento está

console.log(arr.indexOf(3))


//join: adiciona elemento entre os elementos do array

console.log(arr.join('<> '))

//reverse: inverter a ordem dos elementos do array

console.log(arr.reverse())
console.log(arr.indexOf(2))
