import networkx as nx
from networkx.readwrite import json_graph
import io
from graph_functions import AñadirNodos, GenerarConexiones

G = nx.Graph()

# Ingredientes
ingredientes = ["Pan",
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
                "Cubos de caldo de pollo"] 

AñadirNodos(G, ingredientes, "ingredientes")

# Recetas disponibles por el momento
recetas = [
        "Sandwich de atun", 
        "Ensalada de pollo", 
        "Wrap de jamon y queso", 
        "Ensalada de atun", 
        "Tacos de carne",
        "Wrap de pollo", 
        "Pollo empanizado", 
        "Carne molida con arroz", 
        "Arroz con pollo",
        "Enchiladas de pollo"]

AñadirNodos(G, recetas, "recetas")

# Definiendo las conexiones usando bucles
conexiones = []

#Sandwich de atun
GenerarConexiones(conexiones, ingredientes, recetas, 0, range(4))
# Ensalda de pollo 
GenerarConexiones(conexiones, ingredientes, recetas, 1, [4, 5, 3, 6])
# Wrap de jamon y queso
GenerarConexiones(conexiones, ingredientes, recetas, 2, [7, 8, 9, 3])
# Ensalada de atun
GenerarConexiones(conexiones, ingredientes, recetas, 3, [1, 3, 6, 2])
# Tacos de carne
GenerarConexiones(conexiones, ingredientes, recetas, 4, [10, 11, 12, 5, 13])
# Wrap de pFollo
GenerarConexiones(conexiones, ingredientes, recetas, 5, [7, 4, 5, 3, 6, 2])
# Pollo empanizado
GenerarConexiones(conexiones, ingredientes, recetas, 6, [4, 14, 15, 5, 16])
# Carne molida con arroz
GenerarConexiones(conexiones, ingredientes, recetas, 7, [11, 5, 17, 12])
# Arroz con pollo
GenerarConexiones(conexiones, ingredientes, recetas, 8, [17, 4, 12, 18, 5])
# Enchiladas de pollo
GenerarConexiones(conexiones, ingredientes, recetas, 9, [10, 4, 5, 13, 9, 12])

for i in range(len(conexiones)): 
    G.add_edges_from(conexiones[i])

nodos = list(G.nodes)
relaciones = list(G.edges)
grados = list(G.degree())
excentricidades =  nx.eccentricity(G)
radio = nx.radius(G)
diametro = nx.diameter(G)
centros = list(nx.center(G))
periferias = list(nx.periphery(G))

layout = nx.spring_layout(G, k=0.20, iterations=20)
RenderGraphImage = nx.draw(G, node_color="white", font_color="black", node_size=800, font_size=4, with_labels=True)
