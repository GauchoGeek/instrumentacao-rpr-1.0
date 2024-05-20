document.getElementById('formAdicionar').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var descricao = document.getElementById('descricao').value;
    var tag = document.getElementById('tag').value;
    
    var table = document.getElementById('instrumentTable');
    var newRow = table.insertRow();
    
    var descricaoCell = newRow.insertCell(0);
    var tagCell = newRow.insertCell(1);
    
    descricaoCell.innerHTML = descricao;
    tagCell.innerHTML = tag;
    
    document.getElementById('descricao').value = '';
    document.getElementById('tag').value = '';
});

document.getElementById('formRemover').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var tagToRemove = document.getElementById('removerTag').value;
    
    var rows = document.getElementById('instrumentTable').getElementsByTagName('tr');
    for (var i = 1; i < rows.length; i++) {
        var tagCell = rows[i].getElementsByTagName('td')[1];
        if (tagCell.innerHTML == tagToRemove) {
            rows[i].parentNode.removeChild(rows[i]);
            break;
        }
    }
    
    document.getElementById('removerTag').value = '';
});
