document.getElementById("verificarCNPJ").addEventListener("click", function() {
  const cnpj = document.getElementById("cnpj").value;  // Obtém o valor do CNPJ inserido
  consultarCNPJ(cnpj);  // Chama a função que faz a consulta
});

async function consultarCNPJ(cnpj) {
  try {
    const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
    const data = await response.json();

    if (data.status === "OK") {
      // Preenche os campos do formulário com os dados retornados pela API
      document.getElementById("nome").value = data.nome;
      document.getElementById("atividade").value = data.atividade_principal[0].text;
      document.getElementById("endereco").value = `${data.logradouro}, ${data.numero}, ${data.bairro} - ${data.municipio}/${data.uf}`;
      
      // Exibe uma mensagem de sucesso
      document.getElementById("resultadoCNPJ").innerHTML = "<p>CNPJ verificado com sucesso!</p>";
    } else {
      document.getElementById("resultadoCNPJ").innerHTML = "CNPJ inválido ou não encontrado";
    }
  } catch (error) {
    document.getElementById("resultadoCNPJ").innerHTML = "Erro na consulta ao CNPJ";
    console.error("Erro na consulta ao CNPJ", error);
  }
}
