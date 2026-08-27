import reflex as rx

from .pages import index, technology, mission

app = rx.App(
    theme=rx.theme(appearance="dark", has_background=True, radius="none", accent_color="gray"),
)

app.add_page(index, route="/")
app.add_page(technology, route="/technology")
app.add_page(mission, route="/mission")
