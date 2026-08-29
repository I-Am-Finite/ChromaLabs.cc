import reflex as rx
from chromalabs.components.layout import base_layout

def developer() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text(
                    "DEVELOPER PORTAL",
                    font_size="0.8rem", weight="bold", color="#DFBC61", letter_spacing="0.15em",
                    class_name="animate-fade-up", text_align="center"
                ),
                rx.text(
                    "SDK & API Access.", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    color="white", font_family="'EB Garamond', 'Playfair Display', serif",
                    class_name="animate-fade-up delay-100", margin_bottom="4", text_align="center"
                ),
                rx.text(
                    "Volumetric compilation tools and endpoint access for enterprise and defense integration.",
                    font_size="1.25rem", color="slate.11", max_width="700px", text_align="center", margin_bottom="12", line_height="1.6",
                    class_name="animate-fade-up delay-200"
                ),
                
                rx.center(
                    rx.box(
                        rx.el.form(
                            rx.vstack(
                                rx.text("BETA SDK WAITLIST", font_size="1.1rem", font_weight="bold", color="white", letter_spacing="0.1em", margin_bottom="2"),
                                rx.text("Due to strict export controls and proprietary hardware constraints, beta access is highly restricted.", color="slate.11", font_size="0.9rem", margin_bottom="6", line_height="1.5"),
                                rx.input(name="email", type="email", placeholder="Enter your institutional or defense email", width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white", required=True),
                                rx.button("Request Clearance", type="submit", bg="#DFBC61", color="black", size="3", width="100%", margin_top="4", cursor="pointer", transition="all 0.2s", _hover={"bg": "#e6c455"}),
                                spacing="2",
                                width="100%",
                            ),
                            action="mailto:access@chromalabs.cc",
                            method="GET",
                            enctype="text/plain",
                        ),
                        width="100%", max_width="500px", padding="32px",
                        border="1px solid rgba(255,255,255,0.05)", background="rgba(10,10,10,0.5)", border_radius="8px",
                    ),
                    width="100%",
                    class_name="animate-fade-up delay-300"
                ),
                width="100%",
                max_width="1200px",
                margin_top="12",
                align_items="center",
                padding_top="24",
                padding_x=["4", "8", "12"],
            ),
            width="100%",
            min_height="80vh",
            display="flex",
            justify_content="center"
        )
    )