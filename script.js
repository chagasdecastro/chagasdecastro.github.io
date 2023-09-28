document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a.scroll-link');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const textElement = document.querySelector('.typing-text');
    const text = textElement.textContent;
    textElement.textContent = '';

    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            textElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Velocidade de digitação (ajuste conforme necessário)
        }
    }

    type();

});