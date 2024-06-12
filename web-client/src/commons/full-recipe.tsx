import Title from "./text-sections";

export default function FullRecipe(props: { recipeID: string }) {
  const recipe = [
    {
      title: "Tacos de carne asada",
      time: "1 hora",
      ingredients:
        "1 kg de carne asada, 1 cebolla, 1 manojo de cilantro, 1 limón, 1 kg de tortillas",
      steps: [
        "Corta la carne en tiras delgadas",
        "Pica la cebolla y el cilantro",
        "Calienta las tortillas en un comal",
        "Arma los tacos con la carne, cebolla y cilantro",
        "Acompaña con limón y salsa al gusto",
      ],
    },
  ];

  return (
    <div className="px-10 py-8">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex h-[20vh] w-full rounded-2xl bg-blue-600 md:h-[10vh] md:w-[10vh]"></div>
        <Title isCentered={true}>{recipe[0].title}</Title>
      </div>
      <div className="flex flex-col gap-5 text-balance">
        <p>Tiempo de preparación: {recipe[0].time}</p>
        <p>Ingredientes: {recipe[0].ingredients}</p>
        <p>¿Cómo hacerlo?</p>
        <ol type="1">
          {recipe[0].steps.map((step, i) => (
            <li key={i}>{`${i + 1}. ${step}`}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
