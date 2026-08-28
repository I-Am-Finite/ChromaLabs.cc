import reflex as rx
from chromalabs.components.layout import base_layout

def index() -> rx.Component:
    return base_layout(
        rx.box(
            # Subtle Gold Grid Overlay
            rx.box(
                position="absolute", top="0", left="0", width="100%", height="100%", z_index="-3",
                background_image="linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px)",
                background_size="60px 60px",
            ),
            
            # Animated Golden Rays (Tracing through grid paths)
            rx.box(position="absolute", top="180px", left="0", width="200px", height="1px", background="linear-gradient(90deg, transparent, #D4AF37, transparent)", box_shadow="0 0 10px #D4AF37", z_index="-2", animation="traceX 6s linear infinite"),
            rx.box(position="absolute", top="420px", left="0", width="300px", height="2px", background="linear-gradient(90deg, transparent, #D4AF37, transparent)", box_shadow="0 0 15px #D4AF37", z_index="-2", animation="traceX 8s linear infinite 2s"),
            rx.box(position="absolute", top="780px", left="0", width="250px", height="1px", background="linear-gradient(90deg, transparent, #D4AF37, transparent)", box_shadow="0 0 10px #D4AF37", z_index="-2", animation="traceX 5s linear infinite 1s"),
            
            rx.box(position="absolute", top="0", left="20vw", width="1px", height="200px", background="linear-gradient(180deg, transparent, #D4AF37, transparent)", box_shadow="0 0 10px #D4AF37", z_index="-2", animation="traceY 7s linear infinite 3s"),
            rx.box(position="absolute", top="0", right="20vw", width="2px", height="300px", background="linear-gradient(180deg, transparent, #D4AF37, transparent)", box_shadow="0 0 15px #D4AF37", z_index="-2", animation="traceY 9s linear infinite"),

            # Ambient Void Glows
            rx.box(
                position="absolute", top="20%", left="50%", transform="translateX(-50%)", width="50vw", height="50vw",
                background="radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)",
                z_index="-3", filter="blur(100px)", border_radius="50%",
            ),

            rx.vstack(
                rx.text(
                    "Higher Dimensional HPC & Defense Research Lab", 
                    font_size=["2.5rem", "3.5rem", "4.5rem", "5.5rem"], weight="bold", letter_spacing="-0.02em", line_height="1.1",
                    color="white", text_align="center", class_name="animate-fade-up", margin_top="12",
                    font_family="'EB Garamond', 'Playfair Display', serif",
                    text_shadow="0 4px 12px rgba(0, 0, 0, 0.5)", # Replaced red glow with professional drop shadow
                ),

                rx.hstack(
                    rx.link(
                        rx.button("Request Beta Access", bg="white", color="black", border_radius="4px", font_size="1rem", font_weight="600", padding="24px 36px", cursor="pointer", transition="all 0.2s ease", _hover={"bg": "#e0e0e0"}),
                        href="/developer", _hover={"text_decoration": "none"}
                    ),
                    rx.link(
                        rx.button("Explore Capabilities", bg="transparent", border="1px solid rgba(212, 175, 55, 0.4)", color="white", border_radius="4px", font_size="1rem", font_weight="600", padding="24px 36px", cursor="pointer", transition="all 0.2s ease", _hover={"bg": "rgba(212, 175, 55, 0.1)"}),
                        href="/capabilities", _hover={"text_decoration": "none"}
                    ),
                    spacing="6", class_name="animate-fade-up delay-200", flex_wrap="wrap", justify_content="center", margin_top="16"
                ),
                align_items="center",
                justify_content="center",
                width="100%",
                padding_x=["4", "8", "12"],
                height="calc(100vh - 200px)",
            ),
            width="100%",
            height="100%",
            position="relative",
            overflow="hidden",
        )
    )

