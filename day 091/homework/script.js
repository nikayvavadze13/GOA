let password = document.getElementById("password")
let name = document.getElementById("name")
let age = document.getElementById("age")
let gmail = document.getElementById("gmail")
let submit = document.getElementById("submit")
let p = document.getElementById("paragraph")

function checkValue(){
    let counter = 0

    for(let i in password){
        if(!"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(i)){
            counter += 1
            if(counter < 3){
                alert("nigger")
            }
        }
    }
}