import reflex as rx

def mission() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("MISSION", size="8", color="white"),
            rx.text("NSF I-Corps Backed Research. Strategic Government Defense.", color="gray.400"),
            rx.link(rx.button("RETURN", variant="outline", color_scheme="gray", radius="none"), href="/"),
            align="center",
            justify="center",
            min_height="100vh",
            bg="black",
        )
    )
