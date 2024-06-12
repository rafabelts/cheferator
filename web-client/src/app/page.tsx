import Title from "~/commons/text-sections";
import RenderIngredients from "~/utils/render_ingredients";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col text-black">
      <Title>¿Qué cocinaremos hoy?</Title>
      <div className="mt-auto h-fit w-screen rounded-t-[40px] bg-[#FDFCF4] md:rounded-t-[80px]">
        <div className="text-primary_text h-full px-5 py-10 text-xl md:px-[80px]">
          <p>Selecciona los ingredientes que tengas disponible</p>
          <RenderIngredients />
        </div>
      </div>
    </main>
  );
}
