import reflex as rx

def index() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("CHROMA.CC", size="9", weight="bold", color="white"),
            rx.text("Geometric & Photonic Compute", size="5", color="gray.400"),
            rx.hstack(
                rx.link(rx.button("TECHNOLOGY", variant="outline", color="white"), href="/technology"),
                rx.link(rx.button("MISSION", variant="outline", color="white"), href="/mission"),
                spacing="4"
            ),
            align="center",
            justify="center",
            min_height="100vh",
            bg="black",
        )
    )
