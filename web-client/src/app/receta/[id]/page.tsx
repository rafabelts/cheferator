import BackButton from "~/commons/back-button";
import FullRecipe from "~/commons/full-recipe";

export default function Recipe({
  params: { id: recipeID },
}: {
  params: { id: string };
}) {
  const recipe = recipeID;

  return (
    <div>
      <BackButton moveTo="/recetas" />
      <FullRecipe recipeID={recipe} />
    </div>
  );
}
