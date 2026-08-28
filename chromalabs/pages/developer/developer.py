import reflex as rx
from chromalabs.components.layout import base_layout

def developer() -> rx.Component:
    return base_layout(
        rx.box(
            # Ambient Glow
            rx.box(
                position="absolute", top="50%", left="50%", transform="translate(-50%, -50%)",
                width="60vw", height="60vw", max_width="600px", max_height="600px",
                background="radial-gradient(circle, rgba(255, 0, 0, 0.05) 0%, transparent 60%)",
                z_index="-1", filter="blur(60px)", border_radius="50%",
            ),
            rx.vstack(
                rx.box(
                    rx.vstack(
                        rx.icon(tag="lock", color="#FF0000", size=32, margin_bottom="4"),
                        rx.text("BETA ACCESS SECURED", color="#FF0000", font_size="0.8rem", weight="bold", letter_spacing="0.2em"),
                        rx.text("Chroma Labs Developer Portal", font_size="1.8rem", weight="bold", color="white", margin_top="2", margin_bottom="2", text_align="center"),
                        rx.text("Public endpoints are currently locked. Enter an authorized institutional or .mil email address to request access to the SDK and API documentation.", color="slate.11", font_size="0.95rem", text_align="center", max_width="400px", margin_bottom="6", line_height="1.5"),
                        
                        rx.input(placeholder="Enter institutional email...", width="100%", bg="rgba(0,0,0,0.5)", border="1px solid rgba(255,255,255,0.1)", color="white", padding="12px", border_radius="4px", margin_bottom="4", _focus={"border_color": "#FF0000", "outline": "none"}),
                        
                        rx.button("Request Clearance", width="100%", bg="white", color="black", border_radius="4px", font_size="0.95rem", font_weight="600", padding="20px", cursor="pointer", transition="all 0.2s ease", _hover={"bg": "#e0e0e0"}),
                        
                        rx.text("By requesting access, you agree to rigorous NDA vetting.", color="slate.9", font_size="0.75rem", margin_top="6", text_align="center"),
                        
                        align_items="center",
                        width="100%",
                    ),
                    padding="48px",
                    background="rgba(10, 10, 12, 0.8)",
                    backdrop_filter="blur(20px)",
                    border="1px solid rgba(255, 255, 255, 0.05)",
                    border_radius="12px",
                    box_shadow="0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                    width="100%",
                    max_width="500px",
                    class_name="animate-fade-up",
                ),
                width="100%", height="calc(100vh - 200px)", align_items="center", justify_content="center",
            ),
            width="100%", height="100%", position="relative", overflow="hidden",
        )
    )

