import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      setError("All fields required");
      return;
    }
    setError("");
    alert("Recipe submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-xl mx-auto space-y-4">
      {error && <p className="text-red-500">{error}</p>}

      <input
        placeholder="Title"
        className="w-full p-2 border rounded"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Ingredients"
        className="w-full p-2 border rounded h-28"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
      />

      <textarea
        placeholder="Steps"
        className="w-full p-2 border rounded h-28"
        value={steps}
        onChange={e => setSteps(e.target.value)}
      />

      <button className="w-full bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
