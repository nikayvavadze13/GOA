
const dataBase = [];


document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUser = {
        name: name,
        email: email,
        password: password
    };

    let emailExists = false;
    for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].email === email) {
            emailExists = true;
            break;
        }
    }

    if (emailExists) {
        alert('ეს ემაილი უკვე გამოიყენება!');
    } else {
        dataBase.push(newUser);
        alert('ექაუნთი წარმატებით შეიქმნა!');
    }


    document.getElementById('registrationForm').reset();
});
