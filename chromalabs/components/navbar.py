import reflex as rx

def navbar_link(text: str, url: str) -> rx.Component:
    return rx.link(
        rx.text(text, color="slate.9", _hover={"color": "white"}, size="2", font_weight="500", letter_spacing="0.05em"),
        href=url
    )

def navbar() -> rx.Component:
    return rx.hstack(
        rx.hstack(
            rx.image(src="/logo.svg", width="32px", height="32px"),
            rx.link(rx.text("Chroma Labs", font_weight="700", letter_spacing="0.05em", color="white", size="4"), href="/"),
            spacing="3",
            align_items="center",
        ),
        rx.spacer(),
        rx.hstack(
            navbar_link("Hardware", "/products/hardware"),
            navbar_link("Capabilities", "/products/capabilities"),
            navbar_link("Solutions", "/solutions/defense"),
            navbar_link("Company", "/company/mission"),
            navbar_link("Developer", "/developer"),
            spacing="6",
        ),
        width="100%",
        max_width="1200px",
        padding_x="6",
        padding_y="5",
        align_items="center",
        position="fixed",
        top="0",
        backdrop_filter="blur(16px)",
        border_bottom="1px solid rgba(255,255,255,0.05)",
        background="rgba(3, 3, 3, 0.6)",
        z_index="50",
        left="50%",
        transform="translateX(-50%)",
    )
