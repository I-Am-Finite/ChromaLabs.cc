import reflex as rx
from .navbar import navbar
from .footer import footer

def base_layout(content: rx.Component) -> rx.Component:
    return rx.box(
        # Professional Gradient Background
        rx.box(
            position="fixed",
            top="0",
            left="0",
            width="100vw",
            height="100vh",
            z_index="-1",
            bg="radial-gradient(ellipse at top, #15151a, #050505), radial-gradient(ellipse at bottom, #0a0a0f, #000000)",
        ),
        navbar(),
        rx.box(
            content,
            min_height="calc(100vh - 150px)",
            padding_top="120px",
            position="relative",
            z_index="10",
        ),
        footer(),
        background="transparent",
        color="white",
        font_family="Inter, sans-serif"
    )
