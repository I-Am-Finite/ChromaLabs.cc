import reflex as rx
from chromalabs.components.layout import base_layout

def index() -> rx.Component:
    return base_layout(
        rx.box(
            # Background Ambient Orb
            rx.box(
                position="absolute",
                top="10%",
                left="50%",
                transform="translateX(-50%)",
                width="80vw",
                height="80vw",
                max_width="800px",
                max_height="800px",
                background="radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, rgba(212, 175, 55, 0.03) 40%, transparent 70%)",
                z_index="-1",
                filter="blur(60px)",
                border_radius="50%",
            ),
            
            rx.vstack(
                # Badge
                rx.box(
                    rx.text("NSF I-CORPS BACKED", font_size="0.75rem", weight="bold", color="#00F0FF", letter_spacing="0.15em"),
                    padding="6px 16px", border="1px solid rgba(0, 240, 255, 0.2)", border_radius="4px",
                    background="rgba(0, 240, 255, 0.05)", margin_bottom="12", box_shadow="0 0 20px rgba(0, 240, 255, 0.1)",
                    class_name="animate-fade-up",
                ),
                
                # Hero Typography
                rx.text(
                    "Higher Dimensional", 
                    font_size=["3rem", "4rem", "5rem", "6rem"], weight="bold", letter_spacing="-0.04em", line_height="0.9",
                    text_align="center", background_image="linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)",
                    background_clip="text", style={"-webkit-text-fill-color": "transparent"},
                    class_name="animate-fade-up delay-100",
                ),
                rx.text(
                    "Compute Architecture.", 
                    font_size=["3rem", "4rem", "5rem", "6rem"], weight="bold", letter_spacing="-0.04em", line_height="0.9",
                    text_align="center", margin_bottom="8", background_image="linear-gradient(180deg, #FFFFFF 0%, #707070 100%)",
                    background_clip="text", style={"-webkit-text-fill-color": "transparent"},
                    class_name="animate-fade-up delay-100",
                ),
                
                # Subtitle
                rx.text(
                    "A next-generation HPC and Defense Research Lab. "
                    "We map volumetric logic structures directly to physical hardware.",
                    font_size="1.25rem", color="slate.11", weight="regular", max_width="650px",
                    text_align="center", margin_bottom="12", line_height="1.6",
                    class_name="animate-fade-up delay-200",
                ),
                
                # CTA Buttons
                rx.hstack(
                    rx.link(
                        rx.button("Explore Capabilities", bg="white", color="black", border_radius="4px", font_size="1rem", font_weight="600", padding="24px 32px", cursor="pointer", transition="all 0.2s", _hover={"bg": "#e0e0e0", "transform": "translateY(-1px)"}),
                        href="/capabilities", _hover={"text_decoration": "none"}
                    ),
                    rx.link(
                        rx.button("Defense Solutions", bg="rgba(255,255,255,0.03)", border="1px solid rgba(255,255,255,0.1)", color="white", border_radius="4px", font_size="1rem", font_weight="600", padding="24px 32px", backdrop_filter="blur(10px)", cursor="pointer", transition="all 0.2s", _hover={"bg": "rgba(255,255,255,0.08)", "transform": "translateY(-1px)"}),
                        href="/solutions/defense", _hover={"text_decoration": "none"}
                    ),
                    spacing="6",
                    class_name="animate-fade-up delay-300",
                ),
                
                width="100%",
                min_height="70vh",
                align_items="center",
                justify_content="center",
                padding_x="4",
                padding_bottom="16",
                position="relative",
                z_index="2",
            ),
            
            # Clean Features Grid with Cards
            rx.box(
                rx.grid(
                    rx.box(
                        rx.icon(tag="box", color="#00F0FF", size=24, margin_bottom="4"),
                        rx.text("Spatial Pipelines", font_size="1.25rem", weight="bold", color="white", margin_bottom="2"),
                        rx.text("Eliminating traditional memory walls by directly routing data through physical geometry.", color="slate.11", font_size="0.9rem", line_height="1.5"),
                        padding="32px",
                        background="rgba(255, 255, 255, 0.02)",
                        border="1px solid rgba(255, 255, 255, 0.05)",
                        border_radius="8px",
                        transition="all 0.2s ease",
                        _hover={"background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "transform": "translateY(-2px)"}
                    ),
                    rx.box(
                        rx.icon(tag="shield", color="#00F0FF", size=24, margin_bottom="4"),
                        rx.text("Kinetic Edge", font_size="1.25rem", weight="bold", color="white", margin_bottom="2"),
                        rx.text("Designed specifically for ultra-low SWaP wearables and autonomous tactical deployments.", color="slate.11", font_size="0.9rem", line_height="1.5"),
                        padding="32px",
                        background="rgba(255, 255, 255, 0.02)",
                        border="1px solid rgba(255, 255, 255, 0.05)",
                        border_radius="8px",
                        transition="all 0.2s ease",
                        _hover={"background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "transform": "translateY(-2px)"}
                    ),
                    rx.box(
                        rx.icon(tag="zap", color="#D4AF37", size=24, margin_bottom="4"),
                        rx.text("Optical Links", font_size="1.25rem", weight="bold", color="white", margin_bottom="2"),
                        rx.text("Unprecedented bandwidth scaling via direct node-to-node light propagation.", color="slate.11", font_size="0.9rem", line_height="1.5"),
                        padding="32px",
                        background="rgba(255, 255, 255, 0.02)",
                        border="1px solid rgba(255, 255, 255, 0.05)",
                        border_radius="8px",
                        transition="all 0.2s ease",
                        _hover={"background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "transform": "translateY(-2px)"}
                    ),
                    columns="3",
                    spacing="6",
                    width="100%",
                    max_width="1200px",
                ),
                width="100%",
                display="flex",
                justify_content="center",
                padding_x="6",
                padding_bottom="32",
                position="relative",
                z_index="2",
            ),
            width="100%",
            position="relative",
            overflow="hidden",
        )
    )
