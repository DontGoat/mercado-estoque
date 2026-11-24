/*
Descricao: Situação de Aprendizagem 02 - Sistema de Estoque (Mercado Cesta Cheia)
nome_arquivo: gerenciar.js
nome_exercicio: Situação de Aprendizagem 02 - Login, Perfil e Consulta
nome_aluno: Pedro Henrique de Sousa Martins
email_aluno: pedro.martins55@aluno.cps.sp.gov.br
turma: A1129-N-D.S.M.-312-20262
*/

var produtos = carregarProdutos();
var produtoSelecionado = document.getElementById("produtoSelecionado");
var infoProduto = document.getElementById("infoProduto");

function mostrarMensagem(id, texto, tipo) {
    var mensagem = document.getElementById(id);
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
}

function montarLista() {
    produtoSelecionado.innerHTML = "";

    for (var i = 0; i < produtos.length; i++) {
        var opcao = document.createElement("option");
        opcao.value = i;
        opcao.textContent = produtos[i].codigo + " - " + produtos[i].nome;
        produtoSelecionado.appendChild(opcao);
    }

    mostrarInfo();
}

function mostrarInfo() {
    var produto = produtos[produtoSelecionado.value];
    infoProduto.textContent = "Estoque atual: " + produto.quantidade + " " + produto.unidade + " | Preço atual: " + formatarPreco(produto.preco);
}

produtoSelecionado.addEventListener("change", mostrarInfo);

document.getElementById("formAtualizar").addEventListener("submit", function (event) {
    event.preventDefault();

    var produto = produtos[produtoSelecionado.value];
    var quantidade = document.getElementById("quantidadeAdicionar").value;
    var preco = document.getElementById("novoPreco").value;

    if (quantidade == "" && preco == "") {
        mostrarMensagem("msgAtualizar", "Informe uma quantidade ou um novo preço.", "erro");
        return;
    }

    if (quantidade != "" && Number(quantidade) < 0) {
        mostrarMensagem("msgAtualizar", "A quantidade não pode ser negativa.", "erro");
        return;
    }

    if (preco != "" && Number(preco) <= 0) {
        mostrarMensagem("msgAtualizar", "O preço deve ser maior que zero.", "erro");
        return;
    }

    if (quantidade != "") {
        produto.quantidade = produto.quantidade + Number(quantidade);
    }

    if (preco != "") {
        produto.preco = Number(preco);
    }

    salvarProdutos(produtos);
    document.getElementById("quantidadeAdicionar").value = "";
    document.getElementById("novoPreco").value = "";
    mostrarInfo();
    mostrarMensagem("msgAtualizar", "Produto " + produto.nome + " atualizado com sucesso!", "sucesso");
});

document.getElementById("formNovo").addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("nomeProduto").value.trim();
    var categoria = document.getElementById("categoriaProduto").value;
    var unidade = document.getElementById("unidadeProduto").value;
    var quantidade = document.getElementById("quantidadeProduto").value;
    var preco = document.getElementById("precoProduto").value;

    if (nome == "") {
        mostrarMensagem("msgNovo", "Preencha o nome do produto.", "erro");
        return;
    }

    if (categoria == "") {
        mostrarMensagem("msgNovo", "Selecione a categoria.", "erro");
        return;
    }

    if (quantidade == "" || Number(quantidade) < 0) {
        mostrarMensagem("msgNovo", "Digite uma quantidade válida.", "erro");
        return;
    }

    if (preco == "" || Number(preco) <= 0) {
        mostrarMensagem("msgNovo", "Digite um preço maior que zero.", "erro");
        return;
    }

    var codigo = String(produtos.length + 1).padStart(3, "0");

    produtos.push({
        codigo: codigo,
        nome: nome,
        categoria: categoria,
        quantidade: Number(quantidade),
        unidade: unidade,
        preco: Number(preco),
        imagem: "sem-imagem.svg"
    });

    salvarProdutos(produtos);
    montarLista();
    this.reset();
    mostrarMensagem("msgNovo", "Produto " + nome + " cadastrado com o código " + codigo + "!", "sucesso");
});

document.getElementById("btnRestaurar").addEventListener("click", function () {
    localStorage.removeItem("produtos");
    produtos = carregarProdutos();
    montarLista();
    mostrarMensagem("msgRestaurar", "Estoque restaurado!", "sucesso");
});

montarLista();
