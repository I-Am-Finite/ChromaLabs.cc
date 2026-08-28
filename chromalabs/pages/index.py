import reflex as rx
from chromalabs.components.layout import base_layout

SVG_BACKGROUND = """<svg width="100%" height="100%" style="position: absolute; top: 0; left: 0; z-index: -2;" xmlns="http://www.w3.org/2000/svg">
<defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
<path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(212, 175, 55, 0.05)" stroke-width="1"/></pattern>
<filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
<feGaussianBlur stdDeviation="3" result="blur" />
<feComposite in="SourceGraphic" in2="blur" operator="over" />
</filter></defs>
<rect width="100%" height="100%" fill="url(#grid)" />
<path d="M 0 180 L 420 180 L 420 480 L 1020 480 L 1020 240 L 2400 240" fill="none" stroke="rgba(212, 175, 55, 0.15)" stroke-width="1" />
<path d="M 0 180 L 420 180 L 420 480 L 1020 480 L 1020 240 L 2400 240" fill="none" stroke="#D4AF37" stroke-width="2" filter="url(#glow)" stroke-dasharray="150 4000" stroke-dashoffset="4000">
<animate attributeName="stroke-dashoffset" values="4000; -200" dur="11.8s" begin="0.5s" repeatCount="indefinite" />
</path>
<path d="M 900 1200 L 900 600 L 1440 600 L 1440 0" fill="none" stroke="rgba(212, 175, 55, 0.15)" stroke-width="1" />
<path d="M 900 1200 L 900 600 L 1440 600 L 1440 0" fill="none" stroke="#D4AF37" stroke-width="2" filter="url(#glow)" stroke-dasharray="150 4000" stroke-dashoffset="4000">
<animate attributeName="stroke-dashoffset" values="4000; -200" dur="7.4s" begin="1.2s" repeatCount="indefinite" />
</path>
<path d="M 600 0 L 600 300 L 180 300 L 180 1200" fill="none" stroke="rgba(212, 175, 55, 0.15)" stroke-width="1" />
<path d="M 600 0 L 600 300 L 180 300 L 180 1200" fill="none" stroke="#D4AF37" stroke-width="2" filter="url(#glow)" stroke-dasharray="150 4000" stroke-dashoffset="4000">
<animate attributeName="stroke-dashoffset" values="4000; -200" dur="7.7s" begin="3.2s" repeatCount="indefinite" />
</path>
<path d="M 2400 720 L 1800 720 L 1800 1020 L 1200 1020 L 1200 1200" fill="none" stroke="rgba(212, 175, 55, 0.15)" stroke-width="1" />
<path d="M 2400 720 L 1800 720 L 1800 1020 L 1200 1020 L 1200 1200" fill="none" stroke="#D4AF37" stroke-width="2" filter="url(#glow)" stroke-dasharray="150 4000" stroke-dashoffset="4000">
<animate attributeName="stroke-dashoffset" values="4000; -200" dur="8.4s" begin="0.1s" repeatCount="indefinite" />
</path>
<path d="M 1320 480 L 1320 840 L 2040 840 L 2040 1200" fill="none" stroke="rgba(212, 175, 55, 0.15)" stroke-width="1" />
<path d="M 1320 480 L 1320 840 L 2040 840 L 2040 1200" fill="none" stroke="#D4AF37" stroke-width="2" filter="url(#glow)" stroke-dasharray="150 4000" stroke-dashoffset="4000">
<animate attributeName="stroke-dashoffset" values="4000; -200" dur="8.8s" begin="1.9s" repeatCount="indefinite" />
</path>
<path d="M 1500 1200 L 1500 720 L 840 720 L 840 0" fill="none" stroke="rgba(212, 175, 55, 0.15)" stroke-width="1" />
<path d="M 1500 1200 L 1500 720 L 840 720 L 840 0" fill="none" stroke="#D4AF37" stroke-width="2" filter="url(#glow)" stroke-dasharray="150 4000" stroke-dashoffset="4000">
<animate attributeName="stroke-dashoffset" values="4000; -200" dur="7.0s" begin="4.1s" repeatCount="indefinite" />
</path>
<path d="M 0 840 L 480 840 L 480 1020 L 720 1020 L 720 1200" fill="none" stroke="rgba(212, 175, 55, 0.15)" stroke-width="1" />
<path d="M 0 840 L 480 840 L 480 1020 L 720 1020 L 720 1200" fill="none" stroke="#D4AF37" stroke-width="2" filter="url(#glow)" stroke-dasharray="150 4000" stroke-dashoffset="4000">
<animate attributeName="stroke-dashoffset" values="4000; -200" dur="6.0s" begin="1.1s" repeatCount="indefinite" />
</path>
<path d="M 2400 360 L 1920 360 L 1920 180 L 1500 180 L 1500 0" fill="none" stroke="rgba(212, 175, 55, 0.15)" stroke-width="1" />
<path d="M 2400 360 L 1920 360 L 1920 180 L 1500 180 L 1500 0" fill="none" stroke="#D4AF37" stroke-width="2" filter="url(#glow)" stroke-dasharray="150 4000" stroke-dashoffset="4000">
<animate attributeName="stroke-dashoffset" values="4000; -200" dur="7.1s" begin="0.0s" repeatCount="indefinite" />
</path>
</svg>"""

def lambda_node() -> rx.Component:
    return rx.box(
        rx.text("L-TREE FUSION", font_size="10px", color="rgba(212, 175, 55, 0.8)", letter_spacing="2px", margin_bottom="10px", text_align="center"),
        rx.box(
            rx.box(position="absolute", top="10px", left="50%", transform="translateX(-50%)", width="12px", height="12px", border_radius="50%", animation="pulseCore 4s infinite"),
            rx.box(position="absolute", top="16px", left="30%", width="1px", height="30px", background="#D4AF37", transform_origin="top center", transform="rotate(-30deg)", animation="shrinkLineLeft 4s infinite"),
            rx.box(position="absolute", top="16px", right="30%", width="1px", height="30px", background="#D4AF37", transform_origin="top center", transform="rotate(30deg)", animation="shrinkLineRight 4s infinite"),
            rx.box(position="absolute", top="40px", left="20px", width="10px", height="10px", border_radius="50%", background="rgba(212, 175, 55, 0.4)", border="1px solid #D4AF37", animation="fuseLeft 4s infinite"),
            rx.box(position="absolute", top="40px", right="20px", width="10px", height="10px", border_radius="50%", background="rgba(212, 175, 55, 0.4)", border="1px solid #D4AF37", animation="fuseRight 4s infinite"),
            position="relative", width="100px", height="60px", margin="0 auto"
        ),
        padding="16px", background="rgba(10, 10, 12, 0.9)", border="1px solid rgba(212, 175, 55, 0.3)",
        border_radius="8px", backdrop_filter="blur(12px)", box_shadow="0 0 30px rgba(0,0,0,0.8)",
        transition="all 0.3s ease", _hover={"border_color": "#FF0000"}
    )

def index() -> rx.Component:
    return base_layout(
        rx.box(
            # The fully snaking, grid-locked golden SVG traces
            rx.html(SVG_BACKGROUND),
            
            # Attached Lambda Nodes at precise grid intersections
            rx.box(lambda_node(), position="absolute", top="123px", left="353px", z_index="-1", class_name="animate-fade-up"),
            rx.box(lambda_node(), position="absolute", top="423px", left="953px", z_index="-1", class_name="animate-fade-up delay-100"),
            rx.box(lambda_node(), position="absolute", top="663px", left="1433px", z_index="-1", class_name="animate-fade-up delay-200"),
            rx.box(lambda_node(), position="absolute", top="123px", left="1853px", z_index="-1", class_name="animate-fade-up delay-300"),
            
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
                    text_shadow="0 4px 12px rgba(0, 0, 0, 0.5)",
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
                pointer_events="none", # Let users interact with the boxes underneath if needed
            ),
            # Make sure buttons are clickable by overriding pointer events
            sx={"& a": {"pointer_events": "auto"}},
            
            width="100%",
            height="100%",
            position="relative",
            overflow="hidden",
        )
    )
