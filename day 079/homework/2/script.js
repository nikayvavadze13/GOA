



function countLength(){

    let forPassword = document.getElementById("for-password")
    let resultDisplayField = document.getElementById("result-display")

    let counter = forPassword.value.length
    
    if (counter < 9){
        resultDisplayField.textContent = "length of input field should be minimum 8"
    }if (counter >= 9) {
        resultDisplayField.textContent = "accepted"
    }
}