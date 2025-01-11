window.onload = function() {
    // Carregar dados do usuário do localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        // Definir nome e foto do usuário
        document.getElementById('userName').innerText = user.nome;
        document.getElementById('userPhoto').src = user.foto || './src/assets/img/login icone.png';
        document.getElementById('userNameDisplay').innerText = user.nome;
    } else {
        alert('Dados de usuário não encontrados.');
        window.location.href = './login.html'; // Redireciona para o login se não houver dados de usuário
    }

    // Função para atualizar o lucro líquido e gráfico
    const revenueInput = document.getElementById('revenueInput');
    const expensesInput = document.getElementById('expensesInput');
    const netProfitText = document.getElementById('netProfit');
    const monthlyRevenueChart = document.getElementById('monthlyRevenueChart').getContext('2d');

    // Função para atualizar o lucro líquido
    function updateNetProfit() {
        const revenue = parseFloat(revenueInput.value) || 0;
        const expenses = parseFloat(expensesInput.value) || 0;
        const netProfit = revenue - expenses;
        netProfitText.innerText = `R$ ${netProfit.toFixed(2)}`;

        // Atualizar o gráfico com os novos valores
        revenueChart.data.datasets[0].data = [revenue, expenses];
        revenueChart.update();
    }

    // Inicializando o gráfico com valores padrão
    const revenueChart = new Chart(monthlyRevenueChart, {
        type: 'bar',
        data: {
            labels: ['Faturamento', 'Despesas'],
            datasets: [{
                label: 'Valores',
                data: [parseFloat(revenueInput.value) || 0, parseFloat(expensesInput.value) || 0],
                backgroundColor: ['rgba(111, 182, 69, 0.5)', 'rgba(255, 99, 132, 0.5)'],
                borderColor: ['rgba(111, 182, 69, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Adicionando eventos para atualizações de faturamento e despesas
    revenueInput.addEventListener('input', updateNetProfit);
    expensesInput.addEventListener('input', updateNetProfit);

    // Função para adicionar nova tarefa
    const addTaskBtn = document.getElementById('addTaskBtn');
    const todoText = document.getElementById('todoText');
    const todoDate = document.getElementById('todoDate');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = todoText.value.trim();
        const taskDate = todoDate.value;

        if (taskText && taskDate) {
            // Criar um item de tarefa
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <span class="task-date">${taskDate}</span>
                <button class="remove-task">🗑️</button>
            `;

            // Adicionar evento para remover a tarefa
            const removeBtn = li.querySelector('.remove-task');
            removeBtn.addEventListener('click', function() {
                taskList.removeChild(li); // Remove a tarefa da lista
            });

            // Adicionar a tarefa na lista
            taskList.appendChild(li);

            // Limpar os campos
            todoText.value = '';
            todoDate.value = '';
        } else {
            alert('Por favor, preencha ambos os campos (tarefa e data).');
        }
    });
};
