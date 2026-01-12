const switchTheme = document.getElementById("switch-theme");
const body = document.body;

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    body.classList.add("dark-theme");
    switchTheme.checked = true;
}

switchTheme.addEventListener("change", () => {
    if (switchTheme.checked) {
        body.classList.add("dark-theme");
        localStorage.setItem("tema", "escuro");
    } else {
        body.classList.remove("dark-theme");
        localStorage.setItem("tema", "claro");
    }
});
