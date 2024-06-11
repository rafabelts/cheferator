export default function IngredientContainer(props: { ingredient: string }) {
  return (
    <div className="h-[15vh] w-[15vh] cursor-pointer rounded-xl bg-red-500 hover:bg-red-500/90">
      {props.ingredient}
    </div>
  );
}
