import reflex as rx

def index() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.image(src="/logo.svg", width="150px", height="150px", margin_bottom="-4"),
            rx.heading("CHROMALABS", size="9", weight="bold", color="white", letter_spacing="-0.05em"),
            rx.text(
                "Pioneering geometric compute architectures by mapping high-dimensional logic directly to consumer photonic hardware. We eliminate the traditional bottlenecks for AI, data, and the defense industries.", 
                size="5", 
                color="slate.11", 
                weight="medium",
                max_width="700px",
                text_align="center",
                margin_bottom="4"
            ),
            rx.box(
                rx.text("NSF I-Corps Backed", size="2", weight="bold", color="#D4AF37", letter_spacing="0.1em"),
                padding_y="2",
            ),
            rx.hstack(
                rx.link(rx.button("TECHNOLOGY", variant="solid", color_scheme="blue", radius="none"), href="/technology"),
                rx.link(rx.button("MISSION", variant="outline", color_scheme="slate", radius="none"), href="/mission"),
                spacing="4",
                padding_top="4"
            ),
            align="center",
            justify="center",
            min_height="100vh",
            bg="black",
        )
    )
