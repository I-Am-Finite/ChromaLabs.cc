import reflex as rx
from chromalabs.components.layout import base_layout

def job_card(title: str, dept: str, loc: str) -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text(dept, color="#D4AF37", size="1", weight="bold", letter_spacing="0.05em"),
            rx.heading(title, size="4", color="white"),
            rx.text(loc, color="slate.11", size="2"),
            align_items="flex-start",
        ),
        padding="6",
        border="1px solid rgba(255,255,255,0.05)",
        background="rgba(255,255,255,0.02)",
        _hover={"background": "rgba(255,255,255,0.05)"},
        cursor="pointer",
        width="100%",
    )

def careers() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("Careers", size="9", weight="medium", color="white", letter_spacing="-0.04em", margin_bottom="4"),
            rx.text("Join the engineers re-architecting compute limits.", size="5", color="slate.11", max_width="700px", margin_bottom="12"),
            
            rx.grid(
                job_card("Senior ML Hardware Engineer", "ENGINEERING", "Austin, TX / Remote"),
                job_card("Embedded Systems Lead", "ENGINEERING", "Austin, TX"),
                job_card("Optical Physicist", "RESEARCH", "Austin, TX"),
                job_card("Defense Integration Specialist", "DEPLOYMENT", "Washington D.C."),
                columns="2",
                spacing="6",
                width="100%",
                max_width="1000px",
            ),
            width="100%", padding_x="6", padding_top="20", align_items="center",
        )
    )
