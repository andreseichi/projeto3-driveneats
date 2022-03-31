// pratos
let pratosElement = document.querySelectorAll('.prato');
let pratoSelecionado = false;
let pratoValor = {};

// bebidas
let bebidasElement = document.querySelectorAll('.bebida');
let bebidaSelecionado = false;
let bebidaValor = {};

// sobremesas
let sobremesasElement = document.querySelectorAll('.sobremesa');
let sobremesaSelecionado = false;
let sobremesaValor = {};

// Adicionar seus respectivos eventos de click
pratosElement.forEach(adicionarEventoClickPratos);
bebidasElement.forEach(adicionarEventoClickBebidas);
sobremesasElement.forEach(adicionarEventoClickSobremesas);

function adicionarEventoClickPratos(element) {
  element.addEventListener('click', () => AdicionarPratoCarrinho(element));
}

function adicionarEventoClickBebidas(element) {
  element.addEventListener('click', () => AdicionarBebidaCarrinho(element));
}

function adicionarEventoClickSobremesas(element) {
  element.addEventListener('click', () => AdicionarSobremesaCarrinho(element));
}

// Funções de adicionar os produtos no carrinho
function AdicionarPratoCarrinho(element) {
  pratosElement.forEach((prato) => prato.classList.remove('selecionado'));

  element.classList.add('selecionado');
  pratoSelecionado = true;

  const nome = element.children[1].textContent;
  const preco = Number(element.children[3].attributes.value.value);

  pratoValor = { nome, preco };
  console.log(pratoValor);
}

function AdicionarBebidaCarrinho(element) {
  bebidasElement.forEach((bebida) => bebida.classList.remove('selecionado'));

  element.classList.add('selecionado');
  bebidaSelecionado = true;

  const nome = element.children[1].textContent;
  const preco = Number(element.children[3].attributes.value.value);

  bebidaValor = { nome, preco };
  console.log(bebidaValor);
}

function AdicionarSobremesaCarrinho(element) {
  sobremesasElement.forEach((sobremesa) =>
    sobremesa.classList.remove('selecionado')
  );

  element.classList.add('selecionado');
  sobremesaSelecionado = true;

  const nome = element.children[1].textContent;
  const preco = Number(element.children[3].attributes.value.value);

  sobremesaValor = { nome, preco };
  console.log(sobremesaValor);
}
