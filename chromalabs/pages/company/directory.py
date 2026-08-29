import reflex as rx
from chromalabs.components.layout import base_layout

def staff_card(name: str, role: str, spec: str, github: str = "", linkedin: str = "") -> rx.Component:
    links = []
    if github:
        links.append(rx.link(rx.text("GITHUB", font_size="0.75rem", font_family="JetBrains Mono, monospace", font_weight="bold", color="slate.10", _hover={"color": "#DFBC61"}), href=github, is_external=True))
    if linkedin:
        links.append(rx.link(rx.text("LINKEDIN", font_size="0.75rem", font_family="JetBrains Mono, monospace", font_weight="bold", color="slate.10", _hover={"color": "#DFBC61"}), href=linkedin, is_external=True))
        
    return rx.box(
        rx.vstack(
            rx.box(width="40px", height="4px", bg="#DFBC61", margin_bottom="2"),
            rx.text(name, color="white", font_size="1.25rem", font_weight="700", line_height="1.2"),
            rx.text(role, color="slate.11", font_size="0.9rem", font_family="JetBrains Mono, monospace", margin_top="1"),
            rx.text(spec, color="slate.9", font_size="0.8rem", margin_top="4", line_height="1.5", flex_grow="1"),
            rx.hstack(*links, margin_top="4", spacing="4") if links else rx.box(),
            align_items="flex-start",
            height="100%",
        ),
        bg="rgba(15,15,15,0.6)",
        border="1px solid rgba(255,255,255,0.05)",
        border_radius="4px",
        padding="32px 24px",
        width="100%",
        height="100%",
        transition="all 0.2s ease",
        _hover={"bg": "rgba(25,25,25,0.8)", "border": "1px solid rgba(255,255,255,0.1)", "transform": "translateY(-2px)"},
    )

def directory() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text(
                    "EXECUTIVE BOARD",
                    font_size="0.8rem", weight="bold", color="#DFBC61", letter_spacing="0.15em",
                    class_name="animate-fade-up", text_align="center"
                ),
                rx.text(
                    "The Architecture Team.", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    color="white", font_family="'EB Garamond', 'Playfair Display', serif",
                    class_name="animate-fade-up delay-100", margin_bottom="4", text_align="center"
                ),
                rx.text(
                    "The founders and executive board pioneering the next dimensional layer of compute.",
                    font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="12", line_height="1.6",
                    class_name="animate-fade-up delay-200"
                ),
                rx.grid(
                    staff_card(
                        "Michael Reser", 
                        "Founder, CEO, CTO, & President", 
                        "Pioneered the core technology and research driving Chroma Labs. Architecting the transition from planar digital models to volumetric, post-digital physical structures.",
                        github="https://github.com/I-Am-Finite",
                        linkedin="https://www.linkedin.com/in/michaelreser/"
                    ),
                    staff_card(
                        "Bryan C. Coward", 
                        "Co-Founder, VP, & CFO", 
                        "Directing financial architecture and executive operations. Scaling the structural and capital foundations required to support post-digital hardware deployment.",
                        github="https://github.com/bmasterc",
                        linkedin="https://www.linkedin.com/in/cowardbryan/"
                    ),
                    staff_card(
                        "Connor Dudek", 
                        "Chief Marketing Officer (CMO)", 
                        "Leveraging extensive high-velocity brand architecture from the global esports sector to position Chroma Labs' deep-tech narrative across the post-digital ecosystem.",
                        linkedin="https://www.linkedin.com/in/connordudek/"
                    ),
                    staff_card(
                        "Megan F. Teague", 
                        "Secretary of the Board", 
                        "Overseeing corporate governance, strategic administration, and board compliance as the lab transitions into hyperscale execution.",
                    ),
                    grid_template_columns=["1fr", "1fr", "repeat(2, 1fr)"],
                    spacing="6",
                    width="100%",
                    max_width="1000px",
                    class_name="animate-fade-up delay-300"
                ),
                width="100%",
                max_width="1200px",
                align_items="center", justify_content="center", min_height="calc(100vh - 200px)",
                padding_y=["12", "24"],
                padding_x=["4", "8", "12"],
            ),
            width="100%",
            min_height="80vh",
            display="flex",
            justify_content="center"
        )
    )