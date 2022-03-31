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
}

function adicionarBebidaCarrinho(element) {
  bebidasElement.forEach((bebida) => bebida.classList.remove('selecionado'));

  element.classList.add('selecionado');
  bebidaSelecionado = true;

  const nome = element.children[1].textContent;
  const preco = Number(element.children[3].attributes.value.value);

  bebidaPedido = { nome, preco };
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
}
