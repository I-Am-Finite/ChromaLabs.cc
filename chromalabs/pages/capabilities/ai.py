import reflex as rx
from chromalabs.components.layout import base_layout

def ai() -> rx.Component:
    return base_layout(
        rx.box(
            rx.box(
                position="absolute", top="15%", left="50%", transform="translateX(-50%)",
                width="80vw", height="80vw", max_width="800px", max_height="800px",
                background="radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
                z_index="-1", filter="blur(60px)", border_radius="50%",
            ),
            rx.vstack(
                rx.text(
                    "Exascale Artificial Intelligence", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.1",
                    text_align="center", margin_bottom="6",
                    color="white",
                    font_family="'EB Garamond', 'Playfair Display', serif",
                ),
                rx.text(
                    "Shattering the memory wall. CHROMA fundamentally transforms how Large Language Models and sparse neural architectures are executed at the hardware level.",
                    font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="16", line_height="1.6",
                ),
                rx.grid(
                    rx.box(
                        rx.icon(tag="network", color="#D4AF37", size=28, margin_bottom="6"),
                        rx.text("Spatial Weight Mapping", font_size="1.4rem", weight="bold", color="white", margin_bottom="3"),
                        rx.text("Traditional AI hardware moves massive matrices through narrow memory buses. We bypass this entirely by mapping neural architectures into physical geometric spaces, evaluating models orders of magnitude faster.", color="slate.10", font_size="1rem", line_height="1.6"),
                        padding="40px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="12px"
                    ),
                    rx.box(
                        rx.icon(tag="cpu", color="#D4AF37", size=28, margin_bottom="6"),
                        rx.text("Zero-Latency Inferencing", font_size="1.4rem", weight="bold", color="white", margin_bottom="3"),
                        rx.text("By treating Sparse Matrix-Vector multiplications as direct physical intersections rather than memory fetches, CHROMA enables near zero-latency LLM inferencing directly at the edge.", color="slate.10", font_size="1rem", line_height="1.6"),
                        padding="40px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="12px"
                    ),
                    grid_template_columns=["1fr", "1fr", "repeat(2, 1fr)"], spacing="8", width="100%", max_width="1000px",
                ),
                width="100%", padding_x="6", padding_top="16", padding_bottom="32", align_items="center",
            ),
            width="100%", position="relative", flex_grow="1",
            padding_top="120px", 
        )
    )
