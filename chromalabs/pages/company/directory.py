import reflex as rx
from chromalabs.components.layout import base_layout

def staff_card(name: str, role: str, spec: str) -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.box(width="40px", height="4px", bg="#DFBC61", margin_bottom="2"),
            rx.text(name, color="white", font_size="1.25rem", font_weight="700", line_height="1.2"),
            rx.text(role, color="slate.11", font_size="0.9rem", font_family="JetBrains Mono, monospace", margin_top="1"),
            rx.text(spec, color="slate.9", font_size="0.8rem", margin_top="4", line_height="1.5"),
            align_items="flex-start",
        ),
        bg="rgba(15,15,15,0.6)",
        border="1px solid rgba(255,255,255,0.05)",
        border_radius="4px",
        padding="32px 24px",
        width="100%",
        transition="all 0.2s ease",
        _hover={"bg": "rgba(25,25,25,0.8)", "border": "1px solid rgba(255,255,255,0.1)", "transform": "translateY(-2px)"},
    )

def directory() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text(
                    "STAFF DIRECTORY",
                    font_size="0.8rem", weight="bold", color="#DFBC61", letter_spacing="0.15em",
                    class_name="animate-fade-up", text_align="center"
                ),
                rx.text(
                    "The Architecture Team.", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    color="white", font_family="'EB Garamond', 'Playfair Display', serif",
                    class_name="animate-fade-up delay-100", margin_bottom="4", text_align="center"
                ),
                rx.text(
                    "The engineers and physicists building the next dimensional layer of compute.",
                    font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="12", line_height="1.6",
                    class_name="animate-fade-up delay-200"
                ),
                rx.grid(
                    staff_card("Alexander Finch", "Lead Architect", "Focuses on bypassing the Von Neumann bottleneck through isomorphic structures."),
                    staff_card("Dr. Elena Rostova", "Head of Hardware Physics", "Pioneering cryogenic photonic data-routing and volumetric heat dissipation."),
                    staff_card("Marcus Vance", "Lead Systems Engineer", "Developing the low-level firmware bridging geometric chips with legacy operating systems."),
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
            display="flex",
            justify_content="center"
        )
    )