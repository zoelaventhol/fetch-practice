import { useState } from "react";
import "./App.css";

function Food_app() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState(null);

  /****** TO DO: 
   1. Go to https://spoonacular.com/, make a free account and get an API key. Update your api_key below.
   2. Read the documentation for searching by ingredients: https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients
   3. Update your api_url. 
      HINT: You will need to include the "ingredient" you're searching for. 
      HINT: You will need to include your api_key at the end of the URL using "&apiKey=${api_key}"
  ******/
  const api_key = 'TBD';
  const api_url = 'TBD';

  const handleChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipe();
  };

  // ****** TO DO: write fetch using your api_url
  const getRecipe = async () => {
    console.log("Mmmmm... 😋")
  };

  return (
    <div>
      <h1>Fetch Recipes</h1>
      Enter an ingredient and click the button to see some recipes.
      <br />
      🍲 🥞 🥕
      <form onSubmit={handleSubmit}>
        <input type="text" value={ingredient} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      {/*****  TO DO: if there are recipes, display them *****/}
      (recipes will go here)
    </div>
  );
}

export default Food_app;
