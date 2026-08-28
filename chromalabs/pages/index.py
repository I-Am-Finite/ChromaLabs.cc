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
        
        # High-End Navigation Pane
        rx.hstack(
            rx.hstack(
                rx.image(src="/logo.svg", width="32px", height="32px"),
                rx.text("Chroma Labs", font_weight="700", letter_spacing="0.05em", color="white", size="4"),
                spacing="3",
                align_items="center",
            ),
            rx.spacer(),
            rx.hstack(
                rx.link(rx.text("Technology", color="slate.9", _hover={"color": "white"}, size="2", font_weight="500", letter_spacing="0.05em"), href="/technology"),
                rx.link(rx.text("Mission", color="slate.9", _hover={"color": "white"}, size="2", font_weight="500", letter_spacing="0.05em"), href="/mission"),
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

        # Hero Section with 3D Placeholder
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
            # WebGL / 3D Canvas Placeholder (To match Anduril/Celestial AI interactive hardware)
            rx.box(
                rx.html('<script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.94/build/spline-viewer.js"></script><spline-viewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"></spline-viewer>'),
                width="100%",
                height="500px",
                margin_top="10",
                opacity="0.8",
                border="1px solid rgba(255,255,255,0.05)",
                background="rgba(0,0,0,0.5)",
            ),
            width="100%",
            min_height="100vh",
            align_items="center",
            justify_content="center",
            padding_x="4",
            padding_top="32",
        ),
        
        # Capability Matrix Section
        rx.vstack(
            rx.heading("CAPABILITIES", size="4", color="#D4AF37", letter_spacing="0.1em", margin_bottom="8"),
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
            background="#050505",
            align_items="center",
        ),
        bg="transparent",
        position="relative",
        overflow="hidden",
    )
