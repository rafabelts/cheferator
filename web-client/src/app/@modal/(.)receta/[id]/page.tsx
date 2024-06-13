import { Modal } from "./modal";
import FullRecipe from "~/commons/full-recipe";

export default function RecipeModal({
  params: { id: recipe },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullRecipe recipe={recipe} />
    </Modal>
  );
}
