import reflex as rx
from chromalabs.components.layout import base_layout

def index() -> rx.Component:
    return base_layout(
        rx.box(
            # Ambient Void Glow (Blood Red)
            rx.box(
                position="absolute", top="10%", left="50%", transform="translateX(-50%)", width="70vw", height="70vw",
                background="radial-gradient(circle, rgba(255, 0, 0, 0.05) 0%, transparent 60%)",
                z_index="-1", filter="blur(100px)", border_radius="50%",
            ),

            rx.vstack(
                rx.text(
                    "Higher Dimensional HPC & Defense Research Lab", 
                    font_size=["2.5rem", "3.5rem", "5rem", "6.5rem"], weight="bold", letter_spacing="-0.03em", line_height="1.1",
                    color="white", text_align="center", class_name="animate-fade-up", margin_top="12",
                    font_family="'EB Garamond', 'Playfair Display', serif",
                ),
                rx.text(
                    "We raise computational states away from base-2 binary, "
                    "merging geometric mapping with photonic transit.",
                    font_size=["1.1rem", "1.3rem", "1.5rem"], color="slate.11", weight="regular", max_width="700px",
                    text_align="center", line_height="1.6", class_name="animate-fade-up delay-200", margin_bottom="12", margin_top="6",
                ),
                rx.hstack(
                    rx.link(
                        rx.button("Explore Architecture", bg="white", color="black", border_radius="6px", font_size="1rem", font_weight="600", padding="24px 36px", cursor="pointer", transition="all 0.2s ease", _hover={"bg": "#e0e0e0"}),
                        href="/capabilities", _hover={"text_decoration": "none"}
                    ),
                    rx.link(
                        rx.button("View Manifest", bg="transparent", border="1px solid rgba(255, 0, 0, 0.4)", color="white", border_radius="6px", font_size="1rem", font_weight="600", padding="24px 36px", cursor="pointer", transition="all 0.2s ease", _hover={"bg": "rgba(255, 0, 0, 0.1)"}),
                        href="/company/mission", _hover={"text_decoration": "none"}
                    ),
                    spacing="6", class_name="animate-fade-up delay-300", flex_wrap="wrap", justify_content="center"
                ),
                align_items="center",
                justify_content="center",
                width="100%",
                padding_x=["4", "8", "12"],
                padding_top="15vh",
            ),
            width="100%",
            min_height="85vh",
            position="relative",
            overflow="hidden",
        )
    )

