import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map(recipe => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          className="block bg-white shadow p-4 rounded hover:shadow-lg transition"
        >
          <img src={recipe.image} className="w-full h-40 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.summary}</p>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
