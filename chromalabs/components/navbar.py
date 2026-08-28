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
            navbar_dropdown("CAPABILITIES", [
                ("Algorithms", "/capabilities"),
                ("Research", "/capabilities"),
            ]),
            navbar_dropdown("PRODUCTS", [
                ("Wearables", "/products/wearables"),
                ("Tech Armor", "/products/wearables"),
            ]),
            navbar_dropdown("SOLUTIONS", [
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
        padding_x="8",
        padding_y="8",
        align_items="center",
        position="fixed",
        top="0",
        border_bottom="1px solid rgba(255,255,255,0.05)",
        background="rgba(0, 0, 0, 0.7)",
        backdrop_filter="blur(20px)",
        z_index="50",
    )
