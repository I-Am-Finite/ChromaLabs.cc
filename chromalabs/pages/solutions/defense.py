import reflex as rx
from chromalabs.components.layout import base_layout

def defense_kpi(label: str, value: str) -> rx.Component:
    return rx.vstack(
        rx.text(label, color="slate.11", size="1", font_family="JetBrains Mono, monospace", letter_spacing="0.1em"),
        rx.text(value, color="#00F0FF", size="5", weight="bold", font_family="JetBrains Mono, monospace"),
        align_items="flex-start",
        spacing="1"
    )

def defense() -> rx.Component:
    return base_layout(
        rx.box(
            # Top Header Section (Dense)
            rx.flex(
                rx.vstack(
                    rx.text("[ DEPLOYMENT: KINETIC TACTICAL EDGE ]", color="#D4AF37", size="1", font_family="JetBrains Mono, monospace", letter_spacing="0.2em"),
                    rx.heading("DEFENSE & AEROSPACE", size="8", weight="bold", color="white", letter_spacing="-0.03em"),
                    rx.text(
                        "Bringing proprietary geometric compute technology directly to the tactical edge. "
                        "Our architecture enables real-time, autonomous neural network targeting and low SWaP augmented reality processing.",
                        size="4", color="slate.11", max_width="800px", margin_top="2"
                    ),
                    align_items="flex-start",
                    width="60%"
                ),
                rx.hstack(
                    defense_kpi("MAX DRAW", "< 5 WATTS"),
                    defense_kpi("LATENCY", "0.4 ms"),
                    defense_kpi("ARCHITECTURE", "GEOMETRIC"),
                    spacing="8",
                    width="40%",
                    justify="end",
                ),
                width="100%",
                direction="row",
                justify="between",
                align="end",
                padding_bottom="8",
                border_bottom="1px solid rgba(255,255,255,0.1)",
                margin_bottom="12",
                flex_wrap="wrap"
            ),

            # Main Grid - Data Dense layout
            rx.grid(
                # Column 1 - Wearables & Tech Armor
                rx.box(
                    rx.box(
                        rx.text("01", color="rgba(255,255,255,0.05)", size="9", weight="bold", position="absolute", top="-2", right="2"),
                        rx.heading("WEARABLES & TECH ARMOR", size="5", color="white", margin_bottom="3", letter_spacing="0.05em"),
                        rx.text("Augmented Reality (AR) visual data streams processed locally on-man without cloud offloading.", color="slate.11", size="3"),
                        rx.divider(border_color="rgba(255,255,255,0.1)", margin_y="4"),
                        rx.vstack(
                            rx.hstack(rx.icon(tag="check", color="#00F0FF", size=16), rx.text("Ultra-Low SWaP footprint", color="slate.9", size="2")),
                            rx.hstack(rx.icon(tag="check", color="#00F0FF", size=16), rx.text("Real-time optical mapping", color="slate.9", size="2")),
                            rx.hstack(rx.icon(tag="check", color="#00F0FF", size=16), rx.text("Zero RF emission processing", color="slate.9", size="2")),
                            align_items="start"
                        ),
                        position="relative",
                        padding="6",
                        border="1px solid rgba(255,255,255,0.1)",
                        background="rgba(10, 15, 25, 0.4)",
                        height="100%",
                        overflow="hidden"
                    )
                ),
                
                # Column 2 - Air & Autonomy
                rx.box(
                    rx.box(
                        rx.text("02", color="rgba(255,255,255,0.05)", size="9", weight="bold", position="absolute", top="-2", right="2"),
                        rx.heading("AIR & AUTONOMY", size="5", color="white", margin_bottom="3", letter_spacing="0.05em"),
                        rx.text("Autonomous targeting pipelines driven by novel neural network models running on our geometric cores.", color="slate.11", size="3"),
                        rx.divider(border_color="rgba(255,255,255,0.1)", margin_y="4"),
                        rx.vstack(
                            rx.hstack(rx.icon(tag="target", color="#00F0FF", size=16), rx.text("Kinetic autonomous targeting", color="slate.9", size="2")),
                            rx.hstack(rx.icon(tag="cpu", color="#00F0FF", size=16), rx.text("On-board geometric inferencing", color="slate.9", size="2")),
                            rx.hstack(rx.icon(tag="zap", color="#00F0FF", size=16), rx.text("GPS-denied pathfinding", color="slate.9", size="2")),
                            align_items="start"
                        ),
                        position="relative",
                        padding="6",
                        border="1px solid rgba(255,255,255,0.1)",
                        background="rgba(10, 15, 25, 0.4)",
                        height="100%",
                        overflow="hidden"
                    )
                ),
                columns="2",
                spacing="8",
                width="100%",
                margin_bottom="12"
            ),
            
            # Bottom Telemetry / Schematic section
            rx.box(
                rx.hstack(
                    rx.icon(tag="activity", color="#00F0FF", size=18),
                    rx.text("LIVE SYSTEM TELEMETRY (SIMULATED)", color="white", size="2", font_family="JetBrains Mono, monospace"),
                    align_items="center",
                    margin_bottom="4"
                ),
                rx.box(
                    rx.text("> Loading proprietary geometric model architecture...", color="slate.9", size="2", font_family="JetBrains Mono, monospace"),
                    rx.text("> NODE_01: NOMINAL", color="slate.11", size="2", font_family="JetBrains Mono, monospace"),
                    rx.text("> TARGETING_PIPELINE: ACTIVE", color="#00F0FF", size="2", font_family="JetBrains Mono, monospace"),
                    padding="6",
                    background="#020305",
                    border="1px solid rgba(0, 240, 255, 0.2)",
                    border_left="4px solid #00F0FF",
                ),
                width="100%"
            ),

            width="100%",
            max_width="1200px",
            padding_x="6",
            padding_top="10",
            padding_bottom="20",
            margin="0 auto"
        )
    )
