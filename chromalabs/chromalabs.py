import reflex as rx

from .pages import index, technology, mission

app = rx.App(
    theme=rx.theme(
        appearance="dark", 
        has_background=True, 
        radius="none", 
        accent_color="blue",
        gray_color="slate",
    ),
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
    ],
    style={
        "font_family": "Inter, sans-serif",
    }
)

app.add_page(index, route="/")
app.add_page(technology, route="/technology")
app.add_page(mission, route="/mission")
