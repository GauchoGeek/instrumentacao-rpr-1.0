// Função para salvar os dados no localStorage
function saveDataToLocalStorage(data) {
    localStorage.setItem('instrumentsData', JSON.stringify(data));
}

// Função para carregar os dados do localStorage
function loadDataFromLocalStorage() {
    var data = localStorage.getItem('instrumentsData');
    return data ? JSON.parse(data) : [];
}

// Função para adicionar um novo item ou atualizar a quantidade
function addOrUpdateInstrument(tag, descricao, quantidade) {
    var instrumentsData = loadDataFromLocalStorage();
    var existingIndex = instrumentsData.findIndex(item => item.tag === tag);
    
    if (existingIndex !== -1) {
        // Atualiza a quantidade se o item já existir
        instrumentsData[existingIndex].quantidade = quantidade;
    } else {
        // Adiciona um novo item
        instrumentsData.push({ tag: tag, descricao: descricao, quantidade: quantidade });
    }
    
    saveDataToLocalStorage(instrumentsData);
    displayInstrumentsList(instrumentsData);
}

// Função para exibir a lista de instrumentos
function displayInstrumentsList(data) {
    instrumentList.innerHTML = '';
    
    data.forEach(function(item) {
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
            updateQuantity(this.dataset.tag);
        });
    });
}
// Função para remover um item
function removeInstrument(tag) {
    var instrumentsData = loadDataFromLocalStorage();
    var updatedData = instrumentsData.filter(item => item.tag !== tag);
    saveDataToLocalStorage(updatedData);
    displayInstrumentsList(updatedData);
}

// Função para atualizar a quantidade de um item
function updateQuantity(tag) {
    var novaQuantidade = prompt("Digite a nova quantidade:", quantidade);
    if (novaQuantidade !== null && !isNaN(novaQuantidade)) {
        var instrumentsData = loadDataFromLocalStorage();
        var index = instrumentsData.findIndex(item => item.tag === tag);
        if (index !== -1) {
            instrumentsData[index].quantidade = parseInt(novaQuantidade, 10);
            saveDataToLocalStorage(instrumentsData);
            displayInstrumentsList(instrumentsData);
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var instrumentsData = loadDataFromLocalStorage();
    displayInstrumentsList(instrumentsData);
});
// Adicionar evento de clique para o botão Adicionar
adicionarButton.addEventListener('click', () => {
    const tag = tagInput.value;
    const descricao = descricaoInput.value;
    const quantidade = parseInt(quantidadeInput.value, 10);

    if (tag && descricao && !isNaN(quantidade)) {
        addOrUpdateInstrument(tag, descricao, quantidade);
        
        // Limpar campos de entrada
        tagInput.value = '';
        descricaoInput.value = '';
        quantidadeInput.value = '1';
    } else {
        alert("Por favor, preencha todos os campos com dados válidos!");
    }
});
