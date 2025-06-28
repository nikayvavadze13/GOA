const exampleObject = {
    name: "Ana",
    age: "25",
    city: "Tbilisi",
    hobby: "Art",
    country: "Georgia"
  };

  const allDataElement = document.getElementById("all-data");
  const filteredDataElement = document.getElementById("filtered-data");
  

  function displayAllData(obj) {
    let output = "";
    for (const [key, value] of Object.entries(obj)) {
      output += `${key}: ${value}\n`;
    }
    allDataElement.textContent = output;
  }
  

  function displayFilteredData(obj) {
    let output = "";
    for (const [key, value] of Object.entries(obj)) {
      if (value.length < 5) {
        output += `${key}: ${value}\n`;
      }
    }
    filteredDataElement.textContent = output;
  }

  displayAllData(exampleObject);
  displayFilteredData(exampleObject);
  