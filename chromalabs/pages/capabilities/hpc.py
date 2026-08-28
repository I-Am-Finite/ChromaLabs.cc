
import reflex as rx
from chromalabs.components.layout import base_layout

def stat_card(label: str, value: str, trend: str) -> rx.Component:
    return rx.box(
        rx.text(label, font_family="JetBrains Mono, monospace", font_size="0.75rem", color="slate.9", text_transform="uppercase", letter_spacing="0.1em"),
        rx.text(value, font_size="2.5rem", font_weight="bold", color="white", font_family="JetBrains Mono, monospace", margin_y="2"),
        rx.text(trend, color="#D4AF37", font_size="0.85rem", font_family="JetBrains Mono, monospace"),
        padding="24px", border="1px solid rgba(255,255,255,0.05)", bg="rgba(0,0,0,0.4)", width="100%"
    )

def hpc() -> rx.Component:
    return base_layout(
        rx.box(
            rx.box(
                position="absolute", top="0", left="0", width="100%", height="100%", z_index="-1",
                background_image="linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                background_size="40px 40px", pointer_events="none",
                mask_image="linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)"
            ),
            rx.grid(
                rx.vstack(
                    rx.box(
                        rx.text("SYS.REQ // CHROMA_HPC_02", font_family="JetBrains Mono, monospace", font_size="0.8rem", color="#D4AF37", margin_bottom="4"),
                        border_bottom="1px solid rgba(255,255,255,0.1)", width="100%", padding_bottom="4"
                    ),
                    rx.text("THERMODYNAMIC SUPREMACY", font_size=["3rem", "4rem", "4.5rem"], font_weight="800", line_height="1", color="white", letter_spacing="-0.03em", margin_top="8"),
                    rx.text("The HPC community is colliding with the physical limits of silicon heat dissipation. By mapping dense algebraic workloads into direct spatial networks, we eliminate cache thrashing entirely, drastically reducing TDP overhead and enabling unprecedented processing density per square foot.", color="slate.11", font_size="1.1rem", line_height="1.6", max_width="600px", margin_top="6"),
                    rx.hstack(
                        rx.button("VIEW ARCHITECTURE", bg="white", color="black", border_radius="0", font_family="JetBrains Mono, monospace", font_size="0.8rem", font_weight="bold", padding="20px 32px", margin_top="8", _hover={"bg": "#e0e0e0"}),
                        rx.button("FACILITY DEPLOYMENT", bg="transparent", color="white", border="1px solid rgba(255,255,255,0.2)", border_radius="0", font_family="JetBrains Mono, monospace", font_size="0.8rem", font_weight="bold", padding="20px 32px", margin_top="8", _hover={"bg": "rgba(255,255,255,0.05)"}),
                        spacing="4"
                    ),
                    align_items="flex_start",
                    justify_content="center",
                    padding_right=["0", "0", "12"],
                    height="100%", width="100%"
                ),
                rx.vstack(
                    rx.grid(
                        stat_card("Data Center TDP", "-88%", "Removed Memory Movement"),
                        stat_card("Compute Density", "EXASCALE", "Per Standard Rack"),
                        stat_card("Cooling Load", "MINIMAL", "Photonic Advantage"),
                        stat_card("Interconnect", "OPTICAL", "Zero-Loss Topology"),
                        grid_template_columns=["1fr", "repeat(2, 1fr)"], gap="1px", bg="rgba(255,255,255,0.1)", border="1px solid rgba(255,255,255,0.1)", width="100%"
                    ),
                    rx.box(
                        rx.text("> STREAMING TELEMETRY (SIMULATED)", font_family="JetBrains Mono, monospace", color="slate.9", font_size="0.7rem", margin_bottom="4"),
                        rx.code_block(
                            "0x0000000000000000: INITIATING RACK-SCALE ROUTING...\n0x0000000000000010: FLUSHING LEGACY L3 CACHES\n0x0000000000000020: ESTABLISHING PHOTONIC BACKPLANE\n0x0000000000000030: THERMAL DISSIPATION: NOMINAL\n0x0000000000000040: EXASCALE BARRIER BREACHED",
                            language="bash",
                            
                            custom_style={"padding": "20px", "background": "rgba(0,0,0,0.6)", "border": "1px solid rgba(255,255,255,0.05)"},
                            width="100%"
                        ),
                        width="100%", margin_top="8"
                    ),
                    justify_content="center",
                    height="100%", width="100%"
                ),
                grid_template_columns=["1fr", "1fr", "1.2fr 1fr"],
                width="100%",
                max_width="1400px",
                margin="0 auto",
                padding_x=["6", "8", "12"],
                padding_y=["12", "24", "32"],
                min_height="80vh", gap="8"
            ),
            width="100%", position="relative", flex_grow="1"
        )
    )

