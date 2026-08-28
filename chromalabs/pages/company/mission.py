import reflex as rx
from chromalabs.components.layout import base_layout

def mission() -> rx.Component:
    return base_layout(
        rx.box(
            # Background Ambient Orb
            rx.box(
                position="absolute", top="15%", left="50%", transform="translateX(-50%)",
                width="80vw", height="80vw", max_width="800px", max_height="800px",
                background="radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
                z_index="-1", filter="blur(60px)", border_radius="50%",
            ),
            rx.vstack(
                rx.text(
                    "Our Directive", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.02em", line_height="1.0",
                    text_align="center", margin_bottom="6", color="white",
                    font_family="'EB Garamond', 'Playfair Display', serif"
                ),
                rx.text(
                    "ERADICATING HUMAN ABSTRACTION",
                    color="#D4AF37", font_size="1rem", font_weight="bold", letter_spacing="0.2em", text_align="center", margin_bottom="8", margin_top="4"
                ),
                rx.text(
                    "Forcing machines to parse base-2 binary is an architectural failure. The entire computer industry is bottlenecked by the assumption that we must be able to read everything going on at the bottom layer. "
                    "We map logic natively to volumetric geometry and photonic arrays. By eradicating these human abstract inefficiencies, we are unlocking true computational physics.",
                    font_size="1.25rem", color="slate.11", max_width="800px", text_align="center", margin_bottom="16", line_height="1.8",
                ),
                width="100%", padding_x="6", padding_top="16", padding_bottom="32", align_items="center",
            ),
            width="100%", position="relative", flex_grow="1",
            padding_top="120px",
        )
    )

