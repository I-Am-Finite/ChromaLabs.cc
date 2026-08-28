import reflex as rx
from chromalabs.components.layout import base_layout

def wearables() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("Wearables & Tech Armor", size="9", weight="medium", color="white", letter_spacing="-0.04em", margin_bottom="4"),
            rx.text(
                "Augmented Reality and localized on-man processing for tactical dominance.",
                size="5", 
                color="slate.11", 
                max_width="700px",
                margin_bottom="12",
            ),
            rx.grid(
                rx.vstack(
                    rx.heading("AR Vision Systems", size="4", color="white", margin_bottom="2"),
                    rx.text("Heads-up visual data streams processed locally without cloud offloading.", color="slate.11", size="3"),
                ),
                rx.vstack(
                    rx.heading("Kinetic Processing", size="4", color="white", margin_bottom="2"),
                    rx.text("Ultra-low SWaP footprint enabling continuous operation in austere environments.", color="slate.11", size="3"),
                ),
                columns="2",
                spacing="8",
                width="100%",
                max_width="800px",
            ),
            width="100%",
            padding_x="6",
            padding_top="20",
            align_items="center",
        )
    )
