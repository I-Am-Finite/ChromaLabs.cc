import reflex as rx

def footer_section(title: str, links: list[tuple[str, str]]) -> rx.Component:
    return rx.vstack(
        rx.text(title, color="white", weight="bold", size="2", letter_spacing="0.05em", margin_bottom="2"),
        *[rx.link(rx.text(text, color="slate.11", size="2", _hover={"color": "white"}), href=url) for text, url in links],
        align_items="flex-start",
        spacing="2"
    )

def footer() -> rx.Component:
    return rx.box(
        rx.divider(border_color="rgba(255,255,255,0.05)"),
        rx.grid(
            rx.vstack(
                rx.image(src="/logo.svg", width="24px", height="24px"),
                rx.text("Chroma Labs", color="white", weight="bold", size="3"),
                rx.text("Higher Dimensional HPC and Defense Research Lab.", color="slate.11", size="2", max_width="250px"),
                align_items="flex-start",
            ),
            footer_section("PRODUCTS", [("Photonic Core", "/products/hardware"), ("Volumetric Router", "/products/hardware"), ("Capabilities", "/products/capabilities")]),
            footer_section("SOLUTIONS", [("Defense & Aerospace", "/solutions/defense"), ("Hyperscale AI", "/solutions/hyperscale")]),
            footer_section("COMPANY", [("Mission", "/company/mission"), ("Developer", "/developer"), ("Careers", "/company/careers"), ("Contact", "/contact")]),
            columns="4",
            spacing="8",
            padding_y="16",
            padding_x="6",
            max_width="1200px",
            margin="0 auto",
        ),
        background="#030303",
        width="100%",
        position="relative",
        z_index="10",
    )
