// Função para criar item
function criarItem() {
        const tag = document.getElementById("tag").value;
        const quantidade = document.getElementById("quantidade").value;
        const descricao = document.getElementById("descricao").value;
        constestoque = JSON.parse(localStorage.getItem("estoque")) || [];
        estoque.push({ tag, quantidade, descricao });
        localStorage.setItem("estoque", JSON.stringify(estoque));
        document.getElementById("criar-item-modal").style.display = "none";
        document.getElementById("estoque-tbody").innerHTML = "";
        estoque.forEach((item) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                        <td>${item.tag}</td>
                        <td>${item.quantidade}</td>
                        <td>${item.descricao}</td>
                        <td>
                                <button onclick="editarItem(${item.tag})">Editar</button>
                                <button onclick="deletarItem(${item.tag})">Excluir</button>
                        </td>
                `;
                document.getElementById("estoque-tbody").appendChild(tr);
        });
}

// Função para editar item
function editarItem(tag) {
        const estoque = JSON.parse(localStorage.getItem("estoque")) || [];
        const item = estoque.find((item) => item.tag === tag);
        if (item) {
                document.getElementById("tag").value = item.tag;
                document.getElementById("quantidade").value = item.quantidade;
                document.getElementById("descricao").value = item.descricao;
                document.getElementById("criar-item-modal").style.display = "block";
        }
}
// Função para deletar item
function deletarItem(tag) {
  const estoque = JSON.parse(localStorage.getItem("estoque")) || [];
  estoque = estoque.filter((item) => item.tag !== tag);
  localStorage.setItem("estoque", JSON.stringify(estoque));
  document.getElementById("estoque-tbody").innerHTML = "";
  estoque.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.tag}</td>
      <td>${item.quantidade}</td>
      <td>${item.descricao}</td>
      <td>
        <button onclick="editarItem(${item.tag})">Editar</button>
        <button onclick="deletarItem(${item.tag})">Excluir</button>
      </td>
    `;
    document.getElementById("estoque-tbody").appendChild(tr);
  });
}

// Adicione um evento de clique para o botão de criar item
document.getElementById("criar-item-btn").addEventListener("click", () => {
  document.getElementById("criar-item-modal").style.display = "block";
});

// Adicione um evento de clique para o botão de criar item modal
document.getElementById("criar-item-btn-modal").addEventListener("click", criarItem);
