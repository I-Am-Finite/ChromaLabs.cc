import reflex as rx
from chromalabs.components.layout import base_layout

def mission() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("MISSION & ROSTER", size="9", weight="bold", color="white", letter_spacing="-0.03em", margin_bottom="4"),
            rx.text(
                "To synthesize physical hardware with higher-dimensional logic, fundamentally re-architecting compute limits.",
                size="5", 
                color="slate.11", 
                weight="medium",
                max_width="700px",
                margin_bottom="12",
            ),
            rx.box(
                rx.text("[ SYS: ROSTER_PENDING ]", font_family="JetBrains Mono, monospace", color="#D4AF37", size="3"),
                border="1px solid rgba(212, 175, 55, 0.3)",
                background="rgba(212, 175, 55, 0.05)",
                padding="6",
                border_radius="4px"
            ),
            width="100%",
            padding_x="6",
            padding_top="20",
            align_items="center",
        )
    )
