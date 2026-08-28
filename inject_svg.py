
import sys

with open("grid_code.html", "r") as f:
    svg_content = f.read()

index_code = f"""import reflex as rx
from chromalabs.components.layout import base_layout

def index() -> rx.Component:
    return base_layout(
        rx.box(
            # The fully snaking, grid-locked golden SVG traces
            rx.html("""{svg_content}"""),
            
            # Ambient Void Glows
            rx.box(
                position="absolute", top="20%", left="50%", transform="translateX(-50%)", width="50vw", height="50vw",
                background="radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)",
                z_index="-3", filter="blur(100px)", border_radius="50%",
            ),

            rx.vstack(
                rx.text(
                    "Higher Dimensional HPC & Defense Research Lab", 
                    font_size=["2.5rem", "3.5rem", "4.5rem", "5.5rem"], weight="bold", letter_spacing="-0.02em", line_height="1.1",
                    color="white", text_align="center", class_name="animate-fade-up", margin_top="12",
                    font_family="'EB Garamond', 'Playfair Display', serif",
                    text_shadow="0 4px 12px rgba(0, 0, 0, 0.5)",
                ),

                rx.hstack(
                    rx.link(
                        rx.button("Request Beta Access", bg="white", color="black", border_radius="4px", font_size="1rem", font_weight="600", padding="24px 36px", cursor="pointer", transition="all 0.2s ease", _hover={{"bg": "#e0e0e0"}}),
                        href="/developer", _hover={{"text_decoration": "none"}}
                    ),
                    rx.link(
                        rx.button("Explore Capabilities", bg="transparent", border="1px solid rgba(212, 175, 55, 0.4)", color="white", border_radius="4px", font_size="1rem", font_weight="600", padding="24px 36px", cursor="pointer", transition="all 0.2s ease", _hover={{"bg": "rgba(212, 175, 55, 0.1)"}}),
                        href="/capabilities", _hover={{"text_decoration": "none"}}
                    ),
                    spacing="6", class_name="animate-fade-up delay-200", flex_wrap="wrap", justify_content="center", margin_top="16"
                ),
                align_items="center",
                justify_content="center",
                width="100%",
                padding_x=["4", "8", "12"],
                height="calc(100vh - 200px)",
            ),
            width="100%",
            height="100%",
            position="relative",
            overflow="hidden",
        )
    )
"""

with open("chromalabs/pages/index.py", "w") as f:
    f.write(index_code)

