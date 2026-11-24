/*
Descricao: Situação de Aprendizagem 02 - Sistema de Estoque (Mercado Cesta Cheia)
nome_arquivo: perfil.js
nome_exercicio: Situação de Aprendizagem 02 - Login, Perfil e Consulta
nome_aluno: Pedro Henrique de Sousa Martins
email_aluno: pedro.martins55@aluno.cps.sp.gov.br
turma: A1129-N-D.S.M.-312-20262
*/

var usuario = sessionStorage.getItem("usuario");

if (usuario == null) {
    window.location.href = "index.html";
} else {
    document.getElementById("nomeUsuario").textContent = usuario;
    document.getElementById("nomeCompleto").textContent = sessionStorage.getItem("nome");
    document.getElementById("emailUsuario").textContent = sessionStorage.getItem("email");
}

function mostrarMensagem(texto, tipo) {
    var mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
}

var telefone = document.getElementById("telefone");

telefone.addEventListener("keyup", function () {
    var numeros = telefone.value.replace(/\D/g, "").substring(0, 11);

    if (numeros.length > 7) {
        telefone.value = "(" + numeros.substring(0, 2) + ") " + numeros.substring(2, 7) + "-" + numeros.substring(7);
    } else if (numeros.length > 2) {
        telefone.value = "(" + numeros.substring(0, 2) + ") " + numeros.substring(2);
    } else if (numeros.length > 0) {
        telefone.value = "(" + numeros;
    } else {
        telefone.value = "";
    }
});

document.getElementById("formPerfil").addEventListener("submit", function (event) {
    event.preventDefault();

    var turno = document.getElementById("turno").value;
    var novaSenha = document.getElementById("novaSenha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    var numeros = telefone.value.replace(/\D/g, "");

    if (numeros.length != 11) {
        mostrarMensagem("Digite um telefone completo com DDD.", "erro");
        return;
    }

    if (turno == "") {
        mostrarMensagem("Selecione o turno.", "erro");
        return;
    }

    if (novaSenha.length < 6) {
        mostrarMensagem("A nova senha deve ter pelo menos 6 caracteres.", "erro");
        return;
    }

    if (novaSenha != confirmarSenha) {
        mostrarMensagem("As senhas não são iguais.", "erro");
        return;
    }

    document.getElementById("telefoneAtual").textContent = telefone.value;
    document.getElementById("turnoAtual").textContent = turno;
    mostrarMensagem("Dados atualizados com sucesso!", "sucesso");
});
