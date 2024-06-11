import { Modal } from "./modal";
import FullRecipe from "~/commons/full-recipe";

export default function RecipeModal({
  params: { id: recipeID },
}: {
  params: { id: string };
}) {
  const recipe = recipeID;

  return (
    <Modal>
      <FullRecipe recipeID={recipe} />
    </Modal>
  );
}
