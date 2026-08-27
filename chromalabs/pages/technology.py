import reflex as rx

def technology() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("TECHNOLOGY", size="8", color="white"),
            rx.text("Next-Generation Photonic & Geometric Architectures.", color="gray.400"),
            rx.text("Low Size, Weight, and Power (SWaP) for Edge Defense.", color="gray.400"),
            rx.link(rx.button("RETURN", variant="outline", color="white"), href="/"),
            align="center",
            justify="center",
            min_height="100vh",
            bg="black",
        )
    )
