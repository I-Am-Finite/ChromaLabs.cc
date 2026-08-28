import reflex as rx
from chromalabs.components.layout import base_layout

def contact() -> rx.Component:
    return base_layout(
        rx.box(
            rx.box(
                position="absolute", top="10%", left="50%", transform="translateX(-50%)",
                width="80vw", height="80vw", max_width="800px", max_height="800px",
                background="radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, transparent 60%)",
                z_index="-1", filter="blur(60px)", border_radius="50%",
            ),
            rx.vstack(
                rx.text(
                    "Contact & Waitlist", 
                    font_size=["2.5rem", "3.5rem", "4.5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    text_align="center", margin_bottom="6",
                    background_image="linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)", background_clip="text",
                    style={"-webkit-text-fill-color": "transparent"},
                    class_name="animate-fade-up",
                ),
                rx.text(
                    "Engage with our architecture team or apply for Developer SDK early access.",
                    font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="12", line_height="1.6",
                    class_name="animate-fade-up delay-100",
                ),
                
                rx.box(
                    rx.el.form(
                        rx.vstack(
                            rx.input(name="name", placeholder="Name", width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white", required=True),
                            rx.input(name="email", type="email", placeholder="Defense or Enterprise Email", width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white", required=True),
                            rx.input(name="company", placeholder="Organization / Agency", width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white", required=True),
                            rx.text_area(name="message", placeholder="Deployment specifications or capabilities requested...", width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white", min_height="150px", required=True),
                            rx.button("Submit Inquiry", type="submit", bg="white", color="black", size="3", width="100%", margin_top="4", cursor="pointer", transition="all 0.2s", _hover={"bg": "#e0e0e0"}),
                            spacing="4",
                            width="100%",
                        ),
                        action="https://formspree.io/f/placeholder",
                        method="POST",
                    ),
                    width="100%", max_width="500px", padding="32px",
                    border="1px solid rgba(255,255,255,0.05)", background="rgba(255,255,255,0.02)", border_radius="8px",
                    class_name="animate-fade-up delay-200",
                ),
                width="100%", padding_x="6", padding_top="16", padding_bottom="32", align_items="center",
            ),
            width="100%", position="relative", overflow="hidden",
        )
    )
