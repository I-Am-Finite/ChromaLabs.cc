import reflex as rx

def menu_item(text: str, url: str) -> rx.Component:
    return rx.menu.item(
        rx.link(
            rx.text(text, color="slate.11", _hover={"color": "white"}, size="2"),
            href=url,
            width="100%",
            display="block"
        ),
        bg="transparent",
        _hover={"bg": "rgba(255,255,255,0.05)"},
        padding_y="2",
        padding_x="3"
    )

def navbar_dropdown(title: str, items: list[tuple[str, str]]) -> rx.Component:
    return rx.menu.root(
        rx.menu.trigger(
            rx.button(
                rx.text(title, color="slate.9", _hover={"color": "white"}, size="2", font_weight="500", letter_spacing="0.05em"),
                bg="transparent",
                _hover={"bg": "transparent"},
                cursor="pointer",
                padding="0"
            )
        ),
        rx.menu.content(
            *[menu_item(label, url) for label, url in items],
            bg="rgba(10, 10, 10, 0.95)",
            border="1px solid rgba(255,255,255,0.1)",
            backdrop_filter="blur(16px)",
            padding="2",
            border_radius="4px",
            min_width="160px"
        )
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
            navbar_dropdown("PRODUCTS", [
                ("Photonic Core", "/products/hardware"),
                ("Transceivers", "/products/hardware"),
                ("Capabilities", "/products/capabilities"),
            ]),
            navbar_dropdown("SOLUTIONS", [
                ("Wearables & Tech Armor", "/solutions/defense"),
                ("Air & Autonomy", "/solutions/defense"),
                ("Land & Tactical", "/solutions/defense"),
                ("Hyperscale AI", "/solutions/hyperscale"),
            ]),
            navbar_dropdown("COMPANY", [
                ("Mission", "/company/mission"),
                ("Careers", "/company/careers"),
                ("Contact", "/contact"),
            ]),
            navbar_dropdown("DEVELOPER", [
                ("API & SDK", "/developer"),
                ("Documentation", "/developer"),
            ]),
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
