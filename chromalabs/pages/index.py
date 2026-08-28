import reflex as rx
from chromalabs.components.layout import base_layout

def index() -> rx.Component:
    return base_layout(
        rx.box(
            # Subtle Gold Grid Overlay
            rx.box(
                position="absolute", top="0", left="0", width="100%", height="100%", z_index="-2",
                background_image="linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px)",
                background_size="40px 40px",
            ),
            
            # Ambient Void Glows (Multiple Sources)
            rx.box(
                position="absolute", top="-10%", left="10%", width="50vw", height="50vw",
                background="radial-gradient(circle, rgba(255, 0, 0, 0.1) 0%, transparent 70%)",
                z_index="-1", filter="blur(120px)", border_radius="50%",
            ),
            rx.box(
                position="absolute", bottom="-20%", right="10%", width="60vw", height="60vw",
                background="radial-gradient(circle, rgba(255, 94, 0, 0.08) 0%, transparent 70%)",
                z_index="-1", filter="blur(100px)", border_radius="50%",
            ),
            rx.box(
                position="absolute", top="30%", left="40%", width="40vw", height="40vw",
                background="radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 60%)",
                z_index="-1", filter="blur(90px)", border_radius="50%",
            ),

            rx.vstack(
                rx.text(
                    "Higher Dimensional HPC & Defense Research Lab", 
                    font_size=["2.5rem", "3.5rem", "4.5rem", "5.5rem"], weight="bold", letter_spacing="-0.03em", line_height="1.1",
                    color="white", text_align="center", class_name="animate-fade-up", margin_top="4",
                    font_family="'EB Garamond', 'Playfair Display', serif",
                    text_shadow="0 0 40px rgba(255, 0, 0, 0.6), 0 0 10px rgba(255, 94, 0, 0.4)",
                ),
                
                # The Bold Statement (Filling the empty space without scrolling)
                rx.box(
                    rx.text(
                        "ERADICATING HUMAN ABSTRACTION",
                        color="#D4AF37", font_size="0.85rem", font_weight="bold", letter_spacing="0.2em", text_align="center", margin_bottom="4"
                    ),
                    rx.text(
                        "Forcing machines to parse base-2 binary is an architectural failure. We map computational logic natively to volumetric geometry and photonic arrays, unlocking true computational physics.",
                        font_size=["1rem", "1.15rem", "1.3rem"], color="slate.11", weight="regular", max_width="800px",
                        text_align="center", line_height="1.6",
                    ),
                    margin_top="12", margin_bottom="12", class_name="animate-fade-up delay-100",
                ),

                rx.hstack(
                    rx.link(
                        rx.button("Request Beta Access", bg="white", color="black", border_radius="4px", font_size="1rem", font_weight="600", padding="24px 36px", cursor="pointer", transition="all 0.2s ease", _hover={"bg": "#e0e0e0"}),
                        href="/developer", _hover={"text_decoration": "none"}
                    ),
                    rx.link(
                        rx.button("Explore Capabilities", bg="transparent", border="1px solid rgba(255, 0, 0, 0.4)", color="white", border_radius="4px", font_size="1rem", font_weight="600", padding="24px 36px", cursor="pointer", transition="all 0.2s ease", _hover={"bg": "rgba(255, 0, 0, 0.1)"}),
                        href="/capabilities", _hover={"text_decoration": "none"}
                    ),
                    spacing="6", class_name="animate-fade-up delay-200", flex_wrap="wrap", justify_content="center"
                ),
                align_items="center",
                justify_content="center",
                width="100%",
                padding_x=["4", "8", "12"],
                height="calc(100vh - 200px)", # Constrain exactly to viewport (minus navbar and footer)
            ),
            width="100%",
            height="100%",
            position="relative",
            overflow="hidden",
        )
    )

