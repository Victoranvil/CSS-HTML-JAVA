// Parte de alternância do tema
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

// Carregar o tema salvo ao iniciar
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
