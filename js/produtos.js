/*
Descricao: Situação de Aprendizagem 02 - Sistema de Estoque (Mercado Cesta Cheia)
nome_arquivo: produtos.js
nome_exercicio: Situação de Aprendizagem 02 - Login, Perfil e Consulta
nome_aluno: Pedro Henrique de Sousa Martins
email_aluno: pedro.martins55@aluno.cps.sp.gov.br
turma: A1129-N-D.S.M.-312-20262
*/

if (sessionStorage.getItem("usuario") == null) {
    window.location.href = "index.html";
}

var produtosIniciais = [
    { codigo: "001", nome: "Maçã", categoria: "Hortifruti", quantidade: 120, unidade: "kg", preco: 8.99, imagem: "maca.svg" },
    { codigo: "002", nome: "Banana", categoria: "Hortifruti", quantidade: 15, unidade: "kg", preco: 5.49, imagem: "banana.svg" },
    { codigo: "003", nome: "Tomate", categoria: "Hortifruti", quantidade: 80, unidade: "kg", preco: 7.49, imagem: "tomate.svg" },
    { codigo: "004", nome: "Cenoura", categoria: "Hortifruti", quantidade: 0, unidade: "kg", preco: 4.99, imagem: "cenoura.svg" },
    { codigo: "005", nome: "Arroz 5 kg", categoria: "Mercearia", quantidade: 45, unidade: "un", preco: 27.90, imagem: "arroz.svg" },
    { codigo: "006", nome: "Feijão 1 kg", categoria: "Mercearia", quantidade: 8, unidade: "un", preco: 8.49, imagem: "feijao.svg" },
    { codigo: "007", nome: "Café 500 g", categoria: "Mercearia", quantidade: 30, unidade: "un", preco: 18.90, imagem: "cafe.svg" },
    { codigo: "008", nome: "Açúcar 1 kg", categoria: "Mercearia", quantidade: 0, unidade: "un", preco: 4.79, imagem: "acucar.svg" },
    { codigo: "009", nome: "Ovos (dúzia)", categoria: "Mercearia", quantidade: 25, unidade: "un", preco: 12.90, imagem: "ovos.svg" },
    { codigo: "010", nome: "Leite Integral 1 L", categoria: "Laticínios", quantidade: 60, unidade: "un", preco: 4.79, imagem: "leite.svg" },
    { codigo: "011", nome: "Queijo Mussarela", categoria: "Laticínios", quantidade: 6, unidade: "kg", preco: 44.90, imagem: "queijo.svg" },
    { codigo: "012", nome: "Pão Francês", categoria: "Padaria", quantidade: 200, unidade: "un", preco: 0.75, imagem: "pao.svg" }
];

function carregarProdutos() {
    if (localStorage.getItem("produtos") == null) {
        localStorage.setItem("produtos", JSON.stringify(produtosIniciais));
    }

    return JSON.parse(localStorage.getItem("produtos"));
}

function salvarProdutos(lista) {
    localStorage.setItem("produtos", JSON.stringify(lista));
}

function formatarPreco(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}

function classeSituacao(quantidade) {
    if (quantidade == 0) {
        return "esgotado";
    }

    if (quantidade <= 15) {
        return "baixo";
    }

    return "ok";
}

function textoSituacao(quantidade) {
    if (quantidade == 0) {
        return "Esgotado";
    }

    if (quantidade <= 15) {
        return "Estoque baixo";
    }

    return "Em estoque";
}
