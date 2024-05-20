// Função para salvar os dados no localStorage
function saveDataToLocalStorage(data) {
    localStorage.setItem('instrumentsData', JSON.stringify(data));
}

// Função para carregar os dados do localStorage
function loadDataFromLocalStorage() {
    var data = localStorage.getItem('instrumentsData');
    if (data) {
        return JSON.parse(data);
    }
    return [];
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
    var instrumentList = document.getElementById('instrumentList');
    instrumentList.innerHTML = '';
    
    data.forEach(function(item) {
        var li = document.createElement('li');
        var itemHTML = '<strong>' + item.tag + '</strong> - ' + item.descricao + ' <span class="quantity">(' + item.quantidade + ')</span>';
        itemHTML += ' <button class="remove-btn" data-tag="' + item.tag + '">Remover</button> <button class="update-quantity-btn" data-tag="' + item.tag + '">Atualizar Quantidade</button>';
        li.innerHTML = itemHTML;
        
        // Adiciona o evento de clique para o botão remover
        li.querySelector('.remove-btn').addEventListener('click', function() {
            removeInstrument(this.dataset.tag);
        });
        
        // Adiciona o evento de clique para o botão atualizar quantidade
        li.querySelector('.update-quantity-btn').addEventListener('click', function() {
            updateQuantity(this.dataset.tag);
        });
        
        instrumentList.appendChild(li);
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
    var newQuantity = prompt('Digite a nova quantidade:');
    if (newQuantity !== null && !isNaN(newQuantity) && newQuantity > 0) {
        var instrumentsData = loadDataFromLocalStorage();
        var index = instrumentsData.findIndex(item => item.tag === tag);
        if (index !== -1) {
            instrumentsData[index].quantidade = newQuantity;
            saveDataToLocalStorage(instrumentsData);
            displayInstrumentsList(instrumentsData);
        }
    }
}
// Chama a função para carregar os dados quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    var instrumentsData = loadDataFromLocalStorage();
    displayInstrumentsList(instrumentsData);
});

// Adiciona o evento de clique para o botão Adicionar
document.getElementById('adicionar').addEventListener('click', function() {
    var tag = document.getElementById('tag').value;
    var descricao = document.getElementById('descricao').value;
    var quantidade = document.getElementById('quantidade').value;
    
    if (tag && descricao) {
        addOrUpdateInstrument(tag, descricao, quantidade);
        
        // Limpa os campos de entrada
        document.getElementById('tag').value = '';
        document.getElementById('descricao').value = '';
        document.getElementById('quantidade').value = '1';
    }
});
