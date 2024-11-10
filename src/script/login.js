function handleLogin(event) {
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página

    // Obtém os dados inseridos no formulário de login
    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginSenha").value;

    // Obtém o tipo de perfil selecionado
    const userType = document.querySelector('input[name="profile"]:checked').value;

    // Recupera os dados do usuário do localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // Verifica se o usuário existe, se o email e a senha estão corretos, e se o tipo de perfil corresponde
    if (user && user.email === email && user.senha === senha && user.tipo === userType) {
        alert("Login bem-sucedido!");
        
        // Redireciona o usuário para a página de acordo com o tipo de usuário
        window.location.href = user.tipo === "mei" ? "home-mei.html" : "home-contador.html";
    } else {
        alert("Email ou senha incorretos, ou tipo de usuário não corresponde!");
    }
}