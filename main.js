// ... (funções removerItem e adicionarItem - você precisará implementar)

// Função para adicionar uma linha ao histórico
function adicionarAoHistorico(tag, descricao, quantidade, acao) {
    let tabelaHistorico = document.getElementById('historicoAlteracoes');
    let novaLinha = tabelaHistorico.insertRow();
    let dataHora = new Date().toLocaleString(); // Data e hora atual

    novaLinha.insertCell().textContent = dataHora;
    novaLinha.insertCell().textContent = tag;
    novaLinha.insertCell().textContent = descricao;
    novaLinha.insertCell().textContent = quantidade;
    novaLinha.insertCell().textContent = acao;
}

// Função para atualizar o estoque e o histórico
function atualizarEstoque(tag, descricao, quantidade, acao) {
    // ... (sua lógica para atualizar a tabela estoqueAtual)

    adicionarAoHistorico(tag, descricao, quantidade, acao); // Adiciona ao histórico
}

// ... (resto do seu código - carregarDados, salvarDados, etc.)
