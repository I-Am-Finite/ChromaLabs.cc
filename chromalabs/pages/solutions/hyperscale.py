import reflex as rx
from chromalabs.components.layout import base_layout

def hyperscale() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("HYPERSCALE AI", size="9", weight="bold", color="white", letter_spacing="-0.03em", margin_bottom="4"),
            rx.text("Coherent multi-rack scaling utilizing off-the-shelf telecom fiber infrastructure.", size="5", color="slate.11", max_width="700px"),
            width="100%", padding_x="6", padding_top="20", align_items="center",
        )
    )
