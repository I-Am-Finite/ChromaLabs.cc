import reflex as rx
from chromalabs.components.layout import base_layout

def job_card(title: str, dept: str, loc: str) -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text(dept, color="#DFBC61", size="1", weight="bold", letter_spacing="0.1em"),
            rx.heading(title, size="5", color="white", margin_bottom="2"),
            rx.hstack(
                rx.icon(tag="map-pin", size=14, color="slate.11"),
                rx.text(loc, color="slate.11", size="2"),
                align_items="center",
            ),
            align_items="flex-start",
        ),
        padding="32px",
        border="1px solid rgba(255,255,255,0.05)",
        background="rgba(10,10,10,0.6)",
        border_radius="8px",
        transition="all 0.3s ease",
        _hover={
            "background": "rgba(20,20,20,0.8)", 
            "border_color": "rgba(223, 188, 97, 0.3)",
            "transform": "translateY(-2px)",
        },
        cursor="pointer",
        width="100%",
    )

def careers() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text(
                    "JOIN THE LAB",
                    font_size="0.8rem", weight="bold", color="#DFBC61", letter_spacing="0.15em",
                    class_name="animate-fade-up", text_align="center"
                ),
                rx.text(
                    "Open Positions.", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    color="white", font_family="'EB Garamond', 'Playfair Display', serif",
                    class_name="animate-fade-up delay-100", margin_bottom="4", text_align="center"
                ),
                rx.text(
                    "We are actively seeking elite engineers to re-architect the physical limits of computation.",
                    font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="12", line_height="1.6",
                    class_name="animate-fade-up delay-200"
                ),
                rx.grid(
                    job_card("Volumetric Hardware Architect", "ENGINEERING", "Houston, TX (HQ)"),
                    job_card("Photonic Substrate Engineer", "ENGINEERING", "Houston, TX (HQ)"),
                    job_card("Cryogenic Systems Specialist", "RESEARCH", "Houston, TX (HQ)"),
                    job_card("Tactical Deployment Lead", "GOV/DEFENSE", "Washington D.C. / Remote"),
                    columns="2",
                    spacing="6",
                    width="100%",
                    max_width="1000px",
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