import networkx as nx

G = nx.Graph()

ingredients = ["spaghetti", "cheese", "salt", "chicken", "lettuce", "tomato", "olive oil", "pepper", "rice", "onion", "chicken broth", "tortilla", "ground beef", "sauce", "eggs", "spinach", "garlic", "cucumber", "olives", "brocoli", "carrot", "bell peppers", "soja", "mayonnaise", "zucchini"]

recipes = ["pasta", "chicken salad", "chicken w rice", "beef tacos", "spinach frittata", "tomato soup", "greek salad", "sauteed vegetables", "chicken wrap", "grilled chicken"]

G.add_nodes_from(ingredients)

nx.draw(G, with_labels=True)