import reflex as rx
from chromalabs.components.layout import base_layout

def ai() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text("DIMENSIONAL ABSTRACTION", font_family="JetBrains Mono, monospace", font_size="1rem", color="#DFBC61", margin_bottom="4", letter_spacing="0.15em", class_name="animate-fade-up"),
                rx.text("Artificial Intelligence.", font_size=["3rem", "4rem", "5rem"], font_weight="800", line_height="1.1", color="white", letter_spacing="-0.03em", margin_bottom="8", text_align="center", font_family="'EB Garamond', 'Playfair Display', serif", class_name="animate-fade-up delay-100"),
                rx.text(
                    "Current AI architectures are crippled by planar memory constraints. By transitioning execution into volumetric photonic structures, we eliminate the fetch-execute cycle, achieving theoretical processing limits.",
                    color="slate.11", font_size="1.25rem", line_height="1.7", max_width="800px", text_align="center", margin_bottom="12", class_name="animate-fade-up delay-200"
                ),
                rx.grid(
                    rx.box(
                        rx.icon(tag="layers", color="#DFBC61", size=32, margin_bottom="6"),
                        rx.text("Dimensional Abstraction", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("Rather than shuttling data across narrow electrical buses, we map neural parameters directly into the physical topology of the substrate.", color="slate.11", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(10, 10, 10, 0.6)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    rx.box(
                        rx.icon(tag="zap", color="#DFBC61", size=32, margin_bottom="6"),
                        rx.text("Hardware as Logic", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("By eliminating the fetch-execute cycle, the model itself becomes the hardware, unlocking a new paradigm of autonomous capabilities.", color="slate.11", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(10, 10, 10, 0.6)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    rx.box(
                        rx.icon(tag="cpu", color="#DFBC61", size=32, margin_bottom="6"),
                        rx.text("Sparse Network Mastery", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("Architectures natively designed for extreme sparsity, maximizing computational efficiency without synthetic pruning penalties.", color="slate.11", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(10, 10, 10, 0.6)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    rx.box(
                        rx.icon(tag="activity", color="#DFBC61", size=32, margin_bottom="6"),
                        rx.text("Zero-Latency Routing", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("Instantaneous data propagation through geometric planes ensures constant execution speeds irrespective of parameter scale.", color="slate.11", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(10, 10, 10, 0.6)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    grid_template_columns=["1fr", "repeat(2, 1fr)"], gap="8", width="100%", max_width="1000px", class_name="animate-fade-up delay-300"
                ),
                rx.link(
                    rx.button("CONTACT US", bg="#DFBC61", color="black", border_radius="4px", font_size="0.9rem", font_weight="bold", padding="24px 32px", margin_top="16", cursor="pointer", transition="all 0.2s", _hover={"bg": "#e6c455", "transform": "translateY(-2px)"}),
                    href="/contact", _hover={"text_decoration": "none"}, class_name="animate-fade-up delay-400"
                ),
                align_items="center",
                justify_content="center",
                width="100%",
                min_height="calc(100vh - 200px)", padding_y=["12", "24"],
                padding_x=["6", "8", "12"]
            ),
            width="100%", position="relative", flex_grow="1", display="flex", justify_content="center"
        )
    )