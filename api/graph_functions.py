def AñadirNodos(G, nodos, tipo):
    G.add_nodes_from(nodos, type=tipo)

def GenerarConexiones(conexiones, ingredientes, recetas, indice_receta, rango_ingredientes):
    conexiones_receta = [ (ingredientes[i], recetas[indice_receta]) for i in rango_ingredientes]
    conexiones.append(conexiones_receta)

def BuscarRecetas(G, ingredientes_disponibles):
    recetas_posibles = []

    # Obtengo las recetas disponibles 
    recetas = [n for n in G.nodes() if n not in ingredientes_disponibles]
    
    # Se itera en las recetas
    for receta in recetas:
        # Se obtienen los nodos ingredientes de la receta
        ingredientes_receta = set(G.neighbors(receta))
        # Se comprueba si los ingredientes disponibles coinciden con los de la receta
        if set(ingredientes_disponibles).issubset(ingredientes_receta):
            # Se agrega la recomendacion
            recetas_posibles.append(receta)
    
    return recetas_posibles

