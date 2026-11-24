/*
Descricao: Situação de Aprendizagem 02 - Sistema de Estoque (Mercado Cesta Cheia)
nome_arquivo: estoque.js
nome_exercicio: Situação de Aprendizagem 02 - Login, Perfil e Consulta
nome_aluno: Pedro Henrique de Sousa Martins
email_aluno: pedro.martins55@aluno.cps.sp.gov.br
turma: A1129-N-D.S.M.-312-20262
*/

if (sessionStorage.getItem("usuario") == null) {
    window.location.href = "index.html";
}

var pesquisa = document.getElementById("pesquisa");
var categoria = document.getElementById("categoria");
var resultado = document.getElementById("resultado");
var linhas = document.querySelectorAll("#tabelaEstoque tbody tr");

function filtrarTabela() {
    var termo = pesquisa.value.toLowerCase();
    var categoriaEscolhida = categoria.value;
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
