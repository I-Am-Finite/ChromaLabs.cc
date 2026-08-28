import reflex as rx
from chromalabs.components.layout import base_layout


def research() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text(
                    "RESEARCH & ARCHITECTURE",
                    font_size="0.8rem", weight="bold", color="#FF0000", letter_spacing="0.15em",
                ),
                rx.text(
                    "Beyond Binary.", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    color="white", font_family="'EB Garamond', 'Playfair Display', serif"
                ),
                rx.text(
                    "Eradicating human abstraction. We map logic directly to volumetric and photonic structures, freeing machines to operate natively in geometry.",
                    font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="16", line_height="1.6",
                ),
                align_items="center",
                padding_y="24",
            ),
            width="100%",
            min_height="80vh",
        )
    )

