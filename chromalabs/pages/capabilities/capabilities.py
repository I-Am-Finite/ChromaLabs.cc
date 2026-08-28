import reflex as rx
from chromalabs.components.layout import base_layout

def capabilities() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("Research & Algorithms", size="9", weight="medium", color="white", letter_spacing="-0.04em", margin_bottom="4"),
            rx.text(
                "Hardware-accelerated mathematical frameworks and novel neural network geometries.",
                size="5", 
                color="slate.11", 
                max_width="700px",
                margin_bottom="12",
            ),
            rx.grid(
                rx.vstack(
                    rx.heading("Tensor Routing", size="4", color="white", margin_bottom="2"),
                    rx.text("Spatial routing algorithms that bypass standard memory walls via direct optical paths.", color="slate.11", size="3"),
                ),
                rx.vstack(
                    rx.heading("Recursive Compilation", size="4", color="white", margin_bottom="2"),
                    rx.text("Compiler architectures designed specifically to collapse recursive combinators.", color="slate.11", size="3"),
                ),
                rx.vstack(
                    rx.heading("Geometric Inferencing", size="4", color="white", margin_bottom="2"),
                    rx.text("On-board spatial inferencing models for zero-latency tactical environments.", color="slate.11", size="3"),
                ),
                columns="3",
                spacing="8",
                width="100%",
                max_width="1000px",
            ),
            width="100%",
            padding_x="6",
            padding_top="20",
            align_items="center",
        )
    )
