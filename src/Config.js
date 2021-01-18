export const END_POINT =
  "https://api.edamam.com/search?q=chicken&app_id=111368b8&app_key=7d3f0451dc9d9b87fc975c17d6a7919b";
export const APP_ID = "111368b8";
export const APP_KEY = "7d3f0451dc9d9b87fc975c17d6a7919b";
const APP_KEY2 = '56dc78ece8b041ccace71034ca88e7d7'
export const Random_recipes = (count) => {
  return `https://api.spoonacular.com/recipes/random?apiKey=6f57734196684cecb7ec58a0c69a76c7&number=${count}&includeNutrition=true`;
}

export const Diet = (diettile) => {
  return `https://api.spoonacular.com/recipes/complexSearch?diet=${diettile}&apiKey=6f57734196684cecb7ec58a0c69a76c7&number=20&includeNutrition=true`
}

// API DOC =  https://developer.edamam.com/edamam-docs-recipe-api

//https://api.spoonacular.com/recipes/random?apiKey=6f57734196684cecb7ec58a0c69a76c7&number=20&includeNutrition=true.

// doc  https://spoonacular.com/food-api/docs



//Diet
//https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=6f57734196684cecb7ec58a0c69a76c7&number=20&includeNutrition=true

//id
//https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=6f57734196684cecb7ec58a0c69a76c7

//title
//https://api.spoonacular.com/recipes/complexSearch?titleMatch=Crispy&apiKey=6f57734196684cecb7ec58a0c69a76c7