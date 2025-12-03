import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({}); // required
  const validate = () => {                 // required
    const newErrors = {};
    if (!title) newErrors.title = "Required";
    if (!ingredients) newErrors.ingredients = "Required";
    if (!steps) newErrors.steps = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Submitted:", { title, ingredients, steps });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border p-2"
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients"
        className="w-full border p-2"
      />
      {errors.ingredients && (
        <p className="text-red-500 text-sm">{errors.ingredients}</p>
      )}

      <textarea
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        placeholder="Preparation steps"
        className="w-full border p-2"
      />
      {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}

      <button className="bg-blue-500 text-white p-2 rounded w-full">
        Submit
      </button>
    </form>
  );
}

export default AddRecipeForm;
