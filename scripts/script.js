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

  const nome = element.children[1].textContent;
  const preco = Number(element.children[3].attributes.value.value);

  pratoPedido = { nome, preco };

  trocarBotao();
}

function adicionarBebidaCarrinho(element) {
  bebidasElement.forEach((bebida) => bebida.classList.remove('selecionado'));

  element.classList.add('selecionado');
  bebidaSelecionado = true;

  const nome = element.children[1].textContent;
  const preco = Number(element.children[3].attributes.value.value);

  bebidaPedido = { nome, preco };

  trocarBotao();
}

function adicionarSobremesaCarrinho(element) {
  sobremesasElement.forEach((sobremesa) =>
    sobremesa.classList.remove('selecionado')
  );

  element.classList.add('selecionado');
  sobremesaSelecionado = true;

  const nome = element.children[1].textContent;
  const preco = Number(element.children[3].attributes.value.value);

  sobremesaPedido = { nome, preco };

  trocarBotao();
}

function trocarBotao() {
  if (pratoSelecionado && bebidaSelecionado && sobremesaSelecionado) {
    const botao = document.getElementById('fechar-pedido');

    botao.innerText = 'Fechar pedido';
    botao.classList.add('btn-fechar-pedido');
    botao.disabled = false;
  } else {
    return;
  }
}

function fecharPedido() {
  abrirModal();
}

function abrirModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('modal-aberto');
}
