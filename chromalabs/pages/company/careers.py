import reflex as rx
from chromalabs.components.layout import base_layout

def careers() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("CAREERS", size="9", weight="bold", color="white", letter_spacing="-0.03em", margin_bottom="4"),
            rx.text("Join the engineers re-architecting compute limits.", size="5", color="slate.11", max_width="700px"),
            width="100%", padding_x="6", padding_top="20", align_items="center",
        )
    )
