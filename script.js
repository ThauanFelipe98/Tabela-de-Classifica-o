var listaDeJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");

function ordenarPorPontuacao() {
  listaDeJogadores.sort((a, b) => b.pontos - a.pontos);
}

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  listaDeJogadores.forEach((jogador, index) => {
    var colocacao = index + 1; // índice + 1 para exibir a colocação correta
    console.log(jogador);
    elementoTabela.innerHTML += `
        <tr>
            <td>${colocacao}</td>
            <td>${jogador.nome}</td>
            <td>${jogador.partida}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button style="background-color: green; font-weight: bold; border-radius: 1px"  onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button style="background-color: #000; font-weight: bold; border-radius: 1px " onClick="adicionarEmpate(${index})">Empate</button></td>
            <td><button style="background-color: red; font-weight: bold; border-radius: 1px"onClick="adicionarDerrota(${index})">Derrota</button></td>
            <td><button style="background-color: black; font-weight: bold; border-radius: 4px; color: yellow" onClick="limparPontuacaoJogador(${index})">Limpar Registros</button></td>
            <td><button style="background-color: black; font-weight: bold; border-radius: 4px; color: yellow;" onClick="removerJogador(${index})">Apagar Clube</button></td>
          </tr>
    `;
  });
}

function criarJogador() {
  //verificar se player ja existe ou não
  var nomeNovoJogador = document.getElementById("campoNomeJogador").value;
  listaDeJogadores.push({
    nome: nomeNovoJogador,
    vitoria: 0,
    partida: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  });
  document.getElementById("campoNomeJogador").value = "";
  exibirNaTela();
}
function contarPartidas(index) {
  listaDeJogadores[index].partida = listaDeJogadores[index].vitoria + listaDeJogadores[index].empate + listaDeJogadores[index].derrota;
  exibirNaTela();
}


function adicionarVitoria(index) {
  listaDeJogadores[index].vitoria++;
  listaDeJogadores[index].pontos = listaDeJogadores[index].pontos + 3;
  ordenarPorPontuacao()
  contarPartidas(index);
  exibirNaTela();
}

function adicionarEmpate(index) {
  listaDeJogadores[index].empate++;
  listaDeJogadores[index].pontos++;
  ordenarPorPontuacao()
  contarPartidas(index);
  exibirNaTela();
}

function adicionarDerrota(index) {
  listaDeJogadores[index].derrota++;
  ordenarPorPontuacao()
  contarPartidas(index);
  exibirNaTela();
}

function limparPontuacaoJogador(index) {
  listaDeJogadores[index].vitoria = 0;
  listaDeJogadores[index].partida = 0;
  listaDeJogadores[index].empate = 0;
  listaDeJogadores[index].derrota = 0;
  listaDeJogadores[index].pontos = 0;
  exibirNaTela();
}

function removerJogador(index) {
  listaDeJogadores.splice(index, 1);
  exibirNaTela();
}

function apagarJogadores() {
  listaDeJogadores = [];
  exibirNaTela();
}

function criarEquipe() {
  // Implemente a lógica para adicionar a equipe à lista de jogadores ou realizar outras ações desejadas
  campoNomeClube.value = "";
  exibirNaTela();
}