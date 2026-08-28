import reflex as rx
from chromalabs.components.layout import base_layout

def telemetry_badge(text: str, color: str = "#00F0FF") -> rx.Component:
    return rx.hstack(
        rx.box(width="6px", height="6px", border_radius="50%", bg=color, box_shadow=f"0 0 8px {color}"),
        rx.text(text, font_family="JetBrains Mono, monospace", font_size="0.75rem", weight="bold", color=color, letter_spacing="0.1em"),
        align_items="center",
        spacing="2",
        padding="6px 12px",
        background="rgba(255, 255, 255, 0.03)",
        border="1px solid rgba(255, 255, 255, 0.08)",
        border_radius="4px",
    )

def index() -> rx.Component:
    return base_layout(
        rx.box(
            # Grid overlay
            rx.box(
                position="absolute", top="0", left="0", right="0", bottom="0", z_index="-2",
                background_image="linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                background_size="40px 40px",
                opacity="0.3",
            ),
            # Ambient Glow
            rx.box(
                position="absolute", top="0%", right="-10%", width="60vw", height="60vw",
                background="radial-gradient(circle, rgba(0, 240, 255, 0.06) 0%, transparent 60%)",
                z_index="-1", filter="blur(80px)", border_radius="50%",
            ),

            # Split Hero
            rx.box(
                # LEFT 45% - COPY
                rx.vstack(
                    telemetry_badge("SYS: SECURE | RUNTIME: 0.4ms"),
                    rx.text(
                        "Higher Dimensional", 
                        font_size=["3rem", "4rem", "4.5rem", "5.5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.1",
                        color="white", class_name="animate-fade-up", margin_top="6", padding_bottom="2"
                    ),
                    rx.text(
                        "Compute Architecture.", 
                        font_size=["3rem", "4rem", "4.5rem", "5.5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.1",
                        background_image="linear-gradient(180deg, #FFFFFF 0%, #606060 100%)",
                        background_clip="text", style={"-webkit-text-fill-color": "transparent"},
                        class_name="animate-fade-up delay-100", margin_bottom="6", padding_bottom="2"
                    ),
                    rx.text(
                        "We map volumetric logic structures directly to physical geometry. "
                        "Pioneering the intersection of photonic research, autonomous defense, "
                        "and hyperscale artificial intelligence.",
                        font_size="1.15rem", color="slate.11", weight="regular", max_width="500px",
                        line_height="1.6", class_name="animate-fade-up delay-200", margin_bottom="10",
                    ),
                    rx.hstack(
                        rx.link(
                            rx.button("Explore Capabilities", bg="white", color="black", border_radius="4px", font_size="0.95rem", font_weight="600", padding="22px 28px", cursor="pointer", transition="all 0.15s ease", _hover={"bg": "#e0e0e0"}),
                            href="/capabilities", _hover={"text_decoration": "none"}
                        ),
                        rx.link(
                            rx.button("View Schematics", bg="transparent", border="1px solid rgba(255,255,255,0.15)", color="white", border_radius="4px", font_size="0.95rem", font_weight="600", padding="22px 28px", cursor="pointer", transition="all 0.15s ease", _hover={"bg": "rgba(255,255,255,0.05)"}),
                            href="/solutions/defense", _hover={"text_decoration": "none"}
                        ),
                        spacing="4", class_name="animate-fade-up delay-300",
                    ),
                    align_items="flex-start",
                    width=["100%", "100%", "100%", "45%"],
                    padding_right=["0", "0", "0", "4rem"],
                ),

                # RIGHT 55% - SCHEMATIC / TERMINAL
                rx.box(
                    rx.box(
                        rx.hstack(
                            rx.box(width="8px", height="8px", border_radius="50%", bg="slate.8"),
                            rx.box(width="8px", height="8px", border_radius="50%", bg="slate.8"),
                            rx.box(width="8px", height="8px", border_radius="50%", bg="slate.8"),
                            spacing="2", padding="12px 16px", border_bottom="1px solid rgba(255, 255, 255, 0.05)",
                        ),
                        rx.box(
                            rx.text(">> INITIATING OPTICAL ROUTING PROTOCOL...", color="#00F0FF", font_family="JetBrains Mono, monospace", font_size="0.85rem", margin_bottom="4"),
                            rx.text("[OK] Volumetric core aligned.", color="slate.11", font_family="JetBrains Mono, monospace", font_size="0.85rem", margin_bottom="2"),
                            rx.text("[OK] Bypass electrical switching constraint.", color="slate.11", font_family="JetBrains Mono, monospace", font_size="0.85rem", margin_bottom="2"),
                            rx.text(">> COMPUTING GEOMETRIC MAPPING", color="#00F0FF", font_family="JetBrains Mono, monospace", font_size="0.85rem", margin_top="6", margin_bottom="4"),
                            # Schematic UI
                            rx.box(
                                rx.hstack(
                                    rx.box(width="40%", height="2px", bg="rgba(0, 240, 255, 0.3)", position="relative"),
                                    rx.box(width="8px", height="8px", bg="#00F0FF", box_shadow="0 0 10px #00F0FF"),
                                    rx.box(width="60%", height="2px", bg="rgba(255, 255, 255, 0.1)"),
                                    align_items="center", spacing="0", width="100%", margin_bottom="4"
                                ),
                                rx.hstack(
                                    rx.box(width="20%", height="2px", bg="rgba(0, 240, 255, 0.3)", position="relative"),
                                    rx.box(width="8px", height="8px", bg="#00F0FF", box_shadow="0 0 10px #00F0FF"),
                                    rx.box(width="80%", height="2px", bg="rgba(255, 255, 255, 0.1)"),
                                    align_items="center", spacing="0", width="100%", margin_bottom="4"
                                ),
                                rx.hstack(
                                    rx.box(width="70%", height="2px", bg="rgba(0, 240, 255, 0.3)", position="relative"),
                                    rx.box(width="8px", height="8px", bg="#00F0FF", box_shadow="0 0 10px #00F0FF"),
                                    rx.box(width="30%", height="2px", bg="rgba(255, 255, 255, 0.1)"),
                                    align_items="center", spacing="0", width="100%", margin_bottom="4"
                                ),
                                padding="24px", background="rgba(0, 0, 0, 0.4)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="4px",
                            ),
                            padding="32px",
                        ),
                        width="100%",
                        height="100%",
                        background="rgba(10, 12, 16, 0.6)",
                        backdrop_filter="blur(20px)",
                        border="1px solid rgba(255, 255, 255, 0.08)",
                        border_radius="8px",
                        box_shadow="0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                    ),
                    width=["100%", "100%", "100%", "55%"],
                    margin_top=["3rem", "3rem", "3rem", "0"],
                    class_name="animate-fade-up delay-300",
                ),
                display="flex",
                flex_direction=["column", "column", "column", "row"],
                width="100%",
                align_items="center",
                max_width="1400px",
                margin="0 auto",
            ),
            
            width="100%",
            min_height="80vh",
            padding_x=["6", "8", "12", "16"],
            padding_top="150px",
            padding_bottom="120px",
            position="relative",
            overflow="hidden",
        )
    )

