import reflex as rx
from chromalabs.components.layout import base_layout

def blog_card(title: str, date: str, summary: str, tag: str) -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text(tag, color="#DFBC61", font_size="0.75rem", font_family="JetBrains Mono, monospace", font_weight="bold", letter_spacing="0.1em"),
            rx.text(title, color="white", font_size="1.5rem", font_weight="700", line_height="1.2", margin_top="2"),
            rx.text(summary, color="slate.11", font_size="1rem", line_height="1.5", margin_top="4", flex_grow="1"),
            rx.hstack(
                rx.text(date, color="slate.9", font_size="0.8rem"),
                rx.spacer(),
                rx.icon(tag="arrow-right", color="slate.9", size=16),
                width="100%",
                margin_top="6",
                align_items="center"
            ),
            align_items="flex-start",
            height="100%",
        ),
        bg="rgba(20,20,20,0.4)",
        border="1px solid rgba(255,255,255,0.05)",
        border_radius="8px",
        padding="24px",
        height="100%",
        cursor="pointer",
        transition="all 0.2s ease",
        _hover={"bg": "rgba(30,30,30,0.6)", "border": "1px solid rgba(255,255,255,0.1)", "transform": "translateY(-2px)"},
    )

def log() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text(
                    "RESEARCH LOG",
                    font_size="0.8rem", weight="bold", color="#DFBC61", letter_spacing="0.15em",
                    class_name="animate-fade-up"
                ),
                rx.text(
                    "Architectural Intelligence.", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    color="white", font_family="'EB Garamond', 'Playfair Display', serif",
                    class_name="animate-fade-up delay-100", margin_bottom="8"
                ),
                rx.grid(
                    blog_card("Thermodynamic Supremacy in Volumetric Nodes", "AUGUST 2026", "An analysis of heat dissipation scaling when transitioning from planar silicon architectures to dense, 3D isomorphic node structures.", "HARDWARE PHYSICS"),
                    blog_card("Eliminating the Von Neumann Bottleneck", "JULY 2026", "How integrating memory and logic at the physical geometry layer drastically reduces latency in trillion-parameter inference.", "ARCHITECTURE"),
                    blog_card("Photonic Interconnects in Sub-Zero Environments", "JUNE 2026", "Experimental data on signal fidelity when deploying light-based routing mechanisms within cryogenic containment fields.", "PHOTONICS"),
                    columns="3",
                    spacing="6",
                    width="100%",
                ),
                width="100%",
                max_width="1200px",
                margin_top="12",
                align_items="center",
                padding_top="24",
                padding_x=["4", "8", "12"],
            ),
            width="100%",
            min_height="80vh",
        )
    )