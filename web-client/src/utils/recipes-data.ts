type RecipeDataType = Record<
  string,
  {
    dish_image_url: string;
    title: string;
    description: string;
    time: string;
    ingredients: string;
    steps: Array<string>;
  }
>;

export const recipesData: RecipeDataType = {
  "Sandwich de atun": {
    dish_image_url: "",
    title: "Sandwich de atun",
    description:
      "Un clásico renovado con pan fresco, atún jugoso, mayonesa cremosa y un toque de lechuga fresca",
    time: "10 minutos",
    ingredients: "Pan, Atún, Mayonesa, Lechuga (opcional)",
    steps: [
      "Abrir una lata de atún y escurrir el líquido.",
      "Mezclar el atún con mayonesa en un bol hasta obtener una consistencia homogénea.",
      "Opcionalmente, lavar y cortar la lechuga.",
      "Colocar la mezcla de atún sobre una rebanada de pan y agregar la lechuga.",
      "Cubrir con la otra rebanada de pan y cortar el sandwich si se desea.",
    ],
  },
  "Ensalada de pollo": {
    dish_image_url:
      "Pollo tierno con crujiente lechuga y tomate, todo sazonado a la perfección",
    title: "Ensalada de pollo",
    description:
      "Pollo tierno con crujiente lechuga y tomate, todo sazonado a la perfección",
    time: "15 minutos",
    ingredients: "Pollo, Sal, Lechuga, Tomate",
    steps: [
      "Cocer o usar pollo ya cocido. Cortar el pollo en trozos pequeños.",
      "Lavar y cortar la lechuga y el tomate en trozos pequeños.",
      "Mezclar el pollo, la lechuga y el tomate en un bol grande.",
      "Sazonar con sal al gusto y mezclar bien.",
      "Servir la ensalada fría.",
    ],
  },
  "Wrap de jamon y queso": {
    dish_image_url: "",
    title: "Wrap de jamon y queso",
    description:
      "Tortilla de harina rellena de jamón, queso derretido y la frescura de la lechuga",
    time: "10 minutos",
    ingredients: "Tortilla de harina, Jamón, Queso, Lechuga(opcional)",
    steps: [
      "Calentar la tortilla de harina en un sartén o en el microondas para que sea flexible.",
      "Colocar lonchas de jamón y queso sobre la tortilla caliente.",
      "Agregar la lechuga fresca en capas.",
      "Enrollar la tortilla firmemente, cortar si se desea y servir.",
    ],
  },
  "Ensalada de atun": {
    dish_image_url: "",
    title: "Ensalada de atun",
    description:
      "Una mezcla refrescante de atún, lechuga fresca, tomate jugoso y una leve capa de mayonesa",
    time: "10 minutos",
    ingredients: "Atún, Lechuga, Tomate, Mayonesa (opcional)",
    steps: [
      "Abrir una lata de atún y escurrir el líquido.",
      "Lavar y cortar la lechuga y el tomate en trozos pequeños.",
      "Mezclar el atún, la lechuga y el tomate en un bol grande.",
      "Opcionalmente, añadir una ligera capa de mayonesa y mezclar bien.",
      "Servir la ensalada fría.",
    ],
  },
  "Tacos de carne": {
    dish_image_url: "",
    title: "Tacos de carne",
    description:
      "Tortillas rellenas de carne molida sazonada, cebolla fresca y una salsa que despierta los sentidos",
    time: "20 minutos",
    ingredients: "Tortillas, Carne molida, Cebolla, Sal, Salsa",
    steps: [
      "Cocinar la carne molida en un sartén grande hasta que esté completamente cocida.",
      "Picar finamente la cebolla y agregarla a la carne.",
      "Sazonar la carne con sal al gusto y mezclar bien.",
      "Calentar las tortillas en un sartén o en el microondas.",
      "Rellenar cada tortilla con la mezcla de carne, agregar salsa al gusto y servir caliente.",
    ],
  },
  "Wrap de pollo": {
    dish_image_url: "",
    title: "Wrap de pollo",
    description:
      "Pollo jugoso, tomate fresco y lechuga crujiente en una tortilla de harina suave y deliciosa",
    time: "15 minutos",
    ingredients: "Tortilla de harina, Pollo, Sal, Lechuga, Tomate, Mayonesa",
    steps: [
      "Cocinar el pollo a la parrilla, a la plancha o al horno hasta que esté bien cocido.",
      "Cortar el pollo en tiras finas.",
      "Lavar y cortar el tomate y la lechuga en tiras delgadas.",
      "Calentar la tortilla de harina y colocar el pollo, tomate y lechuga.",
      "Agregar una pizca de sal, enrollar firmemente y servir.",
    ],
  },
  "Pollo empanizado": {
    dish_image_url: "",
    title: "Pollo empanizado",
    description:
      "Jugosos filetes de pollo empanizados con una cobertura crujiente y dorada, listos para deleitar",
    time: "25 minutos",
    ingredients: "Pollo, Pan molido, Huevos, Sal, Aceite",
    steps: [
      "Preparar una estación de empanizado con pan molido en un plato hondo y batir los huevos en otro plato hondo.",
      "Sazonar los filetes de pollo con sal al gusto.",
      "Poner cada filete primero en el huevo batido y luego en el pan molido, asegurándose de cubrir completamente.",
      "Calentar aceite en una sartén grande y freír los filetes de pollo hasta que estén dorados y cocidos por dentro.",
      "Escurrir el exceso de grasa sobre papel absorbente y servir caliente.",
    ],
  },
  "Carne molida con arroz": {
    dish_image_url: "",
    title: "Carne molida con arroz",
    description:
      "Una combinación reconfortante de carne molida con arroz y cebolla, sazonada para satisfacer el paladar",
    time: "30 minutos",
    ingredients: "Carne molida, Arroz, Cebolla, Sal",
    steps: [
      "Cocinar la carne molida en un sartén grande hasta que esté completamente cocida.",
      "Picar finamente la cebolla y añadirla a la carne, cocinando hasta que esté transparente.",
      "Cocinar el arroz por separado según las instrucciones del paquete.",
      "Mezclar la carne molida con la cebolla y el arroz cocido en el sartén, sazonar con sal al gusto y servir caliente.",
    ],
  },
  "Arroz con pollo": {
    dish_image_url: "",
    title: "Arroz con pollo",
    description:
      "Arroz perfectamente cocido con trozos tiernos de pollo, cebolla y un toque de caldo de pollo",
    time: "35 minutos",
    ingredients: "Arroz, Pollo, Cebolla, Caldo de pollo (o Cubos), Sal",
    steps: [
      "Cocinar el arroz según las instrucciones del paquete, utilizando cubos de caldo de pollo para dar sabor.",
      "Cocinar el pollo a la parrilla, a la plancha o al horno hasta que esté completamente cocido.",
      "Cortar el pollo en trozos pequeños.",
      "Picar finamente la cebolla y sofreírla hasta que esté transparente.",
      "Mezclar el arroz cocido con el pollo, la cebolla y los cubos de caldo de pollo desmenuzados.",
      "Ajustar la sal al gusto y servir caliente.",
    ],
  },
  "Enchiladas de pollo": {
    dish_image_url: "",
    title: "Enchiladas de pollo",
    description:
      "Tortillas rellenas de pollo sazonado, cubiertas con salsa picante y queso rallado derretido para una explosión de sabores",
    time: "40 minutos",
    ingredients: "Tortilla, Pollo, Sal, Salsa, Queso, Cebolla (opcional)",
    steps: [
      "Cocinar el pollo a la parrilla, a la plancha o al horno hasta que esté bien cocido.",
      "Desmenuzar el pollo en tiras finas.",
      "Calentar las tortillas de maíz en un sartén o en el microondas para que sean flexibles.",
      "Rellenar cada tortilla con pollo desmenuzado y enrollarla.",
      "Colocar las enchiladas en un molde para horno y cubrirlas con salsa.",
      "Espolvorear queso rallado sobre las enchiladas y hornear hasta que el queso se derrita.",
      "Opcionalmente, agregar cebolla picada encima antes de servir.",
    ],
  },
};
