import reflex as rx
from chromalabs.components.layout import base_layout

def hardware() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("PHOTONIC HARDWARE", size="9", weight="bold", color="white", letter_spacing="-0.03em", margin_bottom="4"),
            rx.text(
                "Our core volumetric router and optical engines.",
                size="5", 
                color="slate.11", 
                weight="medium",
                max_width="700px",
                margin_bottom="8",
            ),
            # Hardware Grid
            rx.grid(
                rx.box(
                    rx.heading("THE PHOTONIC CORE", size="4", color="white", margin_bottom="2"),
                    rx.text("A multi-layered silicon interposer utilizing volumetric logic arrays to bypass the memory wall.", color="slate.11", size="2"),
                    padding="6",
                    border="1px solid rgba(255,255,255,0.1)",
                    background="rgba(255,255,255,0.02)"
                ),
                rx.box(
                    rx.heading("OPTICAL TRANSCEIVER", size="4", color="white", margin_bottom="2"),
                    rx.text("Direct fiber-to-chip interconnects capable of 3.2 Tbps per module with zero physical wire harnesses.", color="slate.11", size="2"),
                    padding="6",
                    border="1px solid rgba(255,255,255,0.1)",
                    background="rgba(255,255,255,0.02)"
                ),
                columns="2",
                spacing="8",
                width="100%",
                max_width="1200px",
            ),
            width="100%",
            padding_x="6",
            padding_top="20",
            align_items="center",
        )
    )
