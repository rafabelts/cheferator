from typing import Union
from fastapi import FastAPI, Response
# standard python types
from pydantic import BaseModel
from graph import G, RenderGraphImage 
import matplotlib.pyplot as plt
import io

from graph_functions import BuscarRecetas

app = FastAPI()

@app.get("/")
async def graph():
    RenderGraphImage 
    # Guardar el gráfico en un buffer de bytes
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png', dpi=300)
    buffer.seek(0)
    # Devolver la imagen como respuesta
    return Response(content=buffer.getvalue(), media_type="image/png")

# Ruta para obtener las recetas recomendadas
@app.get("/obtener-receta")
async def get_recipes(q:Union[str, None]):
    return { "recetas": BuscarRecetas(G, q.split(","))}

# Ruta para obtener información sobre el grafo
@app.get("/grafo/info")
async def get_graph_info():
    nodes = G.number_of_nodes()
    edges = G.number_of_edges()
    return {"nodes": nodes, "edges": edges}

# Ruta para obtener los nodos del grafo
@app.get("/grafo/nodos")
async def get_graph_nodes():
    nodes = list(G.nodes())
    return {"nodes": nodes}

# Ruta para obtener las conexiones del grafo
@app.get("/grafo/conexiones")
async def get_graph_edges():
    edges = list(G.edges())
    return {"edges": edges}
