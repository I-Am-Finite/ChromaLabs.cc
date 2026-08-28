import reflex as rx

def mission() -> rx.Component:
    return rx.box(
        # Background Grid & Gradient
        rx.box(
            position="absolute",
            top="0",
            left="0",
            width="100vw",
            height="100vh",
            z_index="-1",
            bg="radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.10), transparent 70%), #030303",
            style={
                "background_image": "radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.10), transparent 70%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                "background_size": "100% 100%, 40px 40px, 40px 40px",
                "background_position": "0 0, center center, center center",
            }
        ),

        # High-End Navigation Pane
        rx.hstack(
            rx.hstack(
                rx.image(src="/logo.svg", width="32px", height="32px"),
                rx.link(rx.text("Chroma Labs", font_weight="700", letter_spacing="0.05em", color="white", size="4"), href="/"),
                spacing="3",
                align_items="center",
            ),
            rx.spacer(),
            rx.hstack(
                rx.link(rx.text("Technology", color="slate.9", _hover={"color": "white"}, size="2", font_weight="500", letter_spacing="0.05em"), href="/technology"),
                rx.link(rx.text("Mission", color="white", size="2", font_weight="500", letter_spacing="0.05em"), href="/mission"),
                spacing="6",
            ),
            width="100%",
            max_width="1200px",
            padding_x="6",
            padding_y="5",
            align_items="center",
            position="fixed",
            top="0",
            backdrop_filter="blur(16px)",
            border_bottom="1px solid rgba(255,255,255,0.05)",
            background="rgba(3, 3, 3, 0.6)",
            z_index="50",
            left="50%",
            transform="translateX(-50%)",
        ),
        
        # Content Section
        rx.vstack(
            rx.heading("MISSION & TEAM", size="8", color="white", letter_spacing="-0.02em", margin_bottom="2"),
            rx.text(
                "NSF I-Corps Backed Research. Strategic Government Defense.", 
                color="slate.11", 
                size="4",
                margin_bottom="8",
                max_width="600px",
                text_align="center",
            ),
            
            rx.box(
                rx.text("TEAM ROSTER PENDING", color="#D4AF37", font_weight="bold", letter_spacing="0.1em"),
                padding="8",
                border="1px dashed rgba(212, 175, 55, 0.3)",
                background="rgba(212, 175, 55, 0.02)",
            ),

            align_items="center",
            justify_content="center",
            min_height="100vh",
            padding_top="20",
        ),
        bg="transparent",
        position="relative",
        overflow="hidden",
        min_height="100vh",
    )
