document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contadorForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio tradicional do formulário

        // Exibe a mensagem "Você foi cadastrado!"
        alert("Você foi cadastrado!");

        // Redireciona após 2 segundos
        setTimeout(function() {
            window.location.href = "pagina-contador.html";
        }, 2000); // Espera de 2 segundos antes do redirecionamento
    });
});
