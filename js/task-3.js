const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (e) => {
  const trimmedValue = e.currentTarget.value.trim();
  output.textContent = trimmedValue ? trimmedValue : "Анонім";
});