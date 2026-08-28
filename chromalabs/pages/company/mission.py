import reflex as rx
from chromalabs.components.layout import base_layout

def mission() -> rx.Component:
    return base_layout(
        rx.box(
            # Background Ambient Orb
            rx.box(
                position="absolute", top="15%", left="50%", transform="translateX(-50%)",
                width="80vw", height="80vw", max_width="800px", max_height="800px",
                background="radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
                z_index="-1", filter="blur(60px)", border_radius="50%",
            ),
            rx.vstack(
                rx.box(
                    rx.text("OUR DIRECTIVE", font_size="0.8rem", weight="bold", color="#D4AF37", letter_spacing="0.15em"),
                    padding="6px 16px", border="1px solid rgba(212, 175, 55, 0.2)", border_radius="4px",
                    background="rgba(212, 175, 55, 0.05)", margin_bottom="8", box_shadow="0 0 20px rgba(212, 175, 55, 0.1)",
                    class_name="animate-fade-up",
                ),
                rx.text(
                    "Mission & Roster", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    text_align="center", margin_bottom="6",
                    background_image="linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)", background_clip="text",
                    style={"-webkit-text-fill-color": "transparent"},
                    class_name="animate-fade-up delay-100",
                ),
                rx.text(
                    "To synthesize physical hardware with higher-dimensional logic, fundamentally re-architecting the limits of computation.",
                    font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="16", line_height="1.6",
                    class_name="animate-fade-up delay-200",
                ),
                rx.box(
                    rx.vstack(
                        rx.hstack(rx.text("DR. ELIAS VANE", weight="bold", color="white", width="180px"), rx.text("DIRECTOR OF OPTICAL ROUTING", color="#D4AF37", font_size="0.8rem", letter_spacing="0.1em")),
                        rx.hstack(rx.text("M. THORNE", weight="bold", color="white", width="180px"), rx.text("LEAD HARDWARE ARCHITECTURE", color="#D4AF37", font_size="0.8rem", letter_spacing="0.1em")),
                        rx.hstack(rx.text("[REDACTED]", weight="bold", color="slate.9", width="180px"), rx.text("KINETIC DEPLOYMENT STRATEGY", color="slate.9", font_size="0.8rem", letter_spacing="0.1em")),
                        rx.hstack(rx.text("DR. S. R. VANCE", weight="bold", color="white", width="180px"), rx.text("GEOMETRIC INFERENCING", color="#D4AF37", font_size="0.8rem", letter_spacing="0.1em")),
                        spacing="4", align_items="flex-start", width="100%"
                    ),
                    border="1px solid rgba(212, 175, 55, 0.3)",
                    background="rgba(212, 175, 55, 0.05)",
                    padding="32px",
                    border_radius="8px",
                    width="100%", max_width="600px",
                    class_name="animate-fade-up delay-300",
                ),
                width="100%", padding_x="6", padding_top="16", padding_bottom="32", align_items="center",
            ),
            width="100%", position="relative", overflow="hidden", min_height="100vh",
            padding_top="120px",
        )
    )
