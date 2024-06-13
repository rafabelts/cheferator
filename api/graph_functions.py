def AñadirNodos(G, nodos, tipo):
    G.add_nodes_from(nodos, type=tipo)

def GenerarConexiones(conexiones, ingredientes, recetas, indice_receta, rango_ingredientes):
    conexiones_receta = [ (ingredientes[i], recetas[indice_receta]) for i in rango_ingredientes]
    conexiones.append(conexiones_receta)

def BuscarRecetas(G, ingredientes_disponibles,recetas):
    recetas_posibles = []
    # Iteramos en las recetas 
    for receta in recetas:
        # Obtenemos los ingredientes de las recetas
        ingredientes_receta = set(G.neighbors(receta)) 

        # Verificamos si al menos dos ingredientes disponibles están en la receta 
        if sum(ingrediente in ingredientes_receta for ingrediente in ingredientes_disponibles) >= 2:
            recetas_posibles.append(receta)

    return recetas_posibles
