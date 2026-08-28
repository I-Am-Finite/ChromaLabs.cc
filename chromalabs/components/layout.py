import reflex as rx
from .navbar import navbar
from .footer import footer

def base_layout(content: rx.Component) -> rx.Component:
    return rx.box(
        # Global Background Grid & Gradient
        rx.box(
            position="fixed",
            top="0",
            left="0",
            width="100vw",
            height="100vh",
            z_index="-1",
            bg="radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.05), transparent 60%), #030303",
            style={
                "background_image": "radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.05), transparent 60%), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                "background_size": "100% 100%, 40px 40px, 40px 40px",
                "background_position": "0 0, center center, center center",
            }
        ),
        navbar(),
        rx.box(
            content,
            min_height="calc(100vh - 250px)",
            padding_top="100px",
        ),
        footer(),
        rx.script(src="/fractal.js"),
        background="transparent",
        color="white",
        font_family="Inter, sans-serif"
    )
