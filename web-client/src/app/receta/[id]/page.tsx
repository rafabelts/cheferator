import BackButton from "~/commons/back-button";
import FullRecipe from "~/commons/full-recipe";

export default function Recipe({
  params: { id: recipe },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <BackButton moveTo="/" />
      <FullRecipe recipe={recipe} />
    </div>
  );
}
