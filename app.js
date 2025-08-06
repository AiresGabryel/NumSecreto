let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//atribuindo texto a tags do html:
//let titulo = document.querySelector('h1');//seleciona o H1
//titulo.innerHTML = 'Jogo do número secreto';//dentro do html daquele título
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto'); // usando função em h1 sem retorno
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); // usando função em p sem retorno
}

exibirMensagemInicial();

//função é responsável por determinar alguma ação dentro do código
//por padrão, funções tem apenas 1 responsabilidade
function verificarChute(){ 
    let chute = document.querySelector('input').value 

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute < numeroSecreto){
            exibirTextoNaTela('p', `O número é maior que ${chute}` );
    
        } else {
            exibirTextoNaTela('p', `O número é menor que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}//função sem parâmetro com retorno

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}//função sem retorno

function reiniciarJogo(){//resetando o App
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
