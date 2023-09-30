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
            setTimeout(type, 80); // Velocidade de digitação
        }
    }

    type();

    function flipImage(img, altSrc) {
        if (!img.isFlipped) {
            img.src = altSrc;
            img.style.transform = "scaleX(-1)";
            img.isFlipped = true;
        }
    }

    function restoreImage(img, originalSrc) {
        if (img.isFlipped) {
            img.src = originalSrc;
            img.style.transform = "scaleX(1)";
            img.isFlipped = false;
        }
    }

    const cardImages = document.querySelectorAll(".card-img-top");

    cardImages.forEach((img) => {
        const originalSrc = img.src; 
        const altSrc = img.getAttribute("data-alt-src");

        img.isFlipped = false;

        img.addEventListener("mouseover", function () {
            flipImage(this, altSrc);
        });

        img.addEventListener("mouseout", function () {
            restoreImage(this, originalSrc);
        });
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Rolagem suave
        });
    }

    document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollToTopBtn").style.display = "block";
        } else {
            document.getElementById("scrollToTopBtn").style.display = "none";
        }
    };

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 200) {
            document.getElementById("scrollToTopBtn").classList.add("show");
        } else {
            document.getElementById("scrollToTopBtn").classList.remove("show");
        }
    });
});