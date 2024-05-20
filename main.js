// Funções para manipular a tabela (adicionar/remover itens)
function removerItem(botao) {
    // Lógica para remover a linha da tabela (você precisará implementar)
}

function adicionarItem(botao) {
    // Lógica para adicionar uma nova linha na tabela (você precisará implementar)
}

// Função para salvar os dados no LocalStorage
function salvarDados() {
    let dados = [];
    let linhas = document.querySelectorAll('table tr');

    for (let i = 1; i < linhas.length; i++) { // Começa em 1 para ignorar o cabeçalho
        let linha = linhas[i];
        let tag = linha.cells[0].textContent;
        let descricao = linha.cells[1].firstChild.value; // Valor do input da descrição
        let quantidade = linha.cells[2].firstChild.value; // Valor do input da quantidade

        dados.push({tag, descricao, quantidade});
    }

    localStorage.setItem('estoque', JSON.stringify(dados));
}

// Função para carregar os dados do LocalStorage
function carregarDados() {
    let dados = JSON.parse(localStorage.getItem('estoque')) || [];

    let tabela = document.querySelector('table');
    for (let item of dados) {
        let novaLinha = tabela.insertRow();
        novaLinha.insertCell().textContent = item.tag;
        novaLinha.insertCell().innerHTML = `<input type="text" value="${item.descricao}">`;
        novaLinha.insertCell().innerHTML = `<input type="number" value="${item.quantidade}">`;
        // ... (células para os botões)
    }
}
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

// Chame a função carregarDados ao carregar a página
carregarDados();

// Salve os dados antes de atualizar a página (F5)
window.onbeforeunload = salvarDados;
