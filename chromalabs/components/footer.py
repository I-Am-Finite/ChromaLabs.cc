import reflex as rx

def footer() -> rx.Component:
    return rx.box(
        rx.divider(border_color="rgba(255,255,255,0.05)"),
        rx.center(
            rx.text(
                "Chroma Labs, Inc. ™",
                color="slate.8",
                font_family="JetBrains Mono, monospace",
                font_size="0.75rem",
                letter_spacing="0.2em",
            ),
            width="100%",
            padding_y="35px",
        ),
        background="transparent",
        width="100%",
        position="relative",
        z_index="10",
    )

