function showForm() {
    const userType = document.getElementById("userType").value;
    
    // Esconde todos os formulários
    document.getElementById("meiForm").style.display = "none";
    document.getElementById("contadorForm").style.display = "none";
    
    // Exibe o formulário correspondente ao tipo de usuário selecionado
    if (userType === "mei") {
        document.getElementById("meiForm").style.display = "block";
    } else if (userType === "contador") {
        document.getElementById("contadorForm").style.display = "block";
    }
}

function submitForm(userType) {
    let formData;

    // Captura os dados do formulário de acordo com o tipo de usuário
    if (userType === "mei") {
        formData = {
            tipo: "mei",
            nome: document.getElementById("nomeMei").value,
            email: document.getElementById("emailMei").value,
            cnpj: document.getElementById("cnpjMei").value
        };
    } else if (userType === "contador") {
        // Verifica se o checkbox de verificação foi marcado
        if (!document.getElementById("verificacao").checked) {
            alert("Você precisa concordar com o processo de verificação de dados.");
            return; // Interrompe a execução se não estiver marcado
        }
        formData = {
            tipo: "contador",
            nome: document.getElementById("nomeContador").value,
            email: document.getElementById("emailContador").value,
            cpf: document.getElementById("cpfContador").value,
            crc: document.getElementById("crcContador").value
        };
    }

    // Armazena o usuário no localStorage (ou outro mecanismo que desejar)
    localStorage.setItem('user', JSON.stringify(formData));
    
    // Redireciona para a página correspondente
    if (userType === "mei") {
        window.location.href = "home-mei.html";
    } else if (userType === "contador") {
        window.location.href = "home-contador.html";
    }
}