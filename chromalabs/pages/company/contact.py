import reflex as rx
from chromalabs.components.layout import base_layout

def contact() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("CONTACT", size="9", weight="bold", color="white", letter_spacing="-0.03em", margin_bottom="4"),
            rx.text("Engage with our architecture team.", size="5", color="slate.11", max_width="700px"),
            width="100%", padding_x="6", padding_top="20", align_items="center",
        )
    )
