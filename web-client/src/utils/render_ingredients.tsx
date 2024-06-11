import Link from "next/link";
import IngredientContainer from "~/app/_components/ingredient_container";

export default function RenderIngredients() {
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
      <div className="mt-10 grid grid-cols-8 gap-x-10 gap-y-[40px]">
        {ingredients.map((ingredient) => (
          <IngredientContainer ingredient={ingredient} key={ingredient} />
        ))}
      </div>
      <Link
        href={"/recetas"}
        className="ml-auto mt-16 flex w-[20vw] cursor-pointer items-center justify-center rounded-lg bg-yellow-500"
      >
        Continuar
      </Link>
    </div>
  );
}
