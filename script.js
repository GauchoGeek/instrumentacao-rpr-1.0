const estoqueTable = document.getElementById("estoqueTable");
const descInput = document.getElementById("descInput");
const quantInput = document.getElementById("quantInput");
const manutInput = document.getElementById("manutInput");

let estoque = JSON.parse(localStorage.getItem("estoque")) || [];
renderTable(); // Chame renderTable ao carregar a página

function addItem() {
    const newItem = {
        descricao: descInput.value,
        quantidade: quantInput.value,
        manutencao: manutInput.value
    };
    estoque.push(newItem);
    localStorage.setItem("estoque", JSON.stringify(estoque));
    renderTable(); // Atualize a tabela após adicionar o item
    clearInputs();
}

function renderTable() {
    estoqueTable.innerHTML = `<tr><th>Descrição</th><th>Quantidade</th><th>Opções de Manutenção</th><th>Ações</th></tr>`; 
    estoque.forEach((item, index) => {
        const row = estoqueTable.insertRow();
        row.insertCell().textContent = item.descricao;
        row.insertCell().textContent = item.quantidade;
        row.insertCell().textContent = item.manutencao;

        const actionsCell = row.insertCell();
        actionsCell.innerHTML = `
            <button onclick="removeItem(${index})">Remover</button>
            <button onclick="editItem(${index})">Editar</button>
        `;
    });
}

function removeItem(index) {
    estoque.splice(index, 1);
    localStorage.setItem("estoque", JSON.stringify(estoque));
    renderTable(); // Atualize a tabela após remover o item
}

function editItem(index) {
    // Lógica para editar o item... (a implementar)
}

function clearInputs() {
    descInput.value = "";
    quantInput.value = "";
    manutInput.value = "";
}
