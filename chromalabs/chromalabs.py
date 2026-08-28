import reflex as rx

from chromalabs.pages.index import index
from chromalabs.pages.capabilities.capabilities import capabilities
from chromalabs.pages.products.wearables import wearables
from chromalabs.pages.solutions.defense import defense
from chromalabs.pages.solutions.hyperscale import hyperscale
from chromalabs.pages.company.mission import mission
from chromalabs.pages.company.careers import careers
from chromalabs.pages.company.contact import contact
from chromalabs.pages.developer.developer import developer

app = rx.App(
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap",
        "/style.css",
    ],
    style={
        "font_family": "Inter, sans-serif",
    },
    head_components=[
        rx.el.link(rel="icon", href="/logo.svg", type_="image/svg+xml"),
        rx.el.link(rel="stylesheet", href="/style.css"),
    ],
)

app.add_page(index, route="/", title="Higher Dimensional Compute | Chroma Labs", image="/logo.svg")
app.add_page(capabilities, route="/capabilities", title="Capabilities | Chroma Labs", image="/logo.svg")
app.add_page(wearables, route="/products/wearables", title="Wearables & Tech Armor | Chroma Labs", image="/logo.svg")
app.add_page(defense, route="/solutions/defense", title="Defense Solutions | Chroma Labs", image="/logo.svg")
app.add_page(hyperscale, route="/solutions/hyperscale", title="Hyperscale AI | Chroma Labs", image="/logo.svg")
app.add_page(mission, route="/company/mission", title="Mission | Chroma Labs", image="/logo.svg")
app.add_page(careers, route="/company/careers", title="Careers | Chroma Labs", image="/logo.svg")
app.add_page(contact, route="/contact", title="Contact | Chroma Labs", image="/logo.svg")
app.add_page(developer, route="/developer", title="Developer | Chroma Labs", image="/logo.svg")
