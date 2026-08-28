
import reflex as rx
from chromalabs.components.layout import base_layout

def problem_section() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text("THE BOTTLENECK", color="#D4AF37", font_weight="bold", letter_spacing="0.1em", font_size="0.9rem"),
            rx.text("The Thermodynamic Limit", font_size=["2rem", "2.5rem"], weight="bold", color="white", margin_bottom="4"),
            rx.text(
                "The global High Performance Computing community is colliding with the physical laws of thermodynamics. Moving memory accounts for over 90% of modern data center power budgets. Silicon cannot be packed any denser without catastrophic heat dissipation failure.",
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
            rx.text("Spatial Topology Engines", font_size=["2rem", "2.5rem"], weight="bold", color="white", margin_bottom="4"),
            rx.text(
                "We do not simply optimize existing algorithms; we re-architect the physical execution substrate. By treating complex data structures as explicit dimensional geometry, we construct algebraic compute graphs that natively execute parallel tasks with zero cache misses.",
                color="slate.11", font_size="1.1rem", line_height="1.7", max_width="800px", margin_bottom="12"
            ),
            rx.grid(
                rx.box(
                    rx.icon(tag="thermometer-snowflake", color="white", size=24, margin_bottom="4"),
                    rx.text("Thermodynamic Supremacy", font_size="1.2rem", weight="bold", color="white", margin_bottom="2"),
                    rx.text("Compressing logic directly into the execution hardware drastically reduces TDP overhead, enabling unprecedented processing density per square foot.", color="slate.10", font_size="0.95rem", line_height="1.5"),
                    padding="30px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                ),
                rx.box(
                    rx.icon(tag="server", color="white", size=24, margin_bottom="4"),
                    rx.text("Exascale Foundations", font_size="1.2rem", weight="bold", color="white", margin_bottom="2"),
                    rx.text("Designing the next-generation foundational architecture required to achieve sustainable, scalable exascale computing.", color="slate.10", font_size="0.95rem", line_height="1.5"),
                    padding="30px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                ),
                grid_template_columns=["1fr", "repeat(2, 1fr)"], spacing="6", width="100%",
            ),
            padding_y="32",
            align_items="flex_start",
        ),
        width="100%", max_width="1200px", margin="0 auto", padding_x="6"
    )

def hpc() -> rx.Component:
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
                        "High Performance Computing", 
                        font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.1",
                        text_align="center", margin_bottom="6",
                        color="white",
                        font_family="'EB Garamond', 'Playfair Display', serif",
                    ),
                    rx.text(
                        "Beyond binary. Re-architecting data structures to achieve unprecedented thermodynamic efficiency.",
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

