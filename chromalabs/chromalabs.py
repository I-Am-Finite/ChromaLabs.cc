import reflex as rx

from chromalabs.pages.index import index
from chromalabs.pages.products.hardware import hardware
from chromalabs.pages.solutions.defense import defense
from chromalabs.pages.company.mission import mission

app = rx.App(
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
    ],
    style={
        "font_family": "Inter, sans-serif",
    },
    head_components=[
        rx.el.link(rel="icon", href="/logo.svg", type_="image/svg+xml"),
    ],
)

app.add_page(index, route="/", title="Higher Dimensional HPC and Defense Research Lab | Chroma Labs", image="/logo.svg")
app.add_page(hardware, route="/products/hardware", title="Photonic Hardware | Chroma Labs", image="/logo.svg")
app.add_page(defense, route="/solutions/defense", title="Defense Solutions | Chroma Labs", image="/logo.svg")
app.add_page(mission, route="/company/mission", title="Mission | Chroma Labs", image="/logo.svg")
