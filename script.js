const estoqueTable = document.getElementById("estoqueTable");
const descInput = document.getElementById("descInput");
const quantInput = document.getElementById("quantInput");
const manutInput = document.getElementById("manutInput");

// Carregar dados do LocalStorage ao iniciar
let estoque = JSON.parse(localStorage.getItem("estoque")) || [];
renderTable();

function addItem() {
    const newItem = {
        descricao: descInput.value,
        quantidade: quantInput.value,
        manutencao: manutInput.value
    };
    estoque.push(newItem);
    localStorage.setItem("estoque", JSON.stringify(estoque));
    renderTable();
    clearInputs();
}

function renderTable() {
    estoqueTable.innerHTML = `<tr><th>Descrição</th><th>Quantidade</th><th>Opções de Manutenção</th></tr>`;
    estoque.forEach((item, index) => {
        const row = estoqueTable.insertRow();
        row.insertCell().textContent = item.descricao;
        row.insertCell().textContent = item.quantidade;
        row.insertCell().textContent = item.manutencao;
    });
}

function clearInputs() {
    descInput.value = "";
    quantInput.value = "";
    manutInput.value = "";
}
