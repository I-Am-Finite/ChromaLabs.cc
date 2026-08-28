import reflex as rx

def menu_item(text: str, url: str) -> rx.Component:
    return rx.box(
        rx.link(
            rx.text(text, color="slate.11", font_size="1.1rem", transition="color 0.2s ease", _hover={"color": "white"}),
            href=url,
            width="100%",
            display="block",
            _hover={"text_decoration": "none"}
        ),
        bg="transparent",
        _hover={"bg": "rgba(255, 255, 255, 0.05)"},
        padding_y="16px",
        padding_x="20px",
        cursor="pointer",
        transition="background 0.2s ease",
        border_radius="4px",
    )

def navbar_dropdown(title: str, items: list[tuple[str, str]]) -> rx.Component:
    return rx.hover_card.root(
        rx.hover_card.trigger(
            rx.button(
                rx.text(title, color="slate.11", font_size="0.9rem", font_weight="500", letter_spacing="0.05em", transition="color 0.2s ease"),
                bg="transparent",
                border="1px solid transparent",
                padding="8px 16px",
                border_radius="6px",
                cursor="pointer",
                transition="all 0.2s ease",
                _hover={
                    "bg": "rgba(255, 255, 255, 0.05)", 
                    "border": "1px solid rgba(255, 255, 255, 0.1)",
                    "box_shadow": "0 0 15px rgba(255, 255, 255, 0.05)",
                    "color": "white"
                },
                height="auto",
            )
        ),
        rx.hover_card.content(
            *[menu_item(label, url) for label, url in items],
            bg="rgba(5, 5, 5, 0.95)",
            border="1px solid rgba(255, 255, 255, 0.08)",
            backdrop_filter="blur(24px)",
            padding="6px",
            border_radius="8px",
            box_shadow="0 10px 40px rgba(0,0,0,0.5)",
            min_width="220px",
        )
    )

def navbar() -> rx.Component:
    return rx.hstack(
        # Formal Horizontal Lockup
        rx.link(
            rx.hstack(
                rx.image(src="/logo_glyph.png", height="60px", width="auto"),
                rx.vstack(
                    rx.text("CHROMA", font_weight="900", font_size="1.8rem", letter_spacing="0.1em", color="white", line_height="1"),
                    rx.text("DEFENSE AI LAB", font_family="JetBrains Mono, monospace", font_weight="700", font_size="0.65rem", letter_spacing="0.15em", color="#D4AF37", line_height="1"),
                    spacing="1",
                    align_items="flex-start",
                ),
                spacing="4",
                align_items="center",
            ),
            href="/", 
            _hover={"text_decoration": "none"}
        ),
        
        rx.spacer(),

        navbar_dropdown("CAPABILITIES", [
            ("AI", "/capabilities/ai"),
            ("HPC", "/capabilities/hpc"),
            ("Government", "/capabilities/government"),
        ]),
        navbar_dropdown("RESEARCH", [
            ("Beyond Binary", "/research"),
            ("Volumetric Logic", "/research"),
        ]),
        navbar_dropdown("COMPANY", [
            ("Mission", "/company/mission"),
            ("Careers", "/company/careers"),
            ("Staff Directory", "/company/mission"), # Placeholder for now
            ("Contact Us", "/contact"),
        ]),
        navbar_dropdown("DEVELOPER PORTAL", [
            ("API Documentation", "/developer"),
            ("SDK Access", "/developer"),
        ]),
        width="100%",
        padding_x="12",
        height="100px",
        align_items="center",
        position="fixed",
        top="0",
        border_bottom="1px solid rgba(255, 255, 255, 0.05)",
        background="rgba(0, 0, 0, 0.6)",
        backdrop_filter="blur(24px)",
        z_index="50",
    )