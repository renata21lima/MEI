// Seleção dos elementos
const descricaoInput = document.getElementById('descricao');
const btnEnviar = document.querySelector('.btn-enviar');
const btnConsultas = document.querySelector('.btn-consultas');
const consultasAgendadasContainer = document.getElementById('consultasAgendadasContainer');
const consultasList = document.getElementById('consultasList');

// Função para salvar a consulta
function salvarConsulta(descricao) {
    // Verificar se já existe uma lista de consultas armazenadas
    let consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    
    // Adicionar a nova consulta à lista
    const novaConsulta = {
        descricao: descricao,
        data: new Date().toLocaleString() // Armazena a data e hora do agendamento
    };
    consultas.push(novaConsulta);
    
    // Salvar de volta no localStorage
    localStorage.setItem('consultas', JSON.stringify(consultas));
}

// Função para exibir as consultas agendadas na página
function exibirConsultas() {
    const consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    
    // Verifica se existem consultas agendadas
    if (consultas.length === 0) {
        consultasList.innerHTML = '<p>Não há consultas agendadas!</p>';
        consultasAgendadasContainer.style.display = 'block'; // Exibe o contêiner
        return;
    }

    // Limpa o conteúdo da lista antes de adicionar novas consultas
    consultasList.innerHTML = '';

    // Adiciona cada consulta na lista
    consultas.forEach((consulta, index) => {
        const consultaItem = document.createElement('div');
        consultaItem.classList.add('consulta-item');

        const descricaoElement = document.createElement('h4');
        descricaoElement.textContent = `Consulta #${index + 1}: ${consulta.descricao}`;

        const dataElement = document.createElement('p');
        dataElement.textContent = `Data e Hora: ${consulta.data}`;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remover';
        
        // Evento de clique para remover a consulta
        removeBtn.addEventListener('click', () => {
            removerConsulta(index);
        });

        consultaItem.appendChild(descricaoElement);
        consultaItem.appendChild(dataElement);
        consultaItem.appendChild(removeBtn);

        consultasList.appendChild(consultaItem);
    });

    // Exibe o contêiner de consultas
    consultasAgendadasContainer.style.display = 'block';
}

// Função para remover uma consulta
function removerConsulta(index) {
    let consultas = JSON.parse(localStorage.getItem('consultas')) || [];

    // Remove a consulta da lista pelo índice
    consultas.splice(index, 1);

    // Atualiza o localStorage com a nova lista de consultas
    localStorage.setItem('consultas', JSON.stringify(consultas));

    // Exibe novamente as consultas após a remoção
    exibirConsultas();
}

// Evento de clique no botão "Agendar Consulta"
btnEnviar.addEventListener('click', () => {
    const descricao = descricaoInput.value.trim();

    if (descricao === '') {
        alert('Por favor, descreva sua dúvida.');
        return;
    }

    // Salvar a consulta
    salvarConsulta(descricao);

    // Limpar o campo de descrição
    descricaoInput.value = '';
    
    alert('Consulta agendada com sucesso!');
});

// Evento de clique no botão "Consultas Agendadas"
btnConsultas.addEventListener('click', exibirConsultas);
