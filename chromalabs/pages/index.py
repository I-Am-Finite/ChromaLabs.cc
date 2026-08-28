import reflex as rx

def index() -> rx.Component:
    return rx.box(
        # Background Grid & Gradient
        rx.box(
            position="absolute",
            top="0",
            left="0",
            width="100vw",
            height="100vh",
            z_index="-1",
            bg="radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.15), transparent 50%), #030303",
            style={
                "background_image": "radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.15), transparent 50%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                "background_size": "100% 100%, 40px 40px, 40px 40px",
                "background_position": "0 0, center center, center center",
            }
        ),
        
        # Navigation/Header Placeholder
        rx.hstack(
            rx.image(src="/logo.svg", width="40px", height="40px"),
            rx.text("CHROMALABS", font_weight="800", letter_spacing="0.1em", color="white", size="3"),
            rx.spacer(),
            rx.link(rx.text("TECHNOLOGY", color="slate.9", _hover={"color": "white"}, size="2", font_weight="600", letter_spacing="0.05em"), href="/technology"),
            rx.link(rx.text("MISSION", color="slate.9", _hover={"color": "white"}, size="2", font_weight="600", letter_spacing="0.05em"), href="/mission"),
            width="100%",
            padding_x="8",
            padding_y="6",
            align_items="center",
            position="fixed",
            top="0",
            backdrop_filter="blur(10px)",
            border_bottom="1px solid rgba(255,255,255,0.05)",
            z_index="50",
        ),

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
                "GEOMETRIC COMPUTE", 
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
                "Pioneering volumetric logic structures mapped directly to consumer photonic hardware. "
                "We eliminate traditional SWaP bottlenecks for AI, massive data scale, and defense industries.",
                size="5", 
                color="slate.11", 
                weight="medium",
                max_width="600px",
                text_align="center",
                margin_bottom="8",
                line_height="1.6",
            ),
            rx.hstack(
                rx.link(
                    rx.button(
                        "EXPLORE TECHNOLOGY", 
                        bg="white", 
                        color="black", 
                        radius="none", 
                        size="3", 
                        font_weight="bold", 
                        _hover={"bg": "slate.3", "cursor": "pointer"}
                    ),
                    href="/technology"
                ),
                spacing="4",
            ),
            width="100%",
            min_height="100vh",
            align_items="center",
            justify_content="center",
            padding_x="4",
        ),
        bg="transparent",
        position="relative",
        overflow="hidden",
    )
