import reflex as rx
from chromalabs.components.layout import base_layout

def developer() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text(
                    "DEVELOPER PORTAL",
                    font_size="0.8rem", weight="bold", color="#DFBC61", letter_spacing="0.15em",
                    class_name="animate-fade-up", text_align="center"
                ),
                rx.text(
                    "SDK & API Access.", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    color="white", font_family="'EB Garamond', 'Playfair Display', serif",
                    class_name="animate-fade-up delay-100", margin_bottom="8", text_align="center"
                ),
                rx.text(
                    "Direct access to our volumetric compilation toolchain is highly restricted. Beta API endpoints and physical hardware integration are provisioned strictly on a per-institution and agency basis.",
                    font_size="1.25rem", color="slate.11", max_width="800px", text_align="center", margin_bottom="12", line_height="1.7",
                    class_name="animate-fade-up delay-200"
                ),
                rx.link(
                    rx.button(
                        "REQUEST CLEARANCE", 
                        bg="#DFBC61", color="black", border_radius="4px", font_size="0.9rem", font_weight="bold", 
                        padding="24px 48px", cursor="pointer", transition="all 0.2s", 
                        _hover={"bg": "#e6c455", "transform": "translateY(-2px)"}
                    ),
                    href="/contact?topic=SDK%20and%20API%20Access", 
                    _hover={"text_decoration": "none"},
                    class_name="animate-fade-up delay-300"
                ),
                width="100%",
                max_width="1200px",
                align_items="center", justify_content="center", min_height="calc(100vh - 200px)",
                padding_y=["12", "24"],
                padding_x=["4", "8", "12"],
            ),
            width="100%",
            min_height="80vh",
            display="flex",
            justify_content="center"
        )
    )