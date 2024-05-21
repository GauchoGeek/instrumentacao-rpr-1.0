let estoque = [];

function carregarEstoque() {
  const estoqueTable = document.getElementById("estoqueTable");
  estoqueTable.innerHTML = `
    <tr>
      <th>Descrição</th>
      <th>Quantidade</th>
      <th>Manutenção</th>
      <th>Ações</th>
    </tr>
  `;

  for (let i = 0; i < estoque.length; i++) {
    const item = estoque[i];
    const row = estoqueTable.insertRow();
    row.insertCell().textContent = item.descricao;
    row.insertCell().textContent = item.quantidade;
    row.insertCell().textContent = item.manutencao;

    const acoesCell = row.insertCell();
    acoesCell.innerHTML = `
      <button onclick="editarItem(${i})">Editar</button>
      <button onclick="removerItem(${i})">Remover</button>
    `;
  }
}

function adicionarItem() {
  // ... (lógica para adicionar item, igual à resposta anterior) ...
  carregarEstoque(); // Recarrega a tabela após adicionar
}

function editarItem(index) {
  // ... (lógica para editar item) ...
  carregarEstoque(); // Recarrega a tabela após editar
}

function removerItem(index) {
  // ... (lógica para remover item) ...
  carregarEstoque(); // Recarrega a tabela após remover
}

function filtrarEstoque() {
  // ... (lógica para filtrar, igual à resposta anterior) ...
}

function abrirPaginaManometros() {
  // ... (lógica para abrir página de manômetros) ...
}

carregarEstoque(); // Carrega o estoque inicial
