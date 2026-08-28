
import reflex as rx
from chromalabs.components.layout import base_layout

def problem_section() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text("THE BOTTLENECK", color="#D4AF37", font_weight="bold", letter_spacing="0.1em", font_size="0.9rem"),
            rx.text("The Limits of Legacy Silicon", font_size=["2rem", "2.5rem"], weight="bold", color="white", margin_bottom="4"),
            rx.text(
                "Modern Artificial Intelligence is suffocating under the Von Neumann architecture. We are no longer compute-bound; we are memory-bound. Shuttling trillions of parameters across physical buses requires immense power and incurs catastrophic latency.",
                color="slate.11", font_size="1.1rem", line_height="1.7", max_width="800px"
            ),
            padding_y="32",
            align_items="flex_start",
        ),
        width="100%", max_width="1200px", margin="0 auto", padding_x="6"
    )

def architecture_section() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text("OUR APPROACH", color="#D4AF37", font_weight="bold", letter_spacing="0.1em", font_size="0.9rem"),
            rx.text("Spatial Weight Mapping", font_size=["2rem", "2.5rem"], weight="bold", color="white", margin_bottom="4"),
            rx.text(
                "Chroma Labs abandons the sequential fetch-execute paradigm. By structurally mapping neural architectures into physical geometric spaces, the model becomes the hardware. We translate probabilistic logic into deterministic spatial pathways, eliminating the memory wall entirely.",
                color="slate.11", font_size="1.1rem", line_height="1.7", max_width="800px", margin_bottom="12"
            ),
            rx.grid(
                rx.box(
                    rx.icon(tag="network", color="white", size=24, margin_bottom="4"),
                    rx.text("Dimensional Routing", font_size="1.2rem", weight="bold", color="white", margin_bottom="2"),
                    rx.text("Evaluating multi-modal inputs by tracking physical intersections rather than matrix multiplications.", color="slate.10", font_size="0.95rem", line_height="1.5"),
                    padding="30px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                ),
                rx.box(
                    rx.icon(tag="zap", color="white", size=24, margin_bottom="4"),
                    rx.text("Zero-Latency Inferencing", font_size="1.2rem", weight="bold", color="white", margin_bottom="2"),
                    rx.text("Real-time autonomous decision making decoupled from traditional memory bandwidth constraints.", color="slate.10", font_size="0.95rem", line_height="1.5"),
                    padding="30px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                ),
                grid_template_columns=["1fr", "repeat(2, 1fr)"], spacing="6", width="100%",
            ),
            padding_y="32",
            align_items="flex_start",
        ),
        width="100%", max_width="1200px", margin="0 auto", padding_x="6"
    )

def ai() -> rx.Component:
    return base_layout(
        rx.box(
            # Hero Section
            rx.box(
                rx.box(
                    position="absolute", top="10%", left="50%", transform="translateX(-50%)",
                    width="60vw", height="60vw", max_width="800px", max_height="800px",
                    background="radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
                    z_index="-1", filter="blur(60px)", border_radius="50%", pointer_events="none",
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
                        "Rethinking the physics of computation. Moving beyond matrices and adopting geometric topologies to achieve unprecedented density.",
                        font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="12", line_height="1.6",
                    ),
                    width="100%", padding_x="6", padding_top="160px", padding_bottom="80px", align_items="center",
                ),
                width="100%", position="relative",
            ),
            
            rx.divider(border_color="rgba(255, 255, 255, 0.05)"),
            problem_section(),
            rx.divider(border_color="rgba(255, 255, 255, 0.05)"),
            architecture_section(),
            
            width="100%", position="relative", flex_grow="1"
        )
    )

