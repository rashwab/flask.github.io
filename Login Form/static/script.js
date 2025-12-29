const form = document.querySelector("form");
const button = document.querySelector("button");

form.addEventListener("submit", () => {
    button.disabled = true;
    button.innerText = "Logging in...";
});
