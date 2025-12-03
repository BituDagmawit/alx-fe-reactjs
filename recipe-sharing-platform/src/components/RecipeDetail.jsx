import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then(res => res.json())
      .then(data => setRecipe(data.find(r => r.id == id)));
  }, [id]);

  if (!recipe) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img src={recipe.image} className="w-full rounded" />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>

      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <p className="text-gray-700">• Add your ingredients here</p>

      <h2 className="text-xl font-semibold mt-4">Instructions</h2>
      <p className="text-gray-700">• Add step-by-step instructions here</p>
    </div>
  );
}
