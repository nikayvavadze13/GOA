
const maxChars = 200;


const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");


function updateCharCount() {
    const currentLength = textInput.value.length;
    charCount.textContent = `${currentLength}/${maxChars} characters`;
}

textInput.addEventListener("input", updateCharCount);
