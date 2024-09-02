import { useEffect, useState } from "react";

function App() {
  const [recipeData, setRecipeData] = useState();

  const url = `https://dummyjson.com/recipes`;

  useEffect(() => {
    async function getAllRecipies() {
      let res = await fetch(url);
      let data = await res.json();
      setRecipeData(data);
    }
    getAllRecipies();
  }, []);

  console.log("Data: ", recipeData);

  return (
    <>
      <h1>Fetch eksempel</h1>
      {recipeData &&
        recipeData.recipes.map((item) => {
          return (
            <div key={item.id}>
              <p>Recipe name: {item.name}</p>
              <p>Difficulty: {item.difficulty}</p>
            </div>
          );
        })}
    </>
  );
}

export default App;
