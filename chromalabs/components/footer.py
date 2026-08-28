import reflex as rx

def footer() -> rx.Component:
    return rx.box(
        rx.divider(border_color="rgba(255,255,255,0.05)"),
        rx.hstack(
            rx.hstack(
                rx.image(src="/logo.svg", width="24px", height="24px", filter="drop-shadow(0 0 10px rgba(0, 240, 255, 0.3))"),
                rx.text("Chroma Labs", color="white", font_weight="800", font_size="1.2rem", letter_spacing="0.02em"),
                spacing="3",
                align_items="center",
            ),
            rx.spacer(),
            rx.hstack(
                rx.link(rx.text("Capabilities", color="slate.10", font_size="0.95rem", transition="color 0.2s ease", _hover={"color":"white"}), href="/capabilities", _hover={"text_decoration": "none"}),
                rx.link(rx.text("Products", color="slate.10", font_size="0.95rem", transition="color 0.2s ease", _hover={"color":"white"}), href="/products/wearables", _hover={"text_decoration": "none"}),
                rx.link(rx.text("Company", color="slate.10", font_size="0.95rem", transition="color 0.2s ease", _hover={"color":"white"}), href="/company/mission", _hover={"text_decoration": "none"}),
                rx.link(rx.text("Developer", color="slate.10", font_size="0.95rem", transition="color 0.2s ease", _hover={"color":"#00F0FF"}), href="/developer", _hover={"text_decoration": "none"}),
                spacing="8",
                display=["none", "flex", "flex", "flex"],
            ),
            width="100%",
            padding_y="12",
            padding_x="8",
            align_items="center",
        ),
        rx.box(
            rx.text("© 2026 ChromaLabs Incorporated. All rights reserved. Trademarked and Copyrighted. Operating under strict defense export controls.", color="slate.9", font_size="0.85rem", text_align="center", letter_spacing="0.05em"),
            padding_bottom="12"
        ),
        background="rgba(5, 5, 5, 1)",
        width="100%",
        position="relative",
        z_index="10",
        border_top="1px solid rgba(255, 255, 255, 0.03)"
    )
