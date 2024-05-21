const estoqueList = document.getElementById("estoqueList");
const descInput = document.getElementById("descInput");
const quantInput = document.getElementById("quantInput");
const manutInput = document.getElementById("manutInput");

let estoque = JSON.parse(localStorage.getItem("estoque")) || [];
renderList();

function addItem() {
    const newItem = {
        descricao: descInput.value,
        quantidade: quantInput.value,
        manutencao: manutInput.value
    };
    estoque.push(newItem);
    localStorage.setItem("estoque", JSON.stringify(estoque));
    renderList();
    clearInputs();
}

function renderList() {
    estoqueList.innerHTML = ""; 
    estoque.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item.descricao} - ${item.quantidade}
            <button onclick="removeItem(${index})">Remover</button>
            <button onclick="editItem(${index})">Editar</button>
        `;
        estoqueList.appendChild(listItem);
    });
}

function removeItem(index) {
    estoque.splice(index, 1);
    localStorage.setItem("estoque", JSON.stringify(estoque));
    renderList();
}

function editItem(index) {
    // Lógica para preencher o formulário com os dados do item e permitir a edição
    // ...
}

function clearInputs() {
    descInput.value = "";
    quantInput.value = "";
    manutInput.value = "";
}
