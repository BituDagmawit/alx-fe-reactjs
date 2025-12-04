import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.filteredRecipes.length ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}
        >
          <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
