// pratos
let pratosElement = document.querySelectorAll('.prato');
let pratoSelecionado = false;
let pratoPedido = {};

// bebidas
let bebidasElement = document.querySelectorAll('.bebida');
let bebidaSelecionado = false;
let bebidaPedido = {};

// sobremesas
let sobremesasElement = document.querySelectorAll('.sobremesa');
let sobremesaSelecionado = false;
let sobremesaPedido = {};

let valorPedidoTotal = 0;

// Adicionar seus respectivos eventos de click
pratosElement.forEach(adicionarEventoClickPratos);
bebidasElement.forEach(adicionarEventoClickBebidas);
sobremesasElement.forEach(adicionarEventoClickSobremesas);

function adicionarEventoClickPratos(element) {
  element.addEventListener('click', () => adicionarPratoCarrinho(element));
}

function adicionarEventoClickBebidas(element) {
  element.addEventListener('click', () => adicionarBebidaCarrinho(element));
}

function adicionarEventoClickSobremesas(element) {
  element.addEventListener('click', () => adicionarSobremesaCarrinho(element));
}

// Funções de adicionar os produtos no carrinho
function adicionarPratoCarrinho(element) {
  pratosElement.forEach((prato) => prato.classList.remove('selecionado'));

  element.classList.add('selecionado');
  pratoSelecionado = true;

  const nome = element.querySelector('.produto-nome').textContent;
  const preco = Number(
    element.querySelector('.produto-preco').attributes.value.value
  );

  pratoPedido = { nome, preco };

  trocarBotao();
}

function adicionarBebidaCarrinho(element) {
  bebidasElement.forEach((bebida) => bebida.classList.remove('selecionado'));

  element.classList.add('selecionado');
  bebidaSelecionado = true;

  const nome = element.querySelector('.produto-nome').textContent;
  const preco = Number(
    element.querySelector('.produto-preco').attributes.value.value
  );

  bebidaPedido = { nome, preco };

  trocarBotao();
}

function adicionarSobremesaCarrinho(element) {
  sobremesasElement.forEach((sobremesa) =>
    sobremesa.classList.remove('selecionado')
  );

  element.classList.add('selecionado');
  sobremesaSelecionado = true;

  const nome = element.querySelector('.produto-nome').textContent;
  const preco = Number(
    element.querySelector('.produto-preco').attributes.value.value
  );

  sobremesaPedido = { nome, preco };

  trocarBotao();
}

function trocarBotao() {
  // se 3 produtos selecionados, troca o botão e habilita
  const botao = document.getElementById('fechar-pedido');
  if (pratoSelecionado && bebidaSelecionado && sobremesaSelecionado) {
    botao.innerText = 'Fechar pedido';
    botao.classList.add('btn-fechar-pedido');
    botao.classList.remove('disabled');
  } else {
    botao.classList.add('disabled');
    return;
  }
}

// fechar pedido e abrir modal de confirmação
function fecharPedido(botao) {
  if (botao.classList.contains('disabled')) {
    return;
  }
  botao.classList.remove('disabled');
  abrirModal();
}

function confirmarPedido() {
  const nome = prompt('Qual seu nome?');
  const endereco = prompt('Qual endereço de entrega?');

  const mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${pratoPedido.nome}
- Bebida: ${bebidaPedido.nome}
- Sobremesa: ${sobremesaPedido.nome}
Total: R$ ${valorPedidoTotal.toFixed(2)}
  
Nome: ${nome}
Endereço: ${endereco}`;

  const mensagemFormatada = encodeURIComponent(mensagem);

  window.open(`https://wa.me/5591980448461?text=${mensagemFormatada}`);
}

// modal
function abrirModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('modal-aberto');

  // prato
  const pratoElement = document.getElementById('modal-prato');
  const pratoNomeElement = pratoElement.children[0];
  const pratoprecoElement = pratoElement.children[1];

  const precoPratoFormatado = pratoPedido.preco.toFixed(2).replace('.', ',');

  pratoNomeElement.textContent = pratoPedido.nome;
  pratoprecoElement.textContent = precoPratoFormatado;
  valorPedidoTotal += pratoPedido.preco;

  // bebidas
  const bebidaElement = document.getElementById('modal-bebida');
  const bebidaNomeElement = bebidaElement.children[0];
  const bebidaprecoElement = bebidaElement.children[1];

  const precoBebidaFormatado = bebidaPedido.preco.toFixed(2).replace('.', ',');

  bebidaNomeElement.textContent = bebidaPedido.nome;
  bebidaprecoElement.textContent = precoBebidaFormatado;
  valorPedidoTotal += bebidaPedido.preco;

  // prato
  const sobremesaElement = document.getElementById('modal-sobremesa');
  const sobremesaNomeElement = sobremesaElement.children[0];
  const sobremesaprecoElement = sobremesaElement.children[1];

  const precoSobremesaFormatado = sobremesaPedido.preco
    .toFixed(2)
    .replace('.', ',');

  sobremesaNomeElement.textContent = sobremesaPedido.nome;
  sobremesaprecoElement.textContent = precoSobremesaFormatado;
  valorPedidoTotal += sobremesaPedido.preco;

  // total
  const totalPedidoElement = document.getElementById('modal-total-pedido');
  const valorTotalElement = totalPedidoElement.children[1];

  const precoTotalFormatado = valorPedidoTotal.toFixed(2).replace('.', ',');

  valorTotalElement.textContent = 'R$ ' + precoTotalFormatado;
}

function fecharModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('modal-aberto');

  valorPedidoTotal = 0;
}
