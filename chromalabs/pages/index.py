import reflex as rx
from chromalabs.components.layout import base_layout

def index() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.box(
                    rx.text("NSF I-CORPS BACKED", size="1", weight="bold", color="slate.11", letter_spacing="0.1em"),
                    padding_x="4",
                    padding_y="2",
                    border="1px solid rgba(255, 255, 255, 0.1)",
                    border_radius="full",
                    background="rgba(255, 255, 255, 0.03)",
                    margin_bottom="8",
                ),
                rx.heading(
                    "Higher Dimensional", 
                    size="9", 
                    weight="medium", 
                    color="white", 
                    letter_spacing="-0.04em",
                    line_height="1.0",
                    text_align="center",
                    margin_bottom="2",
                ),
                rx.heading(
                    "Compute Architecture.", 
                    size="9", 
                    weight="medium", 
                    color="white", 
                    letter_spacing="-0.04em",
                    line_height="1.0",
                    text_align="center",
                    margin_bottom="6",
                ),
                rx.text(
                    "A next-generation HPC and Defense Research Lab. "
                    "We map volumetric logic structures directly to physical hardware.",
                    size="5", 
                    color="slate.11", 
                    weight="regular",
                    max_width="600px",
                    text_align="center",
                    margin_bottom="10",
                    line_height="1.5",
                ),
                rx.hstack(
                    rx.link(
                        rx.button("Explore Capabilities", bg="white", color="black", radius="full", size="3", font_weight="500", padding_x="6", _hover={"bg": "slate.3"}),
                        href="/capabilities"
                    ),
                    rx.link(
                        rx.button("Defense Solutions", bg="rgba(255,255,255,0.05)", border="1px solid rgba(255,255,255,0.1)", color="white", radius="full", size="3", font_weight="500", padding_x="6", _hover={"bg": "rgba(255,255,255,0.1)"}),
                        href="/solutions/defense"
                    ),
                    spacing="4",
                ),
                width="100%",
                min_height="50vh",
                align_items="center",
                justify_content="center",
                padding_x="4",
                padding_bottom="16",
            ),
            
            # Clean Features Grid
            rx.box(
                rx.grid(
                    rx.vstack(
                        rx.heading("Spatial Pipelines", size="4", weight="medium", color="white"),
                        rx.text("Eliminating traditional memory walls by directly routing data through physical geometry.", color="slate.11", size="2"),
                        align_items="flex-start",
                    ),
                    rx.vstack(
                        rx.heading("Kinetic Edge", size="4", weight="medium", color="white"),
                        rx.text("Designed specifically for ultra-low SWaP wearables and autonomous tactical deployments.", color="slate.11", size="2"),
                        align_items="flex-start",
                    ),
                    rx.vstack(
                        rx.heading("Optical Links", size="4", weight="medium", color="white"),
                        rx.text("Unprecedented bandwidth scaling via direct node-to-node light propagation.", color="slate.11", size="2"),
                        align_items="flex-start",
                    ),
                    columns="3",
                    spacing="8",
                    width="100%",
                    max_width="1000px",
                    padding_y="12",
                    border_top="1px solid rgba(255,255,255,0.05)"
                ),
                width="100%",
                display="flex",
                justify_content="center",
                padding_x="6",
            )
        )
    )
