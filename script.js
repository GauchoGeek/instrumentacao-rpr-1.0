document.getElementById('adicionar').addEventListener('click', function() {
    var tag = document.getElementById('tag').value;
    var descricao = document.getElementById('descricao').value;
    var quantidade = document.getElementById('quantidade').value;
    
    if (tag && descricao) {
        var li = document.createElement('li');
        
        // Cria a estrutura do item
        var itemHTML = '<strong>' + tag + '</strong> - ' + descricao + ' <span class="quantity">(' + quantidade + ')</span>';
        
        // Adiciona os botões de remover e atualizar quantidade
        itemHTML += ' <button class="remove-btn">Remover</button> <button class="update-quantity-btn">Atualizar Quantidade</button>';
        
        li.innerHTML = itemHTML;
        
        // Adiciona o item à lista
        var instrumentList = document.getElementById('instrumentList');
        instrumentList.appendChild(li);
        
        // Adiciona o evento de clique para o botão remover
        li.querySelector('.remove-btn').addEventListener('click', function() {
            li.remove();
        });
        
        // Adiciona o evento de clique para o botão atualizar quantidade
        li.querySelector('.update-quantity-btn').addEventListener('click', function() {
            var newQuantity = prompt('Digite a nova quantidade:', quantidade);
            if (newQuantity !== null && !isNaN(newQuantity) && newQuantity > 0) {
                li.querySelector('.quantity').textContent = '(' + newQuantity + ')'; // Atualiza a quantidade em tempo real
            }
        });
        
        // Limpa os campos de entrada
        document.getElementById('tag').value = '';
        document.getElementById('descricao').value = '';
        document.getElementById('quantidade').value = '1';
    }
});
