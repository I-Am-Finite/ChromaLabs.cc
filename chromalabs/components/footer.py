import reflex as rx

def footer() -> rx.Component:
    return rx.box(
        rx.divider(border_color="rgba(255,255,255,0.05)"),
        rx.hstack(
            rx.hstack(
                rx.image(src="/logo.svg", width="20px", height="20px"),
                rx.text("Chroma Labs", color="white", weight="bold", size="3"),
                spacing="3",
                align_items="center",
            ),
            rx.spacer(),
            rx.hstack(
                rx.link(rx.text("Capabilities", color="slate.11", size="2", _hover={"color":"white"}), href="/capabilities"),
                rx.link(rx.text("Products", color="slate.11", size="2", _hover={"color":"white"}), href="/products/wearables"),
                rx.link(rx.text("Company", color="slate.11", size="2", _hover={"color":"white"}), href="/company/mission"),
                spacing="6",
            ),
            width="100%",
            padding_y="8",
            padding_x="8",
            align_items="center",
        ),
        rx.box(
            rx.text("© 2026 Chroma Labs. All rights reserved.", color="slate.9", size="1", text_align="center"),
            padding_bottom="8"
        ),
        background="black",
        width="100%",
        position="relative",
        z_index="10",
    )
