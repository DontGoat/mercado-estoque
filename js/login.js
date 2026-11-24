/*
Descricao: Situação de Aprendizagem 02 - Sistema de Estoque (Mercado Cesta Cheia)
nome_arquivo: login.js
nome_exercicio: Situação de Aprendizagem 02 - Login, Perfil e Consulta
nome_aluno: Pedro Henrique de Sousa Martins
email_aluno: pedro.martins55@aluno.cps.sp.gov.br
turma: A1129-N-D.S.M.-312-20262
*/

var emailCorreto = "pedro@cestacheia.com";
var senhaCorreta = "123456";

sessionStorage.removeItem("usuario");

function mostrarMensagem(texto, tipo) {
    var mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
}

document.getElementById("formLogin").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value;

    if (email == "") {
        mostrarMensagem("Preencha o e-mail.", "erro");
        return;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        mostrarMensagem("Digite um e-mail válido.", "erro");
        return;
    }

    if (senha == "") {
        mostrarMensagem("Preencha a senha.", "erro");
        return;
    }

    if (senha.length < 6) {
        mostrarMensagem("A senha deve ter pelo menos 6 caracteres.", "erro");
        return;
    }

    if (email != emailCorreto || senha != senhaCorreta) {
        mostrarMensagem("E-mail ou senha incorretos.", "erro");
        return;
    }

    sessionStorage.setItem("usuario", "Pedro");
    mostrarMensagem("Login realizado! Entrando...", "sucesso");
    window.location.href = "perfil.html";
});
