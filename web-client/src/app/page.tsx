import Title from "~/commons/text-sections";
import RenderIngredients from "~/utils/render_ingredients";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col text-black">
      <Title>¿Qué cocinaremos hoy?</Title>
      <div className="mt-auto h-[80vh] w-screen rounded-t-[80px] bg-blue-100">
        <div className="h-full px-[80px] py-10 text-xl">
          <p>Selecciona los ingredientes que tengas disponible</p>
          <RenderIngredients />
        </div>
      </div>
    </main>
  );
}
