import reflex as rx
from chromalabs.components.layout import base_layout

def defense() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("Defense Solutions", size="9", weight="medium", color="white", letter_spacing="-0.04em", margin_bottom="4"),
            rx.text(
                "Autonomous targeting and intelligence processing.",
                size="5", 
                color="slate.11", 
                max_width="700px",
                margin_bottom="12",
            ),
            rx.grid(
                rx.vstack(
                    rx.heading("Air & Autonomy", size="4", color="white", margin_bottom="2"),
                    rx.text("Autonomous targeting pipelines driven by novel neural network models. GPS-denied pathfinding and spatial inferencing.", color="slate.11", size="3"),
                ),
                rx.vstack(
                    rx.heading("Land & Tactical", size="4", color="white", margin_bottom="2"),
                    rx.text("Deploying proprietary computing architecture directly to the tactical edge for real-time target acquisition.", color="slate.11", size="3"),
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
