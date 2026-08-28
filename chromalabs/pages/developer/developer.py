import reflex as rx
from chromalabs.components.layout import base_layout

def developer() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("Developer & API", size="9", weight="medium", color="white", letter_spacing="-0.04em", margin_bottom="4"),
            rx.text(
                "Access the Chroma Architecture.",
                size="5", 
                color="slate.11", 
                max_width="700px",
                margin_bottom="12",
            ),
            rx.box(
                rx.vstack(
                    rx.heading("System Architecture Status", size="4", color="white", margin_bottom="2"),
                    rx.text(
                        "Our proprietary coding library, optimizing compiler, and the official Chroma SDK are currently under active development. "
                        "Full developer documentation, API endpoints, and hardware integration guides will be served here upon public release.",
                        color="slate.11",
                        size="3",
                        line_height="1.6"
                    ),
                    rx.button("Notify Me", bg="white", color="black", size="2", margin_top="4"),
                    align_items="flex-start",
                ),
                border="1px solid rgba(255, 255, 255, 0.1)",
                background="rgba(255, 255, 255, 0.02)",
                padding="8",
                width="100%",
                max_width="800px",
            ),
            width="100%",
            padding_x="6",
            padding_top="20",
            align_items="center",
        )
    )
