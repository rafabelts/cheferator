from typing import Union
from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
# standard python types
from pydantic import BaseModel
from graph import G, recetas, RenderGraphImage, nodos, relaciones, grados, excentricidades, radio, diametro, centros, periferias
import matplotlib.pyplot as plt
import io

from graph_functions import BuscarRecetas

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3000",
    "https://cheferator.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
    return BuscarRecetas(G, q.split(","), recetas)

# Ruta para obtener información sobre el grafo
@app.get("/grafo/info")
async def get_graph_info():
    nodes = G.number_of_nodes()
    edges = G.number_of_edges()
    return {"nodos": nodes, "relaciones": edges}

# Ruta para obtener los nodos del grafo
@app.get("/grafo/nodos")
async def get_graph_nodes():
    return {"nodes": nodos}

@app.get("/grafo/relaciones")
async def get_graph_edges():
    return {"nodes": relaciones}

@app.get("/grafo/grados")
async def get_graph_grades():
    return {"grados": grados}

@app.get("/grafo/excentricidades")
async def get_graph_eccentricity():
    return {"excentricidades": excentricidades}

@app.get("/grafo/radio")
async def get_graph_radius():
    return {"radio": radio}

@app.get("/grafo/diametro")
async def get_graph_diameter():
    return {"grados": diametro}

@app.get("/grafo/centros")
async def get_graph_centers():
    return {"centros": centros}

@app.get("/grafo/periferias")
async def get_graph_periphery():
    return {"periferias": periferias}


# Ruta para obtener las conexiones del grafo
@app.get("/grafo/conexiones")
async def get_graph_edges():
    edges = list(G.edges())
    return {"edges": edges}
