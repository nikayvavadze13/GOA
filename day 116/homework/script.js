// Add your Edamam API credentials here
const appId = 'your-edamam-app-id';  // Replace with your Edamam App ID
const appKey = 'your-edamam-app-key';  // Replace with your Edamam App Key

// Select DOM elements
const searchButton = document.getElementById('searchButton');
const ingredientInput = document.getElementById('ingredient');
const recipeResults = document.getElementById('recipeResults');

// Handle the search functionality
searchButton.addEventListener('click', () => {
    const ingredient = ingredientInput.value.trim();

    if (!ingredient) {
        alert('Please enter an ingredient!');
        return;
    }

    fetchRecipes(ingredient);
});

// Fetch recipes from Edamam API
function fetchRecipes(ingredient) {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${appId}&app_key=${appKey}`;

    // Clear previous results
    recipeResults.innerHTML = 'Loading...';

    axios.get(url)
        .then(response => {
            const recipes = response.data.hits;

            if (recipes.length === 0) {
                recipeResults.innerHTML = 'No recipes found for this ingredient.';
                return;
            }

            recipeResults.innerHTML = ''; // Clear the loading message

            // Loop through the recipes and display them
            recipes.forEach(recipe => {
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe');

                recipeDiv.innerHTML = `
                    <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
                    <h3>${recipe.recipe.label}</h3>
                    <p><strong>Ingredients:</strong> ${recipe.recipe.ingredientLines.join(', ')}</p>
                    <p><strong>Instructions:</strong> <a href="${recipe.recipe.url}" target="_blank">View Recipe</a></p>
                `;

                recipeResults.appendChild(recipeDiv);
            });
        })
        .catch(error => {
            recipeResults.innerHTML = 'There was an error fetching the recipes. Please try again later.';
            console.error('Error fetching recipes:', error);
        });
}
