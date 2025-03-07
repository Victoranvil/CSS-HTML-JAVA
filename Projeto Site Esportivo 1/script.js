const themeToggle = document.getElementById("toggle-theme");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Salvar a preferência do usuário no localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️"; // Ícone de sol para modo claro
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙"; // Ícone de lua para modo escuro
    }
});

// Carregar o tema salvo ao iniciar
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }
};
