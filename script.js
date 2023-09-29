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
            setTimeout(type, 80); // Velocidade de digitação (ajuste conforme necessário)
        }
    }

    type();

    // Função para inverter a imagem horizontalmente ao passar o mouse
    function flipImage(img, altSrc) {
        if (!img.isFlipped) {
            img.src = altSrc; // Altera a imagem para a imagem alternativa
            img.style.transform = "scaleX(-1)";
            img.isFlipped = true; // Define uma flag para indicar que a imagem está invertida
        }
    }

    // Função para restaurar a imagem à posição original ao remover o mouse
    function restoreImage(img, originalSrc) {
        if (img.isFlipped) {
            img.src = originalSrc; // Restaura a imagem original
            img.style.transform = "scaleX(1)";
            img.isFlipped = false; // Remove a flag de imagem invertida
        }
    }

    // Adicione eventos de mouse às imagens dos cards
    const cardImages = document.querySelectorAll(".card-img-top");

    cardImages.forEach((img) => {
        const originalSrc = img.src; // Salva o caminho da imagem original
        const altSrc = img.getAttribute("data-alt-src"); // Obtém o caminho da imagem alternativa dos atributos de dados

        img.isFlipped = false; // Inicializa a flag como falso

        img.addEventListener("mouseover", function () {
            flipImage(this, altSrc);
        });

        img.addEventListener("mouseout", function () {
            restoreImage(this, originalSrc);
        });
    });

    // Função para rolar suavemente ao topo da página
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Rolagem suave
        });
    }

    // Adiciona um evento de clique ao botão de "rolar ao topo"
    document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);

    // Monitora a posição de rolagem da página para mostrar/ocultar o botão
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollToTopBtn").style.display = "block";
        } else {
            document.getElementById("scrollToTopBtn").style.display = "none";
        }
    };

    // Adicione um evento de rolagem à janela
    window.addEventListener("scroll", function() {
        // Obtém a posição de rolagem da página
        var scrollPosition = window.scrollY;

        // Se a posição de rolagem for maior que 200 pixels, adiciona a classe 'show' ao botão
        if (scrollPosition > 200) {
            document.getElementById("scrollToTopBtn").classList.add("show");
        } else {
            // Se não, remove a classe 'show'
            document.getElementById("scrollToTopBtn").classList.remove("show");
        }
    });


});