import { useState } from "react";
import "./App.css";

function Food_app() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState(null);

  const handleChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipe();
  };

  const getRecipe = async () => {
    const api_key = "7076ba7d49794b4f868f5d5f3260d659";
    const api_url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=6&apiKey=${api_key}`;

    try {
      let response = await fetch(api_url);
      if (!response.ok) throw new Error("Something went wrong");
      else {
        let data = await response.json();
        setRecipes(data);
        console.log(data);
      }
    } catch (error) {
      // TODO: store the error info in a state variable
      console.log("Server error: ", error);
    }
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

      {recipes && (
        <div class = "recipe-results">
          {recipes.map((r) => (
            <div class="recipe" key={r.id}>
              {r.title}
              <div class = "img-container">
                <img src={r.image} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Food_app;
