import reflex as rx
from chromalabs.components.layout import base_layout

def mission() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text(
                    "MISSION DIRECTIVE",
                    font_size="0.8rem", weight="bold", color="#DFBC61", letter_spacing="0.15em",
                    class_name="animate-fade-up", text_align="center"
                ),
                rx.text(
                    "Eradicating Human Abstraction.", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    color="white", font_family="'EB Garamond', 'Playfair Display', serif",
                    class_name="animate-fade-up delay-100", margin_bottom="2", text_align="center"
                ),
                rx.text(
                    "Architecting the Post-Digital Era.", 
                    font_size=["2rem", "3rem", "4rem"], weight="bold", letter_spacing="-0.02em", line_height="1.0",
                    color="slate.11", font_family="'EB Garamond', 'Playfair Display', serif",
                    class_name="animate-fade-up delay-200", margin_bottom="8", text_align="center"
                ),
                rx.text(
                    "Forcing machines to parse base-2 binary is an architectural failure. The entire industry is bottlenecked by the assumption that humans must read the bottom layer. By mapping logic natively to volumetric geometry and photonic arrays, we strip away the planar illusion and unlock true computational physics.",
                    font_size="1.25rem", color="slate.11", max_width="800px", text_align="center", margin_bottom="16", line_height="1.8",
                    class_name="animate-fade-up delay-300"
                ),
                width="100%",
                max_width="1200px",
                align_items="center", justify_content="center", min_height="calc(100vh - 200px)",
                padding_x=["4", "8", "12"],
            ),
            width="100%",
            min_height="80vh",
            display="flex",
            justify_content="center"
        )
    )