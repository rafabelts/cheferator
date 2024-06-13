"use client";
import BackButton from "~/commons/back-button";
import Title from "~/commons/text-sections";
import RecipeContainer from "../_components/recipe_container";
import { useAppData } from "~/context/context";
import { recipesData } from "~/utils/recipes-data";

function RenderRecipes() {
  const context = useAppData();

  return (
    <div className="grid grid-cols-2 px-5 ">
      {context.recipes.map((recipe) => (
        <RecipeContainer
          path={`/receta/${recipesData[recipe]?.title}`}
          title={recipesData[recipe]?.title}
          description={recipesData[recipe]?.description}
          key={recipe}
        />
      ))}
      {/*      {recipe.map((recipe) => (
      <RecipeContainer
        path={`/receta/${recipe.id}`}
        title={recipe.title}
        description={recipe.description}
        key={recipe.title}
      /> * /}
    ))}*/}
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
