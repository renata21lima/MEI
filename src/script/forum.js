function addComment(postId) {
    const name = document.getElementById(`commentName${postId}`).value;
    const text = document.getElementById(`commentText${postId}`).value;
    const commentsDiv = document.querySelectorAll('.comments')[postId - 1]; // Pega o div correto para os comentários
    
    if (name && text) {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = `${name}: ${text}`;
        commentsDiv.appendChild(newComment); // Adiciona o novo comentário na lista
        document.getElementById(`commentName${postId}`).value = ''; // Limpa o campo de nome
        document.getElementById(`commentText${postId}`).value = ''; // Limpa o campo de texto
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}