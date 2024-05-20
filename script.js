// Função para salvar os dados no localStorage
function saveData(data) {
    localStorage.setItem('instrumentsData', JSON.stringify(data));
}

// Função para carregar os dados do localStorage
function loadData() {
    return localStorage.getItem('instrumentsData') ? JSON.parse(localStorage.getItem('instrumentsData')) : [];
}
// Função para adicionar um novo instrumento ou atualizar a quantidade
function addInstrument(tag, descricao, quantidade) {
    let instrumentsData = loadData();
    let existingIndex = instrumentsData.findIndex(item => item.tag === tag);
    
    if (existingIndex !== -1) {
        // Atualiza a quantidade se o item já existir
        instrumentsData[existingIndex].quantidade += quantidade;
    } else {
        // Adiciona um novo item
        instrumentsData.push({ tag, descricao, quantidade });
    }
    
    saveData(instrumentsData);
    displayInstrumentsList(instrumentsData);
}

// Função para remover um instrumento
function removeInstrument(tag) {
    let instrumentsData = loadData();
    let updatedData = instrumentsData.filter(item => item.tag !== tag);
    saveData(updatedData);
    displayInstrumentsList(updatedData);
}

document.addEventListener('DOMContentLoaded', function() {
    var instrumentsData = loadDataFromLocalStorage();
    displayInstrumentsList(instrumentsData);
});
// Função para atualizar a quantidade de um instrumento
function updateQuantity(tag, novaQuantidade) {
    let instrumentsData = loadData();
    let index = instrumentsData.findIndex(item => item.tag === tag);
    if (index !== -1) {
        instrumentsData[index].quantidade = novaQuantidade;
        saveData(instrumentsData);
        displayInstrumentsList(instrumentsData);
    }
}

// Função para exibir a lista de instrumentos
function displayInstrumentsList(data) {
    const instrumentList = document.getElementById('instrumentList');
    instrumentList.innerHTML = '';

    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="tag">${item.tag}</span> -
            <span class="descricao">${item.descricao}</span> -
            <span class="quantidade">Quantidade: ${item.quantidade}</span>
            <button class="remover" data-tag="${item.tag}">Remover</button>
            <button class="atualizar" data-tag="${item.tag}">Atualizar Quantidade</button>
        `;
        instrumentList.appendChild(listItem);

        // Adicionar evento de clique para remover o item
        listItem.querySelector('.remover').addEventListener('click', function() {
            removeInstrument(this.dataset.tag);
        });

        // Adicionar evento de clique para atualizar a quantidade
        listItem.querySelector('.atualizar').addEventListener('click', function() {
            const newQuantity = prompt("Digite a nova quantidade:", item.quantidade);
            if (newQuantity !== null && !isNaN(newQuantity)) {
                updateQuantity(item.tag, parseInt(newQuantity, 10));
            }
        });
    });
}
