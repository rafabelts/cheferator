"use client";
import Link from "next/link";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

export default function RenderIngredients() {
  const [ingredientsSelected, setIngredientsSelected] = React.useState([]);

  const ingredients = [
    "pan",
    "atun",
    "mayonesa",
    "lechuga",
    "pollo",
    "sal",
    "tomate",
    "tortilla de harina",
    "jamon",
    "queso",
    "tortilla",
    "carne molida",
    "cebolla",
    "salsa",
    "pan molido",
    "huevo",
    "aceite",
    "arroz",
    "cubos de caldo de pollo",
  ];

  return (
    <div>
      <ToggleGroup
        type="multiple"
        className="mt-10 grid grid-cols-8 gap-x-10 gap-y-[40px]"
        onValueChange={(value) => setIngredientsSelected(value)}
      >
        {ingredients.map((ingredient) => (
          <ToggleGroupItem
            key={ingredient}
            value={ingredient}
            className="h-[15vh] w-[15vh] cursor-pointer rounded-xl bg-red-500 hover:bg-red-500/90"
          >
            {ingredient}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      {ingredientsSelected.length === 0 ? (
        <></>
      ) : (
        <Link
          href={"/recetas"}
          className="ml-auto mt-16 flex w-[20vw] cursor-pointer items-center justify-center rounded-lg bg-yellow-500"
        >
          Continuar
        </Link>
      )}
    </div>
  );
}
