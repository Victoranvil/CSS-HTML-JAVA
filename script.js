// Parte de alternância do tema escuro/claro
const themeToggle = document.getElementById("toggle-theme");

themeToggle.addEventListener("click", () => {
    // Alterna entre o modo claro e escuro
    document.body.classList.toggle("dark-mode");

    // Salvar a preferência do usuário no localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙"; // Ícone de lua para o modo escuro
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️"; // Ícone de sol para o modo claro
    }
});

//carregar o tema salvo ao iniciar
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "🌙"; // Ícone de lua para o modo escuro
    } else {
        themeToggle.textContent = "☀️"; // Ícone de sol para o modo claro
    }
};

// Criar o botão "Voltar" dinamicamente
let botaoVoltar = document.createElement("button"); // Cria o botão
botaoVoltar.innerText = "Voltar"; // Define o texto do botão
botaoVoltar.id = "btnVoltar"; // Adiciona um ID ao botão

// Adicionar o botão ao corpo da página
document.body.appendChild(botaoVoltar);

// Adicionar evento de clique ao botão
botaoVoltar.addEventListener("click", function() {
    window.history.back(); // Volta para a página anterior
});


//*Carrossel de imagens
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");  // Remove a classe "active" de todos os slides
            if (i === index) {
                slide.classList.add("active");  // Adiciona a classe "active" ao slide atual
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    setInterval(nextSlide, 5000); // Troca automática a cada 5 segundos

    showSlide(currentIndex); // Exibe o slide inicial
});

//Campo de busca funcional

function searchContent() {
    // Obtém o valor digitado no campo de busca
    const query = document.getElementById("search-input").value.toLowerCase();
    
    // Remove as marcações anteriores de busca
    const highlighted = document.querySelectorAll(".highlight");
    highlighted.forEach(function(element) {
        element.classList.remove("highlight");
        element.style.backgroundColor = "";
    });

    // Verifica se o campo de pesquisa não está vazio
    if (query.trim() === "") return;
    
    // Obtém todos os elementos de conteúdo na página
    const contentElements = document.querySelectorAll("p, h1, h2, h3"); // Inclui p, h1, h2, h3
    
    // Loop para verificar cada conteúdo
    contentElements.forEach(function(element) {
        const text = element.textContent.toLowerCase();
        
        // Se o texto da busca estiver no conteúdo
        if (text.includes(query)) {
            highlightText(element, query);
        }
    });
}

// Função para destacar o texto encontrado
function highlightText(element, query) {
    const regex = new RegExp(`(${query})`, 'gi'); // RegEx para encontrar a palavra
    const newHtml = element.innerHTML.replace(regex, '<span class="highlight">$1</span>'); // Envolvem a palavra com uma tag span
    element.innerHTML = newHtml;
}
