        // Recupera os dados do usuário do localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        // Verifica se o usuário está logado e tem nome
        if (user && user.nome) {
            // Exibe o nome do usuário
            document.getElementById('userName').textContent = user.nome;
        } else {
            // Caso não tenha um nome armazenado, exibe uma mensagem genérica
            document.getElementById('userName').textContent = 'usuário';
        }