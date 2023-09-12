const listElements = document.querySelectorAll('li');
listElements.forEach(li => {
    li.addEventListener('click', () => {
        // Encontre o próximo elemento irmão oculto
        const nextElement = li.nextElementSibling;

        // Verifique se existe um próximo elemento
        if (nextElement) {
            // Altere o estilo CSS para exibir o próximo elemento
            nextElement.classList.add("show"); // Ou 'inline-block' ou outro valor de sua escolha
        }
    });
});
