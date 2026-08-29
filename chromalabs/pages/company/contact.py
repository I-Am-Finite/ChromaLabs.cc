import reflex as rx
from chromalabs.components.layout import base_layout

class ContactState(rx.State):
    @rx.var
    def current_topic(self) -> str:
        t = self.router.page.params.get("topic", "")
        if isinstance(t, list) and len(t) > 0:
            return t[0]
        return str(t)

def contact() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text(
                    "INQUIRIES",
                    font_size="0.8rem", weight="bold", color="#DFBC61", letter_spacing="0.15em",
                    class_name="animate-fade-up", text_align="center"
                ),
                rx.text(
                    "Contact the Lab.", 
                    font_size=["3rem", "4rem", "5rem"], weight="bold", letter_spacing="-0.04em", line_height="1.0",
                    color="white", font_family="'EB Garamond', 'Playfair Display', serif",
                    class_name="animate-fade-up delay-100", margin_bottom="8", text_align="center"
                ),
                rx.box(
                    rx.el.form(
                        rx.vstack(
                            rx.text("SECURE COMMUNIQUE", font_size="1rem", font_weight="bold", color="white", letter_spacing="0.1em", margin_bottom="2"),
                            rx.input(name="topic", placeholder="Subject / Topic", default_value=ContactState.current_topic, width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white", required=True),
                            rx.input(name="email", type="email", placeholder="Defense or Enterprise Email", width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white", required=True),
                            rx.input(name="company", placeholder="Organization / Agency", width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white", required=True),
                            rx.text_area(name="message", placeholder="Deployment specifications or capabilities requested...", width="100%", size="3", bg="rgba(0,0,0,0.5)", border_color="rgba(255,255,255,0.1)", color="white", min_height="150px", required=True),
                            rx.button("TRANSMIT", type="submit", bg="#DFBC61", color="black", size="3", width="100%", margin_top="4", cursor="pointer", transition="all 0.2s", font_weight="bold", _hover={"bg": "#e6c455", "transform": "translateY(-2px)"}),
                            spacing="4",
                            width="100%",
                        ),
                        action="mailto:inquiries@chromalabs.cc",
                        method="GET",
                        enctype="text/plain",
                    ),
                    width="100%", max_width="500px", padding="40px",
                    border="1px solid rgba(255,255,255,0.05)", background="rgba(10,10,10,0.6)", border_radius="8px",
                    class_name="animate-fade-up delay-200",
                ),
                rx.text(
                    "Headquarters: 17350 STATE HWY 249, STE 220 #37670, HOUSTON, TX 77064",
                    font_size="0.85rem", color="slate.10", margin_top="8", font_family="JetBrains Mono, monospace",
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