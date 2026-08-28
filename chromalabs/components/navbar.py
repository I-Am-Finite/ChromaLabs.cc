import reflex as rx

def menu_item(text: str, url: str) -> rx.Component:
    return rx.menu.item(
        rx.link(
            rx.text(text, color="slate.11", font_size="0.9rem", transition="color 0.2s ease", _hover={"color": "white"}),
            href=url,
            width="100%",
            display="block",
            _hover={"text_decoration": "none"}
        ),
        bg="transparent",
        _hover={"bg": "rgba(255, 255, 255, 0.05)"},
        padding_y="12px",
        padding_x="16px",
        cursor="pointer",
        transition="background 0.2s ease",
    )

def navbar_dropdown(title: str, items: list[tuple[str, str]]) -> rx.Component:
    return rx.menu.root(
        rx.menu.trigger(
            rx.button(
                rx.text(title, color="slate.9", font_size="0.8rem", font_weight="600", letter_spacing="0.1em", transition="color 0.2s ease", _hover={"color": "white"}),
                bg="transparent",
                _hover={"bg": "transparent"},
                cursor="pointer",
                padding="0",
                height="auto",
            )
        ),
        rx.menu.content(
            *[menu_item(label, url) for label, url in items],
            bg="rgba(5, 5, 5, 0.95)",
            border="1px solid rgba(255, 255, 255, 0.08)",
            backdrop_filter="blur(24px)",
            padding="4px",
            border_radius="8px",
            box_shadow="0 10px 40px rgba(0,0,0,0.5)",
            min_width="200px",
            margin_top="16px",
        )
    )

def navbar() -> rx.Component:
    return rx.hstack(
        rx.hstack(
            rx.image(src="/logo.svg", width="32px", height="32px", transition="transform 0.3s ease", _hover={"transform": "rotate(90deg)"}),
            rx.link(rx.text("Chroma Labs", font_weight="800", letter_spacing="0.02em", color="white", size="4"), href="/", _hover={"text_decoration": "none"}),
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
            ]),
            spacing="8",
            align_items="center",
            display=["none", "none", "none", "flex"],
        ),
        rx.spacer(),
        rx.hstack(
            rx.link(
                rx.button(
                    "Developer Portal", 
                    bg="rgba(0, 240, 255, 0.1)", color="#00F0FF", border="1px solid rgba(0, 240, 255, 0.3)", 
                    font_size="0.85rem", font_weight="600", padding="16px 24px", border_radius="4px", 
                    cursor="pointer", transition="all 0.2s ease", box_shadow="0 0 15px rgba(0, 240, 255, 0)",
                    _hover={"bg": "rgba(0, 240, 255, 0.2)", "box_shadow": "0 0 20px rgba(0, 240, 255, 0.2)", "transform": "translateY(-1px)"}
                ),
                href="/contact", _hover={"text_decoration": "none"}
            ),
        ),
        width="100%",
        padding_x="8",
        padding_y="6",
        align_items="center",
        position="fixed",
        top="0",
        border_bottom="1px solid rgba(255, 255, 255, 0.05)",
        background="rgba(0, 0, 0, 0.6)",
        backdrop_filter="blur(24px)",
        z_index="50",
    )
