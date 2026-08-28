import reflex as rx
from chromalabs.components.layout import base_layout

def job_card(title: str, dept: str, loc: str) -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.text(dept, color="#00F0FF", size="1", weight="bold", letter_spacing="0.1em"),
            rx.heading(title, size="5", color="white", margin_bottom="2"),
            rx.hstack(
                rx.icon(tag="map-pin", size=14, color="slate.11"),
                rx.text(loc, color="slate.11", size="2"),
                align_items="center",
            ),
            align_items="flex-start",
        ),
        padding="32px",
        border="1px solid rgba(255,255,255,0.05)",
        background="rgba(255,255,255,0.02)",
        border_radius="12px",
        transition="all 0.3s ease",
        _hover={
            "background": "rgba(255,255,255,0.04)", 
            "border_color": "rgba(0, 240, 255, 0.3)",
            "transform": "translateY(-4px)",
            "box_shadow": "0 10px 40px rgba(0, 240, 255, 0.05)"
        },
        cursor="pointer",
        width="100%",
    )

def careers() -> rx.Component:
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
                    rx.text("JOIN THE LAB", font_size="0.8rem", weight="bold", color="#00F0FF", letter_spacing="0.15em"),
                    padding="6px 16px", border="1px solid rgba(0, 240, 255, 0.2)", border_radius="4px",
                    background="rgba(0, 240, 255, 0.05)", margin_bottom="8", box_shadow="0 0 20px rgba(0, 240, 255, 0.1)",
                    class_name="animate-fade-up",
                ),
                rx.text(
                    "Careers", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    text_align="center", margin_bottom="6",
                    background_image="linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)", background_clip="text",
                    style={"-webkit-text-fill-color": "transparent"},
                    class_name="animate-fade-up delay-100",
                ),
                rx.text(
                    "We are actively seeking elite engineers to re-architect the physical limits of computation.",
                    font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="16", line_height="1.6",
                    class_name="animate-fade-up delay-200",
                ),
                rx.grid(
                    job_card("Senior ML Hardware Engineer", "ENGINEERING", "Austin, TX / Remote"),
                    job_card("Embedded Systems Lead", "ENGINEERING", "Austin, TX"),
                    job_card("Optical Physicist", "RESEARCH", "Austin, TX"),
                    job_card("Defense Integration Specialist", "DEPLOYMENT", "Washington D.C."),
                    columns="2", spacing="6", width="100%", max_width="1000px",
                    class_name="animate-fade-up delay-300",
                ),
                width="100%", padding_x="6", padding_top="16", padding_bottom="32", align_items="center",
            ),
            width="100%", position="relative", overflow="hidden", min_height="100vh",
            padding_top="120px",
        )
    )
