const theme = document.querySelector("select");
const html = document.querySelector("html");
function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}
theme.addEventListener("change", () =>
    theme.value === "black"
        ? update("black", "white")
        : update("white", "black")
);