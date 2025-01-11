function enviarConsulta(event) {
    event.preventDefault();

    const descricao = document.getElementById("consultaDescricao").value;
    const consulta = { descricao, status: "Aguardando Resposta" };

    let consultas = JSON.parse(localStorage.getItem("consultas")) || [];
    consultas.push(consulta);

    localStorage.setItem("consultas", JSON.stringify(consultas));

    exibirConsultas();
    document.getElementById("consultaForm").reset();

    // Exibir mensagem de confirmação
    const mensagemConfirmacao = document.getElementById("mensagemConfirmacao");
    mensagemConfirmacao.style.display = "block";

    // Esconder a mensagem após 3 segundos
    setTimeout(() => {
        mensagemConfirmacao.style.display = "none";
    }, 3000);
}

function exibirConsultas() {
    const consultasList = document.getElementById("consultasList");
    const consultas = JSON.parse(localStorage.getItem("consultas")) || [];
    
    consultasList.innerHTML = consultas.map((consulta, index) => `
        <div class="consulta">
            <p><strong>Dúvida:</strong> ${consulta.descricao}</p>
            <p><strong>Status:</strong> ${consulta.status}</p>
            <button onclick="removerConsulta(${index})">Remover</button>
        </div>
    `).join("");
}

function removerConsulta(index) {
    let consultas = JSON.parse(localStorage.getItem("consultas")) || [];
    consultas.splice(index, 1);
    localStorage.setItem("consultas", JSON.stringify(consultas));
    exibirConsultas();
}

window.onload = exibirConsultas;