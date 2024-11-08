document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Pega os dados do formulário
    const nome = document.getElementById('nome').value;
    const problema = document.getElementById('problema').value;
    const urgencia = document.getElementById('urgencia').value;

    // Cria um objeto para armazenar o chamado
    const consulta = {
        nome: nome,
        problema: problema,
        urgencia: urgencia,
        data: new Date().toLocaleString() // Adiciona a data atual
    };

    // Verifica se já existem consultas salvas no localStorage
    let consultas = localStorage.getItem('consultas');
    if (consultas) {
        consultas = JSON.parse(consultas); // Converte de volta para array
    } else {
        consultas = []; // Cria um array vazio se não houver consultas
    }

    // Adiciona a nova consulta ao array
    consultas.push(consulta);

    // Salva o array de consultas de volta no localStorage
    localStorage.setItem('consultas', JSON.stringify(consultas));

    // Limpa o formulário
    document.getElementById('consultaForm').reset();

    // Confirmação de envio
    alert('Consulta enviada com sucesso!');
});