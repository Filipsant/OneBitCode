function adicionarjogador(){
    var posiçao = document.getElementById ('iposiçao').value
    var nome = document.getElementById ('iNome').value
    var numero = document.getElementById ('inumero').value

    var confirmation = confirm(" Escalar" + nome + "como" + posiçao + "?")

    if (confirmation) {
        var Listatime = document.getElementById ('Listatime')
        var playerItem = document.createElement('li')
        playerItem.id ='player -'+ numero
        playerItem.innerText = posiçao + " :" + nome + " (" + numero + ")"
        Listatime.appendChild(playerItem)

        document.getElementById('iposiçao').value = ''
        document.getElementById('iNome').value = ''
        document.getElementById('inumero').value = ''
    }
}

function removeJogador(){
    var removerN = document.getElementById('iremoverN').value
    var removerJogador = document.getElementById('player -' + inumero)

    var confirmation = confirm ('Remover o jogador ' + removerJogador.innerText + '?')

    if(confirmation) {
        removerJogador.remove()
        document.getElementById('iremoverN').value = ''
    }
}