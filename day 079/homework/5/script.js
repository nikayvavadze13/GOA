
const colorSelect = document.getElementById("colorSelect");
const selectedColor = document.getElementById("selectedColor");


function updateSelectedColor() {
    const color = colorSelect.value;
    

    if (color) {
        selectedColor.textContent = `Selected color: ${color}`;
    } else {
        selectedColor.textContent = "No color selected";
    }
}

colorSelect.addEventListener("change", updateSelectedColor);
