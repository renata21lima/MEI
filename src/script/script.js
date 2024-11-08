// Acordeão (FAQ)
const accordionItems = document.querySelectorAll('.accordion-button');
accordionItems.forEach(item => {
    item.addEventListener('click', function() {
        const isActive = item.classList.contains('collapsed');
        if (!isActive) {
            item.classList.add('accordion-active');
        } else {
            item.classList.remove('accordion-active');
        }
    });
});

