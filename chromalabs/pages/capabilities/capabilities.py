import reflex as rx
from chromalabs.components.layout import base_layout

def capabilities() -> rx.Component:
    return base_layout(
        rx.box(
            # Background Ambient Orb
            rx.box(
                position="absolute", top="15%", left="50%", transform="translateX(-50%)",
                width="80vw", height="80vw", max_width="800px", max_height="800px",
                background="radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 60%)",
                z_index="-1", filter="blur(60px)", border_radius="50%",
            ),
            rx.vstack(
                rx.box(
                    rx.text("CORE COMPETENCIES", font_size="0.8rem", weight="bold", color="#00F0FF", letter_spacing="0.15em"),
                    padding="6px 16px", border="1px solid rgba(0, 240, 255, 0.2)", border_radius="4px",
                    background="rgba(0, 240, 255, 0.05)", margin_bottom="8", box_shadow="0 0 20px rgba(0, 240, 255, 0.1)",
                    class_name="animate-fade-up",
                ),
                rx.text(
                    "Research & Algorithms", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    text_align="center", margin_bottom="6",
                    background_image="linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)", background_clip="text",
                    style={"-webkit-text-fill-color": "transparent"},
                    class_name="animate-fade-up delay-100",
                ),
                rx.text(
                    "Hardware-accelerated mathematical frameworks and novel neural network geometries designed to bypass the von Neumann bottleneck.",
                    font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="16", line_height="1.6",
                    class_name="animate-fade-up delay-200",
                ),
                rx.grid(
                    rx.box(
                        rx.icon(tag="git-merge", color="#00F0FF", size=28, margin_bottom="6"),
                        rx.text("Tensor Routing", font_size="1.4rem", weight="bold", color="white", margin_bottom="3"),
                        rx.text("Spatial routing algorithms that bypass standard memory walls via direct optical paths, reducing latency by orders of magnitude.", color="slate.10", font_size="1rem", line_height="1.6"),
                        padding="40px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="12px", transition="all 0.3s ease", _hover={"background": "rgba(255, 255, 255, 0.04)", "transform": "translateY(-4px)", "border_color": "rgba(0, 240, 255, 0.3)", "box_shadow": "0 10px 40px rgba(0, 240, 255, 0.05)"}
                    ),
                    rx.box(
                        rx.icon(tag="cpu", color="#D4AF37", size=28, margin_bottom="6"),
                        rx.text("Recursive Compilation", font_size="1.4rem", weight="bold", color="white", margin_bottom="3"),
                        rx.text("Compiler architectures designed specifically to collapse recursive combinators directly onto bare-metal hardware.", color="slate.10", font_size="1rem", line_height="1.6"),
                        padding="40px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="12px", transition="all 0.3s ease", _hover={"background": "rgba(255, 255, 255, 0.04)", "transform": "translateY(-4px)", "border_color": "rgba(212, 175, 55, 0.3)", "box_shadow": "0 10px 40px rgba(212, 175, 55, 0.05)"}
                    ),
                    rx.box(
                        rx.icon(tag="brain-circuit", color="#00F0FF", size=28, margin_bottom="6"),
                        rx.text("Geometric Inferencing", font_size="1.4rem", weight="bold", color="white", margin_bottom="3"),
                        rx.text("On-board spatial inferencing models built for zero-latency tactical environments, eliminating cloud dependencies.", color="slate.10", font_size="1rem", line_height="1.6"),
                        padding="40px", background="rgba(255, 255, 255, 0.02)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="12px", transition="all 0.3s ease", _hover={"background": "rgba(255, 255, 255, 0.04)", "transform": "translateY(-4px)", "border_color": "rgba(0, 240, 255, 0.3)", "box_shadow": "0 10px 40px rgba(0, 240, 255, 0.05)"}
                    ),
                    columns=["1", "1", "2", "3"], spacing="8", width="100%", max_width="1200px",
                    class_name="animate-fade-up delay-300",
                ),
                width="100%", padding_x="6", padding_top="16", padding_bottom="32", align_items="center",
            ),
            width="100%", position="relative", overflow="hidden", min_height="100vh",
            padding_top="120px", # Account for massive navbar
        )
    )
