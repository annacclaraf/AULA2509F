let elementoBotao = document.getElementById("btnConfirm")
    elementoBotao.addEventListener("click", function(){
        let numerosElemento = document.getElementById("numeros");
        for (let i = 0; i <= 100; i++) {
        numerosElemento.innerHTML += i + " "; //" " para adicionar um espaço entre os números, faz virar string
    }

})