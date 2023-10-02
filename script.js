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
            setTimeout(type, 80); 
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
            behavior: "smooth"
        });
    }

    document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");

        if (scrollPosition > 200) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    const svgElement = document.getElementById("meuSVG");
    const navElement = document.getElementById("meuNav");
    const backgroundElement = document.getElementById("meuBackground");
    const sections = document.querySelectorAll("section");
    const headerTexts = document.querySelectorAll("#header h1, #header p");
    const botaoSGV = document.getElementById("botaoSGV");
    
    let modoClaro = true;
    
    const iconeModoClaro = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style="cursor: pointer;" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path id="iconePathClaro" stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
    `;
    
    const iconeModoEscuro = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style="cursor: pointer;" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-10 h-10">
            <path id="iconePathEscuro" stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
    `;
    
    svgElement.addEventListener("click", function () {
        modoClaro = !modoClaro;
    
        if (modoClaro) {
            svgElement.innerHTML = iconeModoClaro;
            navElement.style.backgroundColor = "#716075";
            backgroundElement.style.backgroundColor = "#e7e7e7";
            sections.forEach(function (section) {
                section.style.backgroundColor = "#fff";
            });
            headerTexts.forEach(function (element) {
                element.style.color = "";
            });
            botaoSGV.querySelector("path").setAttribute("stroke", "#221722"); 
        } else {
            svgElement.innerHTML = iconeModoEscuro;
            navElement.style.backgroundColor = "#221722";
            backgroundElement.style.backgroundColor = "#37283a";
            sections.forEach(function (section) {
                section.style.backgroundColor = "#EBECF0";
            });
            headerTexts.forEach(function (element) {
                element.style.color = "#fff";
            });
            botaoSGV.querySelector("path").setAttribute("stroke", "#fff"); 
        }
    });       

});