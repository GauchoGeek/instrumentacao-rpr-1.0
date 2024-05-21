// ... (código JavaScript anterior) ...

function abrirPaginaManometros() {
  window.open('manometros.html', '_blank'); // Abre uma nova página em branco
}

function adicionarItem() {
    const descricao = document.getElementById("descricaoInput").value;
    const quantidade = document.getElementById("quantidadeInput").value;
    const manutencao = document.getElementById("manutencaoInput").value;
    
    const novoItem = {
        descricao,
        quantidade,
        manutencao
    };
    
    estoque.push(novoItem);
    atualizarTabela();

    // Limpar os campos de entrada após adicionar
    document.getElementById("descricaoInput").value = "";
    document.getElementById("quantidadeInput").value = "1";
    document.getElementById("manutencaoInput").value = "";
}

// ... (resto do código JavaScript) ...
