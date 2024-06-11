import networkx as nx
import matplotlib.pyplot as plt

G = nx.Graph()

# Ingredientes
ingredientes = ["pan",
                "atun",
                "mayonesa", 
                "lechuga", 
                "pollo", 
                "sal",
                "tomate", 
                "tortilla\nde\nharina", 
                "jamon", 
                "queso", 
                "tortilla", 
                "carne\nmolida",
                "cebolla", 
                "salsa", 
                "pan\nmolido", 
                "huevo", 
                "aceite",
                "arroz",
                "cubos de\ncaldo de\npollo"] 

# Recetas disponibles por el momento
recetas = [
        "sandwich\nde\natun", 
        "ensalada\nde\npollo", 
        "wrap de\njamon y queso", 
        "ensalada\nde\natun", 
        "tacos de\ncarne",
        "wrap\nde\npollo", 
        "pollo\nempanizado", 
        "carne\nmolida\ncon\narroz", 
        "arroz\ncon\npollo",
        "enchiladas\nde\npollo"]
    
# Definiendo las conexiones usando bucles
conexiones = []

def generar_conexiones(conexiones, indice_receta, rango_ingredientes):
    conexiones_receta = [ (ingredientes[i], recetas[indice_receta]) for i in rango_ingredientes]
    conexiones.append(conexiones_receta)

#Sandwich de atun
generar_conexiones(conexiones, 0, range(4))
# Ensalda de pollo 
generar_conexiones(conexiones, 1, [4, 5, 3, 6])
# Wrap de jamon y queso
generar_conexiones(conexiones, 2, [7, 8, 9, 3])
# Ensalada de atun
generar_conexiones(conexiones, 3, [1, 3, 6, 2])
# Tacos de carne
generar_conexiones(conexiones, 4, [10, 11, 12, 5, 13])
# Wrap de pollo
generar_conexiones(conexiones, 5, [7, 4, 5, 3, 6, 2])
# Pollo empanizado
generar_conexiones(conexiones, 6, [4, 14, 15, 5, 16])
# Carne molida con arroz
generar_conexiones(conexiones, 7, [11, 5, 17, 12])
# Arroz con pollo
generar_conexiones(conexiones, 8, [17, 4, 12, 18, 5])
# Enchiladas de pollo
generar_conexiones(conexiones, 9, [10, 4, 5, 13, 9, 12])

for i in range(len(conexiones)): 
    G.add_edges_from(conexiones[i])

nx.draw(G, node_color="red", font_color="white", node_size=800, font_size=5, with_labels=True)

plt.show()
