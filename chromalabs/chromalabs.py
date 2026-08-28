import reflex as rx

from .pages import index, technology, mission

app = rx.App(
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
    ],
    style={
        "font_family": "Inter, sans-serif",
        ".reflex-watermark": {"display": "none !important"},
        "#reflex-connection-error": {"display": "none !important"},
    },
    overlay_component=rx.fragment(),
)
app.add_page(index, route="/", title="Chroma Labs", image="/logo.svg")
app.add_page(technology, route="/technology", title="Technology | Chroma Labs")
app.add_page(mission, route="/mission", title="Mission | Chroma Labs")
