import { useEffect, useState } from "react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map(recipe => (
        <div
          key={recipe.id}
          className="bg-white shadow rounded-lg p-4 hover:shadow-xl hover:scale-105 transition"
        >
          <img src={recipe.image} className="w-full rounded" />
          <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
          <p className="text-gray-600 mt-1">{recipe.summary}</p>
          <a
            href={`/recipe/${recipe.id}`}
            className="text-blue-500 mt-3 inline-block"
          >
            View Details →
          </a>
        </div>
      ))}
    </div>
  );
}
