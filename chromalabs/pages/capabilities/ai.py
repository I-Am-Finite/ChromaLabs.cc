
import reflex as rx
from chromalabs.components.layout import base_layout

def ai() -> rx.Component:
    return base_layout(
        rx.box(
            # Grid background
            rx.box(
                position="absolute", top="0", left="0", width="100%", height="100%", z_index="-1",
                
                background_size="40px 40px", pointer_events="none",
                mask_image="linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)"
            ),
            rx.vstack(
                rx.text("SYS.REQ // CHROMA_AI_01", font_family="JetBrains Mono, monospace", font_size="0.8rem", color="#D4AF37", margin_bottom="4", letter_spacing="0.1em"),
                rx.text("SPATIAL WEIGHT MAPPING", font_size=["3rem", "4rem", "5rem"], font_weight="800", line_height="1.1", color="white", letter_spacing="-0.03em", margin_bottom="8", text_align="center"),
                rx.text(
                    "The von Neumann architecture has reached its physical limit. Modern AI is no longer compute-bound; it is memory-bound. We are fundamentally re-architecting how sparse neural structures exist in hardware.",
                    color="slate.11", font_size="1.25rem", line_height="1.7", max_width="800px", text_align="center", margin_bottom="12"
                ),
                rx.grid(
                    rx.box(
                        rx.icon(tag="layers", color="#D4AF37", size=32, margin_bottom="6"),
                        rx.text("Dimensional Abstraction", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("Rather than shuttling data across narrow electrical buses, we map neural parameters directly into the physical topology of the substrate.", color="slate.10", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    rx.box(
                        rx.icon(tag="zap", color="#D4AF37", size=32, margin_bottom="6"),
                        rx.text("Hardware as Logic", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("By eliminating the fetch-execute cycle, the model itself becomes the hardware, unlocking a new paradigm of autonomous edge capabilities.", color="slate.10", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    grid_template_columns=["1fr", "repeat(2, 1fr)"], gap="8", width="100%", max_width="1000px"
                ),
                rx.link(
                    rx.button("CONTACT US", bg="white", color="black", border_radius="0", font_family="JetBrains Mono, monospace", font_size="0.8rem", font_weight="bold", padding="20px 32px", margin_top="16", cursor="pointer", _hover={"bg": "#e0e0e0"}),
                    href="/contact", _hover={"text_decoration": "none"}
                ),
                align_items="center",
                justify_content="center",
                width="100%",
                padding_top="120px",
                padding_bottom="120px",
                padding_x=["6", "8", "12"]
            ),
            width="100%", position="relative", flex_grow="1"
        )
    )

