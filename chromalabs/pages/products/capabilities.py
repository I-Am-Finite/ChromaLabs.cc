import reflex as rx
from chromalabs.components.layout import base_layout

def capabilities() -> rx.Component:
    return base_layout(
        rx.vstack(
            rx.heading("CORE CAPABILITIES", size="9", weight="bold", color="white", letter_spacing="-0.03em", margin_bottom="4"),
            rx.text(
                "Hardware-accelerated mathematical frameworks and optical routing algorithms.",
                size="5", 
                color="slate.11", 
                weight="medium",
                max_width="700px",
                margin_bottom="12",
            ),
            rx.grid(
                rx.box(
                    rx.heading("01 / TENSOR ROUTING", size="4", color="white", margin_bottom="2"),
                    rx.text("Spatial routing algorithms that bypass standard memory walls via direct optical paths.", color="slate.11", size="2"),
                    padding="6",
                    border="1px solid rgba(255,255,255,0.1)",
                    background="rgba(255,255,255,0.02)"
                ),
                rx.box(
                    rx.heading("02 / LOW SWaP EDGE", size="4", color="white", margin_bottom="2"),
                    rx.text("Operating under 5W for kinetic field deployments and autonomous UAV systems.", color="slate.11", size="2"),
                    padding="6",
                    border="1px solid rgba(255,255,255,0.1)",
                    background="rgba(255,255,255,0.02)"
                ),
                rx.box(
                    rx.heading("03 / HYPERSCALE SYNC", size="4", color="white", margin_bottom="2"),
                    rx.text("Coherent multi-rack scaling utilizing off-the-shelf telecom fiber infrastructure.", color="slate.11", size="2"),
                    padding="6",
                    border="1px solid rgba(255,255,255,0.1)",
                    background="rgba(255,255,255,0.02)"
                ),
                rx.box(
                    rx.heading("04 / RECURSIVE LAMBDA COMPILATION", size="4", color="white", margin_bottom="2"),
                    rx.text("Hardware-level compiler designed specifically to collapse recursive combinators.", color="slate.11", size="2"),
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
