// script.js
// Função para obter os dados do estoque da API ou banco de dados
function getInventoryData() {
  // Implemente a lógica para obter os dados do estoque
  // e retorne um array com os itens do estoque
}

// Função para exibir os dados do estoque na tabela
function displayInventoryData() {
  const inventoryTable = document.getElementById('inventoryTable');
  const inventoryData = getInventoryData();

  inventoryData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>
        <button onclick="updateQuantity(${item.id}, 1)">+</button>
        <button onclick="updateQuantity(${item.id}, -1)">-</button>
      </td>
    inventoryTable.querySelector('tbody').appendChild(row);
  });
}

// Função para atualizar a quantidade de um item do estoque
function updateQuantity(itemId, amount) {
  // Implemente a lógica para atualizar a quantidade do item no servidor
  // e atualize a tabela do estoque em tempo real
}

// Função para salvar os dados do estoque ao atualizar a página
function saveInventoryData() {
  const inventoryData = getInventoryData();
  localStorage.setItem('inventoryData', JSON.stringify(inventoryData));
}

// Carrega os dados do estoque ao carregar a página
window.onload = function() {
  displayInventoryData();
};

// Salva os dados do estoque ao atualizar a página
window.onbeforeunload = function() {
  saveInventoryData();
};
``
