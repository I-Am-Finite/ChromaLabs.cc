import reflex as rx
from .navbar import navbar
from .footer import footer

def base_layout(content: rx.Component) -> rx.Component:
    return rx.box(
        rx.box(
            position="fixed", top="0", left="0", width="100vw", height="100vh", z_index="-1",
            bg="radial-gradient(ellipse at top, #15151a, #050505), radial-gradient(ellipse at bottom, #0a0a0f, #000000)",
        ),
        rx.vstack(
            navbar(),
            rx.box(
                content,
                flex_grow="1",
                width="100%",
                position="relative",
                z_index="10",
                display="flex",
                flex_direction="column",
            ),
            footer(),
            min_height="100vh",
            width="100%",
            spacing="0",
        ),
        background="transparent", color="white", font_family="Inter, sans-serif"
    )
