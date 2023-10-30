for(var i=0; i<=10;i++){
    console.log(`${i}`)
    if(i === 5){
        break
    }
}
console.log(`Deu o break </br>`)

var x = 10
while(x < 100){
    x += 10
    if(x === 70){
        console.log(`Continue ${x}`)
        continue
    }
    console.log(`${x}`)
}