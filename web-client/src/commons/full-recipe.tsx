import { recipesData } from "~/utils/recipes-data";
import Title from "./text-sections";

export default function FullRecipe(props: { recipe: string }) {
  const cleanParam = props.recipe.replace(/%20/g, " ");

  const recipe = recipesData[cleanParam];

  return (
    <div className="px-10 py-8">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex h-[20vh] w-full rounded-2xl bg-blue-600 md:h-[10vh] md:w-[10vh]"></div>
        <Title isCentered={true}>{recipe?.title}</Title>
      </div>
      <div className="flex flex-col gap-5 text-balance">
        <p>Tiempo de preparación: {recipe?.time}</p>
        <p>Ingredientes: {recipe?.ingredients}</p>
        <p>¿Cómo hacerlo?</p>
        <ol type="1">
          {recipe?.steps.map((step, i) => (
            <li key={i}>{`${i + 1}. ${step}`}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
