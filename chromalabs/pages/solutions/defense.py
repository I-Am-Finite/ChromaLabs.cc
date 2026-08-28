import reflex as rx
from chromalabs.components.layout import base_layout

def defense() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("DEFENSE & AEROSPACE", size="9", weight="bold", color="white", letter_spacing="-0.03em", margin_bottom="4"),
            rx.text(
                "Deterministic, kinetic logic processing for the tactical edge.",
                size="5", 
                color="slate.11", 
                weight="medium",
                max_width="700px",
                margin_bottom="8",
            ),
            rx.grid(
                rx.box(
                    rx.heading("SEA & UNDERSEA", size="4", color="white", margin_bottom="2"),
                    rx.text("Acoustic sensor fusion processing in SWaP-constrained UUV platforms.", color="slate.11", size="2"),
                    padding="6",
                    border="1px solid rgba(255,255,255,0.1)",
                    background="rgba(255,255,255,0.02)"
                ),
                rx.box(
                    rx.heading("LAND & TACTICAL", size="4", color="white", margin_bottom="2"),
                    rx.text("Man-portable HPC nodes delivering sub-millisecond object detection.", color="slate.11", size="2"),
                    padding="6",
                    border="1px solid rgba(255,255,255,0.1)",
                    background="rgba(255,255,255,0.02)"
                ),
                rx.box(
                    rx.heading("AIR & AUTONOMY", size="4", color="white", margin_bottom="2"),
                    rx.text("UAS integration for real-time trajectory plotting without cloud reliance.", color="slate.11", size="2"),
                    padding="6",
                    border="1px solid rgba(255,255,255,0.1)",
                    background="rgba(255,255,255,0.02)"
                ),
                columns="3",
                spacing="8",
                width="100%",
                max_width="1200px",
            ),
            width="100%",
            padding_x="6",
            padding_top="20",
            align_items="center",
        )
    )
