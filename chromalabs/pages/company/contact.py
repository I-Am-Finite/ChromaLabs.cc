import reflex as rx
from chromalabs.components.layout import base_layout

def contact() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("Contact", size="9", weight="medium", color="white", letter_spacing="-0.04em", margin_bottom="4"),
            rx.text("Engage with our architecture team.", size="5", color="slate.11", max_width="700px", margin_bottom="12"),
            
            rx.box(
                rx.vstack(
                    rx.input(placeholder="Name", width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white"),
                    rx.input(placeholder="Email", width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white"),
                    rx.input(placeholder="Organization", width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white"),
                    rx.text_area(placeholder="Message", width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white", min_height="150px"),
                    rx.button("Submit Inquiry", bg="white", color="black", size="3", width="100%", margin_top="4"),
                    spacing="4",
                    width="100%",
                ),
                width="100%",
                max_width="500px",
                padding="8",
                border="1px solid rgba(255,255,255,0.05)",
                background="rgba(255,255,255,0.02)",
                border_radius="8px"
            ),
            width="100%", padding_x="6", padding_top="20", align_items="center",
        )
    )
