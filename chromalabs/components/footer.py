import reflex as rx

def footer() -> rx.Component:
    return rx.box(
        rx.divider(border_color="rgba(255,255,255,0.05)"),
        rx.hstack(
            rx.vstack(
                rx.text(
                    "© 2026 Chroma Labs, Inc.™",
                    color="slate.8",
                    font_family="JetBrains Mono, monospace",
                    font_size="0.75rem",
                    letter_spacing="0.2em",
                ),
                align_items="flex-start",
            ),
            rx.spacer(),
            rx.vstack(
                rx.text("17350 STATE HWY 249, STE 220 #37670", color="slate.8", font_size="0.75rem", font_family="JetBrains Mono, monospace"),
                rx.text("HOUSTON, TX 77064", color="slate.8", font_size="0.75rem", font_family="JetBrains Mono, monospace"),
                align_items="flex-end",
                spacing="1"
            ),
            width="100%",
            max_width="1200px",
            margin="0 auto",
            padding_x="12",
            padding_y="35px",
            align_items="center",
        ),
        background="rgba(0, 0, 0, 0.6)",
        backdrop_filter="blur(24px)",
        width="100%",
        position="relative",
        z_index="10",
    )