import reflex as rx
from chromalabs.components.layout import base_layout

def index() -> rx.Component:
    return base_layout(
        rx.box(
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
                    "We map volumetric logic structures and lambda equations directly to consumer photonic hardware.",
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
                        href="/products/capabilities"
                    ),
                    rx.link(
                        rx.button("DEFENSE SOLUTIONS", bg="transparent", border="1px solid rgba(255,255,255,0.2)", color="white", radius="none", size="3", font_weight="bold", _hover={"bg": "rgba(255,255,255,0.05)"}),
                        href="/solutions/defense"
                    ),
                    spacing="4",
                ),
                width="100%",
                min_height="50vh",
                align_items="center",
                justify_content="center",
                padding_x="4",
                padding_bottom="12",
            ),
            
            # High Density Technical Spec Block
            rx.box(
                rx.flex(
                    rx.vstack(
                        rx.text("CORE ARCHITECTURE", color="#00F0FF", size="1", font_family="JetBrains Mono, monospace", letter_spacing="0.1em"),
                        rx.text("Photonic tensors mapped to consumer hardware.", color="white", size="4", weight="bold"),
                        rx.text("Eliminating traditional memory walls by directly routing data through spatial pipelines.", color="slate.11", size="2", max_width="400px"),
                        align_items="flex-start"
                    ),
                    rx.vstack(
                        rx.text("SWaP EFFICIENCY", color="#00F0FF", size="1", font_family="JetBrains Mono, monospace", letter_spacing="0.1em"),
                        rx.text("[ REDACTED ]", color="white", size="4", weight="bold"),
                        rx.text("Designed for kinetic wearables and tactical edge.", color="slate.11", size="2"),
                        align_items="flex-start"
                    ),
                    rx.vstack(
                        rx.text("DATA THROUGHOUT", color="#00F0FF", size="1", font_family="JetBrains Mono, monospace", letter_spacing="0.1em"),
                        rx.text("HIGH-BANDWIDTH", color="white", size="4", weight="bold"),
                        rx.text("Direct optical node-to-node links.", color="slate.11", size="2"),
                        align_items="flex-start"
                    ),
                    direction="row",
                    justify="between",
                    padding="8",
                    background="rgba(10, 15, 25, 0.4)",
                    border="1px solid rgba(255,255,255,0.1)",
                    border_left="4px solid #D4AF37",
                    width="100%",
                    max_width="1000px",
                    flex_wrap="wrap"
                ),
                width="100%",
                display="flex",
                justify_content="center",
                padding_x="4",
                margin_bottom="12"
            )
        )
    )
