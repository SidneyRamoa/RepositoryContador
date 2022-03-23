function contar() {
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossível contar!"
        window.alert("[ERRO] Faltam dados!")
    }else{
        res.innerHTML = "Contando: "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert("iMPOSSÍVEL CONTAR")
        }
        if(i < f){
            //CONTAGEM CRESCENTE
            for(let c = i; c<=f; c+=p){ //o contador vai começar no inicio e enquanto o contador for menor ou igual ao fim, o contador vai receber ele mesmo + o passo.
                res.innerHTML += ` ${c} >`
            }
        }else{
            //CONTAGEM DECRESCENTE
            for(let c = i; c>= f; c -=p){
                res.innerHTML += ` ${c} >`
            }
        }
        res.innerHTML += ` Fim`
    }   
}