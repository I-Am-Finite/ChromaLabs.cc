import reflex as rx
from chromalabs.components.layout import base_layout

def papers() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text(
                    "PUBLISHED PAPERS",
                    font_size="0.8rem", weight="bold", color="#DFBC61", letter_spacing="0.15em",
                    class_name="animate-fade-up"
                ),
                rx.text(
                    "Academic Publications.", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    color="white", font_family="'EB Garamond', 'Playfair Display', serif",
                    class_name="animate-fade-up delay-100", margin_bottom="8"
                ),
                rx.center(
                    rx.vstack(
                        rx.icon(tag="file-text", color="slate.9", size=48, margin_bottom="4"),
                        rx.text("Publications Coming Soon", color="white", font_size="1.5rem", font_weight="600"),
                        rx.text("Our upcoming whitepapers and peer-reviewed architectural designs will be published directly to Google Scholar and arXiv.", color="slate.11", text_align="center", max_width="500px", margin_top="2"),
                        align_items="center",
                    ),
                    bg="rgba(10,10,10,0.5)",
                    border="1px dashed rgba(255,255,255,0.1)",
                    border_radius="8px",
                    padding="48px 24px",
                    width="100%",
                    max_width="1200px"
                ),
                align_items="center", justify_content="center", min_height="calc(100vh - 200px)",
                padding_x=["4", "8", "12"],
            ),
            width="100%",
            min_height="80vh",
        )
    )