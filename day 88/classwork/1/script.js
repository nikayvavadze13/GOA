let myForm = document.getElementById("form")

myForm.addEventListener("submit" , function(e){
    e.defaultPrevented()

    let username = myForm.username.value;
    let email = myForm.email.value;
    let tel = myForm.email.value;

    let tr = document.getElementById("tr")

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)


    td1.textContent = username
    td2.textContent = email
    td3.textContent = tel
})

