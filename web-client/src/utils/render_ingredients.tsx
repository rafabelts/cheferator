"use client";
import Link from "next/link";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

export default function RenderIngredients() {
  const [ingredientsSelected, setIngredientsSelected] = React.useState([]);

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
            bg-container
            text-secondary_text
            hover:bg-ingredients_container/95
            h-[12vh]
            w-[12vh]
            cursor-pointer
            rounded-xl
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
          href={"/recetas"}
          className="
          bg-button_bg
          ml-auto
          mt-16
          flex
          w-full
          cursor-pointer
          items-center
          justify-center
          rounded-lg
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
