import BackButton from "~/commons/back-button";
import Title from "~/commons/text-sections";
import RecipeContainer from "../_components/recipe_container";

function RenderRecipes() {
  const recipe = [
    {
      id: 1,
      title: "Ensalada de frutas",
      description: "Ensalada de frutas con yogurt",
    },
    {
      id: 2,
      title: "Sopa de verduras",
      description: "Sopa de verduras con pollo",
    },
    {
      id: 3,
      title: "Pasta con salsa de tomate",
      description: "Pasta con salsa de tomate y albahaca",
    },
  ];

  return (
    <div className="grid grid-cols-2 px-5 ">
      {recipe.map((recipe) => (
        <RecipeContainer
          path={`/receta/${recipe.id}`}
          title={recipe.title}
          description={recipe.description}
          key={recipe.title}
        />
      ))}
    </div>
  );
}

export default function Recipes() {
  return (
    <div>
      <BackButton moveTo="/" />
      <Title>Podrías cocinar</Title>
      <RenderRecipes />
    </div>
  );
}
