import reflex as rx
from chromalabs.components.layout import base_layout

def wearables() -> rx.Component:
    return base_layout(
        rx.box(
            # Background Ambient Orb
            rx.box(
                position="absolute", top="10%", left="50%", transform="translateX(-50%)",
                width="80vw", height="80vw", max_width="800px", max_height="800px",
                background="radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 60%)",
                z_index="-1", filter="blur(60px)", border_radius="50%",
            ),
            rx.vstack(
                rx.text(
                    "Wearables & Tech Armor", 
                    font_size=["2.5rem", "3.5rem", "4.5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    text_align="center", margin_bottom="6",
                    background_image="linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)", background_clip="text",
                    style={"-webkit-text-fill-color": "transparent"},
                ),
                rx.text(
                    "Augmented Reality and localized on-man processing for tactical dominance.",
                    font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="16", line_height="1.6",
                ),
                rx.grid(
                    rx.box(
                        rx.icon(tag="eye", color="#D4AF37", size=24, margin_bottom="4"),
                        rx.text("AR Vision Systems", font_size="1.25rem", weight="bold", color="white", margin_bottom="2"),
                        rx.text("Heads-up visual data streams processed locally without cloud offloading.", color="slate.11", font_size="0.95rem", line_height="1.5"),
                        padding="32px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px", transition="all 0.2s ease", _hover={"background": "rgba(255, 255, 255, 0.04)", "transform": "translateY(-2px)"}
                    ),
                    rx.box(
                        rx.icon(tag="shield-zap", color="#00F0FF", size=24, margin_bottom="4"),
                        rx.text("Kinetic Processing", font_size="1.25rem", weight="bold", color="white", margin_bottom="2"),
                        rx.text("Ultra-low SWaP footprint enabling continuous operation in austere environments.", color="slate.11", font_size="0.95rem", line_height="1.5"),
                        padding="32px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px", transition="all 0.2s ease", _hover={"background": "rgba(255, 255, 255, 0.04)", "transform": "translateY(-2px)"}
                    ),
                    columns="2", spacing="6", width="100%", max_width="900px",
                ),
                width="100%", padding_x="6", padding_top="16", padding_bottom="32", align_items="center",
            ),
            width="100%", position="relative", overflow="hidden",
        )
    )
