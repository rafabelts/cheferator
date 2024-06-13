"use client";
import Link from "next/link";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { useAppData } from "~/context/context";

export default function RenderIngredients() {
  const context = useAppData();
  const [ingredientsSelected, setIngredientsSelected] = React.useState([]);

  async function searchRecipes(ingredientsAvailable: Array<string>) {
    try {
      const ingredientsSTR = ingredientsAvailable.join(",");
      console.log(ingredientsSTR);

      const response = await fetch(
        `https://cheferator-api.vercel.app/obtener-receta?q=${ingredientsSTR}`,
      );

      if (!response.ok) {
        throw new Error("Error al buscar recetas");
      }

      const data = await response.json();
      context?.updateRecipes(data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }

  const ingredients = [
    "Pan",
    "Atun",
    "Mayonesa",
    "Lechuga",
    "Pollo",
    "Sal",
    "Tomate",
    "Tortilla de harina",
    "Jamon",
    "Queso",
    "Tortilla",
    "Carne molida",
    "Cebolla",
    "Salsa",
    "Pan molido",
    "Huevo",
    "Aceite",
    "Arroz",
    "Cubos de caldo de pollo",
  ];

  return (
    <div>
      <ToggleGroup
        type="multiple"
        className="mt-10 grid grid-cols-3 gap-x-4 gap-y-[40px] md:grid-cols-8 md:gap-x-10"
        onValueChange={(value) => setIngredientsSelected(value)}
      >
        {ingredients.map((ingredient) => (
          <ToggleGroupItem
            key={ingredient}
            value={ingredient}
            className="
            text-secondary_text
            hover:bg-ingredients_container/95
            h-[12vh]
            w-[12vh]
            cursor-pointer
            rounded-xl
            bg-container
            font-bold
            md:h-[15vh]
            md:w-[15vh]"
          >
            {ingredient}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      {ingredientsSelected.length === 0 ? (
        <></>
      ) : (
        <Link
          onClick={async () => await searchRecipes(ingredientsSelected)}
          href={"/recetas"}
          className="
      ml-auto
      mt-16
      flex
      w-full
      cursor-pointer
      items-center
      justify-center
      rounded-lg
      bg-button_bg
      p-2
      font-bold
      "
        >
          Continuar
        </Link>
      )}
    </div>
  );
}
