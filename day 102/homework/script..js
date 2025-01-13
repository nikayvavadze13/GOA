const ids = [];

function generateID() {
  const newID = `ID-${Math.random().toString(36).substring(2, 10)}`;
  ids.push(newID);
  displayMessage(`added ID: ${newID}`);
}


function checkID() {
  const inputID = document.getElementById('idInput').value.trim();
  if (inputID === "") {
    displayMessage("please, sign ID.");
    return;
  }

  const index = ids.indexOf(inputID);
  if (index !== -1) {
    displayMessage(`ID exist: key-${inputID}: value-${index}`);
  } else {
    displayMessage("ID doesnt exist.");
  }
}


function displayMessage(message) {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = message;
}


document.getElementById('generateBtn').addEventListener('click', generateID);
document.getElementById('checkBtn').addEventListener('click', checkID);
