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

def research() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text(
                    "RESEARCH & ARCHITECTURE",
                    font_size="0.8rem", weight="bold", color="#DFBC61", letter_spacing="0.15em",
                    class_name="animate-fade-up"
                ),
                rx.text(
                    "Beyond Binary.", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    color="white", font_family="'EB Garamond', 'Playfair Display', serif",
                    class_name="animate-fade-up delay-100"
                ),
                rx.text(
                    "Eradicating human abstraction. We map logic directly to volumetric and photonic structures, freeing machines to operate natively in geometry.",
                    font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="16", line_height="1.6",
                    class_name="animate-fade-up delay-200"
                ),
                
                # Research Blog Section
                rx.box(
                    rx.text("RESEARCH LOG", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="8", border_bottom="1px solid rgba(255,255,255,0.1)", padding_bottom="4"),
                    rx.grid(
                        blog_card(
                            "Thermodynamic Supremacy in Volumetric Nodes",
                            "AUGUST 2026",
                            "An analysis of heat dissipation scaling when transitioning from planar silicon architectures to dense, 3D isomorphic node structures.",
                            "HARDWARE PHYSICS"
                        ),
                        blog_card(
                            "Eliminating the Von Neumann Bottleneck",
                            "JULY 2026",
                            "How integrating memory and logic at the physical geometry layer drastically reduces latency in trillion-parameter inference.",
                            "ARCHITECTURE"
                        ),
                        blog_card(
                            "Photonic Interconnects in Sub-Zero Environments",
                            "JUNE 2026",
                            "Experimental data on signal fidelity when deploying light-based routing mechanisms within cryogenic containment fields.",
                            "PHOTONICS"
                        ),
                        columns="3",
                        spacing="6",
                        width="100%",
                    ),
                    width="100%",
                    max_width="1200px",
                    margin_top="12",
                    class_name="animate-fade-up delay-300",
                ),

                # Published Papers Section
                rx.box(
                    rx.text("PUBLISHED PAPERS", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="8", border_bottom="1px solid rgba(255,255,255,0.1)", padding_bottom="4"),
                    rx.center(
                        rx.vstack(
                            rx.icon(tag="file-text", color="slate.9", size=48, margin_bottom="4"),
                            rx.text("Publications Coming Soon", color="white", font_size="1.5rem", font_weight="600"),
                            rx.text("Our upcoming whitepapers and peer-reviewed architectural designs will be published directly to Google Scholar and arXiv.", color="slate.11", text_align="center", max_width="500px", margin_top="2"),
                            align_items="center",
                        ),
                        bg="rgba(10,10,10,0.5)",
                        border="1px dashed rgba(255,255,255,0.1)",
                        border_radius="8px",
                        padding="48px 24px",
                        width="100%",
                    ),
                    width="100%",
                    max_width="1200px",
                    margin_top="24",
                    margin_bottom="32",
                    class_name="animate-fade-up delay-400",
                ),

                align_items="center",
                padding_top="24",
                padding_x=["4", "8", "12"],
            ),
            width="100%",
            min_height="80vh",
        )
    )