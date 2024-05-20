// script.js
const tagInput = document.getElementById('tag');
const descricaoInput = document.getElementById('descricao');
const quantidadeInput = document.getElementById('quantidade');
const adicionarButton = document.getElementById('adicionar');
const instrumentList = document.getElementById('instrumentList');

adicionarButton.addEventListener('click', () => {
  const tag = tagInput.value;
  const descricao = descricaoInput.value;
  const quantidade = parseInt(quantidadeInput.value, 10);

  if (tag && descricao && quantidade) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="tag">${tag}</span> -
      <span class="descricao">${descricao}</span> -
      <span class="quantidade">Quantidade: ${quantidade}</span>
      <button class="remover">Remover</button>
      <button class="atualizar">Atualizar Quantidade</button>
    `;
    instrumentList.appendChild(listItem);

    // Limpar campos de entrada
    tagInput.value = '';
    descricaoInput.value = '';
    quantidadeInput.value = '1';

    // Adicionar evento de clique para remover o item
    listItem.querySelector('.remover').addEventListener('click', () => {
      instrumentList.removeChild(listItem);
    });

    // Adicionar evento de clique para atualizar a quantidade
    listItem.querySelector('.atualizar').addEventListener('click', () => {
      const novaQuantidade = prompt("Digite a nova quantidade:", quantidade);
      if (novaQuantidade !== null && !isNaN(novaQuantidade)) {
        listItem.querySelector('.quantidade').textContent = `Quantidade: ${parseInt(novaQuantidade, 10)}`;
      }
    });
  } else {
    alert("Por favor, preencha todos os campos!");
  }
});
