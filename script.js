const switchTheme = document.getElementById("switch-theme");
const root = document.documentElement;

/* === ÍCONES === */
const iconGithub = document.getElementById("icon-github");
const iconLinkedin = document.getElementById("icon-linkedin");
const iconWhatsapp = document.getElementById("icon-whatsapp");
const iconCv = document.getElementById("icon-cv");

/* === FUNÇÃO PARA ATUALIZAR ÍCONES === */
function atualizarIcones() {
    const isDark = root.classList.contains("dark-theme");

    if (iconGithub)
        iconGithub.src = isDark ? "assets/github (2).png" : "assets/github.png";

    if (iconLinkedin)
        iconLinkedin.src = isDark ? "assets/linkedin (2).png" : "assets/linkedin.png";

    if (iconWhatsapp)
        iconWhatsapp.src = isDark ? "assets/whatsapp (2).png" : "assets/whatsapp.png";

    if (iconCv)
        iconCv.src = isDark ? "assets/cv (2).png" : "assets/cv.png";
}

/* === SINCRONIZA SWITCH COM O TEMA JÁ APLICADO === */
if (root.classList.contains("dark-theme")) {
    switchTheme.checked = true;
}

atualizarIcones();

/* === BOTÃO DE TROCA === */
switchTheme.addEventListener("change", () => {
    if (switchTheme.checked) {
        root.classList.add("dark-theme");
        localStorage.setItem("tema", "escuro");
    } else {
        root.classList.remove("dark-theme");
        localStorage.setItem("tema", "claro");
    }

    atualizarIcones();
});

// Libera o switch depois de tudo sincronizado
document.querySelector(".theme-switch").classList.add("ready");
