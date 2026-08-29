import reflex as rx
from chromalabs.components.layout import base_layout

def government() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text("TACTICAL EDGE CAPABILITIES", font_family="JetBrains Mono, monospace", font_size="1rem", color="#DFBC61", margin_bottom="4", letter_spacing="0.15em", class_name="animate-fade-up"),
                rx.text("Defense & Intelligence.", font_size=["3rem", "4rem", "5rem"], font_weight="800", line_height="1.1", color="white", letter_spacing="-0.03em", margin_bottom="8", text_align="center", font_family="'EB Garamond', 'Playfair Display', serif", class_name="animate-fade-up delay-100"),
                rx.text(
                    "Cloud-dependent architectures are a critical liability in contested environments. By eradicating human abstraction, we engineer fully sovereign, mathematically isolated edge networks capable of executing high-dimensional intelligence directly on the battlefield.",
                    color="slate.11", font_size="1.25rem", line_height="1.7", max_width="800px", text_align="center", margin_bottom="12", class_name="animate-fade-up delay-200"
                ),
                rx.grid(
                    rx.box(
                        rx.icon(tag="shield-alert", color="#DFBC61", size=32, margin_bottom="6"),
                        rx.text("Cryptographic Isolation", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("Absolute physical compartmentalization. Because logic maps directly to physical geometry, software-layer side-channel attacks are mathematically impossible to execute.", color="slate.11", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(10, 10, 10, 0.6)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    rx.box(
                        rx.icon(tag="zap", color="#DFBC61", size=32, margin_bottom="6"),
                        rx.text("EMP-Hardened Photonics", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("By transitioning logic from electrical buses to volumetric optical routing, the physical execution substrate achieves native resistance to electromagnetic interference.", color="slate.11", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(10, 10, 10, 0.6)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    rx.box(
                        rx.icon(tag="satellite-dish", color="#DFBC61", size=32, margin_bottom="6"),
                        rx.text("Zero-Uplink Signal Intelligence", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("Edge-native processing of multi-spectrum RF data streams, enabling real-time threat categorization without exposing operators via continuous satellite uplinks.", color="slate.11", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(10, 10, 10, 0.6)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    rx.box(
                        rx.icon(tag="crosshair", color="#DFBC61", size=32, margin_bottom="6"),
                        rx.text("Sub-Millisecond Target Resolution", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("Eliminating the fetch-execute cycle collapses targeting latency, delivering instantaneous kinetic lock-on capabilities directly through autonomous small UAV systems.", color="slate.11", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(10, 10, 10, 0.6)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    grid_template_columns=["1fr", "repeat(2, 1fr)"], gap="8", width="100%", max_width="1000px", class_name="animate-fade-up delay-300"
                ),
                rx.link(
                    rx.button("REQUEST CLEARANCE", bg="#DFBC61", color="black", border_radius="4px", font_size="0.9rem", font_weight="bold", padding="24px 32px", margin_top="16", cursor="pointer", transition="all 0.2s", _hover={"bg": "#e6c455", "transform": "translateY(-2px)"}),
                    href="/contact", _hover={"text_decoration": "none"}, class_name="animate-fade-up delay-400"
                ),
                align_items="center",
                justify_content="center",
                width="100%",
                min_height="calc(100vh - 200px)",
                padding_y=["12", "24"],
                padding_x=["6", "8", "12"]
            ),
            width="100%", position="relative", flex_grow="1", display="flex", justify_content="center"
        )
    )