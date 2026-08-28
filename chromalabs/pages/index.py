import reflex as rx
from chromalabs.components.layout import base_layout

def index() -> rx.Component:
    return base_layout(
        rx.vstack(
            # Hero Section
            rx.vstack(
                rx.box(
                    rx.text("NSF I-CORPS BACKED", size="1", weight="bold", color="#D4AF37", letter_spacing="0.2em"),
                    padding_x="3",
                    padding_y="1",
                    border="1px solid rgba(212, 175, 55, 0.3)",
                    border_radius="full",
                    background="rgba(212, 175, 55, 0.05)",
                    margin_bottom="6",
                ),
                rx.heading(
                    "HIGHER DIMENSIONAL COMPUTE", 
                    size="9", 
                    weight="bold", 
                    color="white", 
                    letter_spacing="-0.03em",
                    line_height="1.1",
                    text_align="center",
                ),
                rx.heading(
                    "ARCHITECTURE.", 
                    size="9", 
                    weight="bold", 
                    color="white", 
                    letter_spacing="-0.03em",
                    line_height="1.1",
                    text_align="center",
                    margin_bottom="4",
                ),
                rx.text(
                    "A Higher Dimensional HPC and Defense Research Lab. "
                    "We map volumetric logic structures directly to consumer photonic hardware, eliminating SWaP bottlenecks.",
                    size="5", 
                    color="slate.11", 
                    weight="medium",
                    max_width="700px",
                    text_align="center",
                    margin_bottom="8",
                    line_height="1.6",
                ),
                rx.hstack(
                    rx.link(
                        rx.button("PRODUCTS & CAPABILITIES", bg="white", color="black", radius="none", size="3", font_weight="bold", _hover={"bg": "slate.3"}),
                        href="/products/hardware"
                    ),
                    rx.link(
                        rx.button("DEFENSE SOLUTIONS", bg="transparent", border="1px solid rgba(255,255,255,0.2)", color="white", radius="none", size="3", font_weight="bold", _hover={"bg": "rgba(255,255,255,0.05)"}),
                        href="/solutions/defense"
                    ),
                    spacing="4",
                ),
                width="100%",
                min_height="80vh",
                align_items="center",
                justify_content="center",
                padding_x="4",
            ),
            
            # Capability Matrix Section
            rx.vstack(
                rx.heading("CORE CAPABILITIES", size="4", color="#D4AF37", letter_spacing="0.1em", margin_bottom="8"),
                rx.grid(
                    rx.box(
                        rx.heading("01 / TENSOR ROUTING", size="3", color="white", margin_bottom="2"),
                        rx.text("Spatial routing algorithms that bypass standard memory walls via direct optical paths.", color="slate.11", size="2"),
                        border_top="1px solid rgba(255,255,255,0.1)",
                        padding_top="4"
                    ),
                    rx.box(
                        rx.heading("02 / LOW SWaP EDGE", size="3", color="white", margin_bottom="2"),
                        rx.text("Operating under 5W for kinetic field deployments and autonomous UAV systems.", color="slate.11", size="2"),
                        border_top="1px solid rgba(255,255,255,0.1)",
                        padding_top="4"
                    ),
                    rx.box(
                        rx.heading("03 / HYPERSCALE SYNC", size="3", color="white", margin_bottom="2"),
                        rx.text("Coherent multi-rack scaling utilizing off-the-shelf telecom fiber infrastructure.", color="slate.11", size="2"),
                        border_top="1px solid rgba(255,255,255,0.1)",
                        padding_top="4"
                    ),
                    columns="3",
                    spacing="8",
                    width="100%",
                    max_width="1200px",
                    padding_x="6",
                ),
                width="100%",
                padding_y="20",
                background="rgba(0,0,0,0.4)",
                align_items="center",
            ),
            width="100%",
            spacing="0",
        )
    )
