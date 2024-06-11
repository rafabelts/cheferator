import RenderIngredients from "~/utils/render_ingredients";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col text-black">
      <h1 className="p-10 text-4xl">¿Qué cocinaremos hoy?</h1>
      <div className="mt-auto h-[80vh] w-screen rounded-t-[80px] bg-blue-100">
        <div className="h-full px-20 py-10 text-xl">
          <p>Selecciona los ingredientes que tengas disponible</p>
          <RenderIngredients />
        </div>
      </div>
    </main>
  );
}
