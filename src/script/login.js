function switchTab(tabName) {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.tab-button:contains('${tabName}')`).classList.add('active');
}
