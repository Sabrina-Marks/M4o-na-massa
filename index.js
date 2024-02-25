let nomeUsuario 

function pegarNomeUsuario ( ) {
    nomeUsuario = prompt("Digite seu nome")
    while(nomeUsuario.length < 3){
        nomeUsuario = prompt("Digite seu nome novamente")
    }
    document.write(`<h1>Bem-vindo ${nomeUsuario}</h1>`)
}