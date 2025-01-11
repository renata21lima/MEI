// Função para calcular Simples Nacional (estimativa)
function calculateSimples() {
    const revenue = parseFloat(document.getElementById('simplesRevenue').value) || 0;
    const taxRate = 0.06; // Exemplo de alíquota de 6% do Simples Nacional
    const simplesTax = revenue * taxRate;
    document.getElementById('simplesResult').innerText = `R$ ${simplesTax.toFixed(2)}`;
}

// Função para calcular ISS (estimativa)
function calculateISS() {
    const revenue = parseFloat(document.getElementById('issRevenue').value) || 0;
    const taxRate = 0.02; // Exemplo de alíquota de 2% para ISS
    const issTax = revenue * taxRate;
    document.getElementById('issResult').innerText = `R$ ${issTax.toFixed(2)}`;
}

// Função para calcular ICMS (estimativa)
function calculateICMS() {
    const revenue = parseFloat(document.getElementById('icmsRevenue').value) || 0;
    const taxRate = 0.18; // Exemplo de alíquota de 18% para ICMS
    const icmsTax = revenue * taxRate;
    document.getElementById('icmsResult').innerText = `R$ ${icmsTax.toFixed(2)}`;
}

// Função para calcular INSS (estimativa para autônomos)
function calculateINSS() {
    const salary = parseFloat(document.getElementById('inssSalary').value) || 0;
    const taxRate = 0.11; // Exemplo de alíquota de 11% para INSS de autônomos
    const inssContribution = salary * taxRate;
    document.getElementById('inssResult').innerText = `R$ ${inssContribution.toFixed(2)}`;
}

// Funções de cálculo para cada simulador

        // DAS
        function calculateDAS() {
            const category = document.getElementById('category').value;
            let dasValue = 0;

            if (category === 'comercio') {
                dasValue = 66.10;
            } else if (category === 'servicos') {
                dasValue = 70.10;
            } else if (category === 'comercio_servicos') {
                dasValue = 71.10;
            }

            document.getElementById('dasResult').innerText = `R$ ${dasValue.toFixed(2)}`;
        }

        // INSS
        function calculateINSS() {
            const salary = parseFloat(document.getElementById('salary').value) || 1320;
            const inss = salary * 0.05;
            document.getElementById('inssResult').innerText = `R$ ${inss.toFixed(2)}`;
        }

        // Faturamento Anual
        function calculateAnnualRevenue() {
            const monthlyRevenue = parseFloat(document.getElementById('monthlyRevenue').value) || 0;
            const annualRevenue = monthlyRevenue * 12;
            const status = annualRevenue > 81000 ? 'Faturamento acima do limite!' : 'Faturamento dentro do limite.';
            document.getElementById('annualRevenue').innerText = `R$ ${annualRevenue.toFixed(2)}`;
            document.getElementById('status').innerText = status;
        }

        // ISS
        function calculateISS() {
            const issRate = parseFloat(document.getElementById('city').value) || 0;
            const serviceValue = parseFloat(document.getElementById('serviceValue').value) || 0;
            const issValue = serviceValue * (issRate / 100);
            document.getElementById('issResult').innerText = `R$ ${issValue.toFixed(2)}`;
        }

        // Declaração Anual
        function calculateDeclaration() {
            const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value) || 0;
            const annualIncome = monthlyIncome * 12;
            document.getElementById('annualIncome').innerText = `R$ ${annualIncome.toFixed(2)}`;
        }

        // Multa por Atraso
        function calculatePenalty() {
            const dueDate = new Date(document.getElementById('dueDate').value);
            const paymentDate = new Date(document.getElementById('paymentDate').value);
            const timeDiff = paymentDate - dueDate;

            if (timeDiff <= 0) return;

            const daysLate = Math.floor(timeDiff / (1000 * 3600 * 24));
            const penalty = daysLate * 0.33; // 0.33% por dia de atraso, limitado a 20%
            const interest = (penalty * 0.2); // Exemplo de juros fixos
            const totalPenalty = penalty + interest;

            document.getElementById('penaltyResult').innerText = `R$ ${totalPenalty.toFixed(2)}`;
        }

        // Salário Líquido
        function calculateSalary() {
            const revenue = parseFloat(document.getElementById('revenue').value) || 0;
            const expenses = parseFloat(document.getElementById('expenses').value) || 0;
            const salary = revenue - expenses;
            document.getElementById('salaryResult').innerText = `R$ ${salary.toFixed(2)}`;
        }

        // Custos
        function calculateCosts() {
            const costs = parseFloat(document.getElementById('costs').value) || 0;
            const minimumPrice = costs * 1.2; // 20% de margem
            document.getElementById('costsResult').innerText = `R$ ${minimumPrice.toFixed(2)}`;
        }