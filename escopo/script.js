var x = 2
var y = 7
console.log(x, y)
function escopo(){
    let l = 4
    console.log(x, l)
}
escopo()
console.log(l)