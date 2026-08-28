
import reflex as rx
from chromalabs.components.layout import base_layout

def government() -> rx.Component:
    return base_layout(
        rx.box(
            # Grid background
            rx.box(
                position="absolute", top="0", left="0", width="100%", height="100%", z_index="-1",
                background_image="linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                background_size="40px 40px", pointer_events="none",
                mask_image="linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)"
            ),
            rx.vstack(
                rx.text("SYS.REQ // CHROMA_GOV_03", font_family="JetBrains Mono, monospace", font_size="0.8rem", color="#D4AF37", margin_bottom="4", letter_spacing="0.1em"),
                rx.text("SOVEREIGN TACTICAL EDGE", font_size=["3rem", "4rem", "5rem"], font_weight="800", line_height="1.1", color="white", letter_spacing="-0.03em", margin_bottom="8", text_align="center"),
                rx.text(
                    "Cloud-dependent architectures are a critical liability in contested environments. We compress data-center class computational power into disconnected hardware footprints, guaranteeing absolute operational security.",
                    color="slate.11", font_size="1.25rem", line_height="1.7", max_width="800px", text_align="center", margin_bottom="12"
                ),
                rx.grid(
                    rx.box(
                        rx.icon(tag="shield-check", color="#D4AF37", size=32, margin_bottom="6"),
                        rx.text("Physical Compartmentalization", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("Eliminate software-layer side-channel vulnerabilities by strictly compartmentalizing data as physical dimensions.", color="slate.10", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    rx.box(
                        rx.icon(tag="radio", color="white", size=32, margin_bottom="6"),
                        rx.text("Disconnected Lethality", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("Empowering autonomous platforms with continuous, zero-latency inferencing completely independent of external uplinks.", color="slate.10", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    grid_template_columns=["1fr", "repeat(2, 1fr)"], gap="8", width="100%", max_width="1000px"
                ),
                rx.hstack(
                    rx.button("VIEW RESEARCH", bg="white", color="black", border_radius="0", font_family="JetBrains Mono, monospace", font_size="0.8rem", font_weight="bold", padding="20px 32px", margin_top="16", _hover={"bg": "#e0e0e0"}),
                    rx.button("CONTACT ENGINEERING", bg="transparent", color="white", border="1px solid rgba(255,255,255,0.2)", border_radius="0", font_family="JetBrains Mono, monospace", font_size="0.8rem", font_weight="bold", padding="20px 32px", margin_top="16", _hover={"bg": "rgba(255,255,255,0.05)"}),
                    spacing="4"
                ),
                align_items="center",
                justify_content="center",
                width="100%",
                padding_top="120px",
                padding_bottom="120px",
                padding_x=["6", "8", "12"]
            ),
            width="100%", position="relative", flex_grow="1"
        )
    )

