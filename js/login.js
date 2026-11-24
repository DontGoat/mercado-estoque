/*
Descricao: Situação de Aprendizagem 02 - Sistema de Estoque (Mercado Cesta Cheia)
nome_arquivo: login.js
nome_exercicio: Situação de Aprendizagem 02 - Login, Perfil e Consulta
nome_aluno: Pedro Henrique de Sousa Martins
email_aluno: pedro.martins55@aluno.cps.sp.gov.br
turma: A1129-N-D.S.M.-312-20262
*/

var usuarioTeste = {
    nome: "Pedro Henrique de Sousa Martins",
    email: "pedro@cestacheia.com",
    senha: "123456"
};

sessionStorage.clear();

var formLogin = document.getElementById("formLogin");
var formCadastro = document.getElementById("formCadastro");

function mostrarMensagem(id, texto, tipo) {
    var mensagem = document.getElementById(id);
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
}

function carregarUsuarios() {
    var salvos = localStorage.getItem("usuarios");

    if (salvos == null) {
        return [];
    }

    return JSON.parse(salvos);
}

function emailValido(email) {
    return email.indexOf("@") != -1 && email.indexOf(".") != -1;
}

document.getElementById("abrirCadastro").addEventListener("click", function (event) {
    event.preventDefault();
    formLogin.classList.add("escondido");
    formCadastro.classList.remove("escondido");
});

document.getElementById("abrirLogin").addEventListener("click", function (event) {
    event.preventDefault();
    formCadastro.classList.add("escondido");
    formLogin.classList.remove("escondido");
});

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value;

    if (email == "") {
        mostrarMensagem("mensagem", "Preencha o e-mail.", "erro");
        return;
    }

    if (emailValido(email) == false) {
        mostrarMensagem("mensagem", "Digite um e-mail válido.", "erro");
        return;
    }

    if (senha == "") {
        mostrarMensagem("mensagem", "Preencha a senha.", "erro");
        return;
    }

    var usuarios = carregarUsuarios();
    usuarios.push(usuarioTeste);

    var encontrado = null;

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email && usuarios[i].senha == senha) {
            encontrado = usuarios[i];
        }
    }

    if (encontrado == null) {
        mostrarMensagem("mensagem", "E-mail ou senha incorretos.", "erro");
        return;
    }

    sessionStorage.setItem("usuario", encontrado.nome.split(" ")[0]);
    sessionStorage.setItem("nome", encontrado.nome);
    sessionStorage.setItem("email", encontrado.email);
    mostrarMensagem("mensagem", "Login realizado! Entrando...", "sucesso");
    window.location.href = "perfil.html";
});

formCadastro.addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("nomeCadastro").value.trim();
    var email = document.getElementById("emailCadastro").value.trim();
    var senha = document.getElementById("senhaCadastro").value;
    var confirmar = document.getElementById("confirmarCadastro").value;
    var usuarios = carregarUsuarios();

    if (nome == "") {
        mostrarMensagem("mensagemCadastro", "Preencha o nome.", "erro");
        return;
    }

    if (emailValido(email) == false) {
        mostrarMensagem("mensagemCadastro", "Digite um e-mail válido.", "erro");
        return;
    }

    if (email == usuarioTeste.email) {
        mostrarMensagem("mensagemCadastro", "Este e-mail já está cadastrado.", "erro");
        return;
    }

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email) {
            mostrarMensagem("mensagemCadastro", "Este e-mail já está cadastrado.", "erro");
            return;
        }
    }

    if (senha.length < 6) {
        mostrarMensagem("mensagemCadastro", "A senha deve ter pelo menos 6 caracteres.", "erro");
        return;
    }

    if (senha != confirmar) {
        mostrarMensagem("mensagemCadastro", "As senhas não são iguais.", "erro");
        return;
    }

    usuarios.push({
        nome: nome,
        email: email,
        senha: senha
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    formCadastro.reset();
    formCadastro.classList.add("escondido");
    formLogin.classList.remove("escondido");
    document.getElementById("email").value = email;
    mostrarMensagem("mensagem", "Cadastro realizado! Agora faça o login.", "sucesso");
});
