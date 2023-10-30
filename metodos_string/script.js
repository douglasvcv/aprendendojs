var num = [1, 2, 3, 4, 5]

console.log(num.length)

//push
num.push(6)
console.log(num)

//pop
num.pop()
console.log(num)

//unshift
num.unshift(0)
console.log(num)

//shift

num.shift()
console.log(num)

//mostrar o ultimo numero ou qualquer numero:

console.log(num[num.length -1])

//saber se é um array: isArray

console.log(Array.isArray(3))
console.log(Array.isArray(num))