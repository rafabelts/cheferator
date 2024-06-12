from typing import Union
from fastapi import FastAPI, Response
# standard python types
from pydantic import BaseModel
from graph import G, graph_image
import matplotlib.pyplot as plt
import io

app = FastAPI()

#@app.put("/send_ingredients")

@app.get("/")
async def graph():
    graph_image
    # Guardar el gráfico en un buffer de bytes
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png', dpi=300)
    buffer.seek(0)
    # Devolver la imagen como respuesta
    return Response(content=buffer.getvalue(), media_type="image/png")

# Ruta para obtener información sobre el grafo
@app.get("/graph/info")
async def get_graph_info():
    nodes = G.number_of_nodes()
    edges = G.number_of_edges()
    return {"nodes": nodes, "edges": edges}

# Ruta para obtener los nodos del grafo
@app.get("/graph/nodes")
async def get_graph_nodes():
    nodes = list(G.nodes())
    return {"nodes": nodes}

# Ruta para obtener los enlaces del grafo
@app.get("/graph/edges")
async def get_graph_edges():
    edges = list(G.edges())
    return {"edges": edges}
