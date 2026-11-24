/*
Descricao: Situação de Aprendizagem 02 - Sistema de Estoque (Mercado Cesta Cheia)
nome_arquivo: estoque.js
nome_exercicio: Situação de Aprendizagem 02 - Login, Perfil e Consulta
nome_aluno: Pedro Henrique de Sousa Martins
email_aluno: pedro.martins55@aluno.cps.sp.gov.br
turma: A1129-N-D.S.M.-312-20262
*/

var pesquisa = document.getElementById("pesquisa");
var categoria = document.getElementById("categoria");
var resultado = document.getElementById("resultado");
var corpoTabela = document.getElementById("corpoTabela");

function criarCelula(linha, texto) {
    var celula = document.createElement("td");
    celula.textContent = texto;
    linha.appendChild(celula);
    return celula;
}

function montarTabela() {
    var produtos = carregarProdutos();

    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i];
        var linha = document.createElement("tr");

        var imagem = document.createElement("img");
        imagem.src = "img/produtos/" + produto.imagem;
        imagem.alt = produto.nome;
        imagem.width = 40;
        imagem.height = 40;
        criarCelula(linha, "").appendChild(imagem);

        criarCelula(linha, produto.codigo);
        criarCelula(linha, produto.nome);
        criarCelula(linha, produto.categoria);
        criarCelula(linha, produto.quantidade + " " + produto.unidade);
        criarCelula(linha, formatarPreco(produto.preco));

        var situacao = document.createElement("span");
        situacao.className = "situacao " + classeSituacao(produto.quantidade);
        situacao.textContent = textoSituacao(produto.quantidade);
        criarCelula(linha, "").appendChild(situacao);

        corpoTabela.appendChild(linha);
    }
}

function filtrarTabela() {
    var termo = pesquisa.value.toLowerCase();
    var categoriaEscolhida = categoria.value;
    var linhas = corpoTabela.querySelectorAll("tr");
    var encontrados = 0;

    for (var i = 0; i < linhas.length; i++) {
        var textoLinha = linhas[i].textContent.toLowerCase();
        var categoriaLinha = linhas[i].cells[3].textContent;

        var combinaTexto = textoLinha.indexOf(termo) != -1;
        var combinaCategoria = categoriaEscolhida == "" || categoriaLinha == categoriaEscolhida;

        if (combinaTexto && combinaCategoria) {
            linhas[i].style.display = "";
            encontrados++;
        } else {
            linhas[i].style.display = "none";
        }
    }

    if (encontrados == 0) {
        resultado.textContent = "Nenhum produto encontrado.";
    } else {
        resultado.textContent = encontrados + " produto(s) encontrado(s).";
    }
}

pesquisa.addEventListener("input", filtrarTabela);
categoria.addEventListener("change", filtrarTabela);

document.getElementById("formPesquisa").addEventListener("submit", function (event) {
    event.preventDefault();
    filtrarTabela();
});

montarTabela();
filtrarTabela();
