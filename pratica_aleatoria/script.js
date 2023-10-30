function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Verifique o formulário!')
    }else{
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let pass = Number(passo.value)
        res.innerHTML = `Contando: `
        if(pass == 0){
            window.alert('Erro! Verifique o "passo". Considerando passo igual a 1')
            pass = 1
        }
           if(ini < f){
             for(let i = ini; i <= f; i += pass){
                res.innerHTML += `${i} `
           }
     }else{
        for(let i = ini; i >= f; i -= pass){
            res.innerHTML += `${i} `
     }
        
   
    }
}
}