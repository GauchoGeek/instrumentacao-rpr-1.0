let estoque = []; // Inicializa o array de estoque

function filtrarEstoque() {
    // ... (seu código de filtro existente) ...
}

function abrirPaginaManometros() {
    window.open('manometros.html', '_blank'); // Abre o arquivo manometros.html em uma nova aba
}

function adicionarItem() {
    const descricao = document.getElementById("descricaoInput").value;
    const quantidade = parseInt(document.getElementById("quantidadeInput").value, 10); // Converte para número inteiro
    const manutencao = document.getElementById("manutencaoInput").value;

    if (descricao.trim() === "" || isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const novoItem = {
        descricao,
        quantidade,
        manutencao
    };

    estoque.push(novoItem);
    atualizarTabela();

    // Limpar os campos de entrada
    document.getElementById("descricaoInput").value = "";
    document.getElementById("quantidadeInput").value = "1";
    document.getElementById("manutencaoInput").value = "";
}

function atualizarTabela() {
    const tabela = document.getElementById("estoqueTable");
    tabela.innerHTML = `
        <tr>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Manutenção</th>
            <th>Ações</th>
        </tr>
    `;

    estoque.forEach((item, index) => {
        const novaLinha = tabela.insertRow();
        novaLinha.insertCell().textContent = item.descricao;
        novaLinha.insertCell().textContent = item.quantidade;
        novaLinha.insertCell().textContent = item.manutencao;
        // ... (seu código para adicionar botões de editar/excluir) ...
    });
}

atualizarTabela(); // Chama a função para inicializar a tabela vazia
