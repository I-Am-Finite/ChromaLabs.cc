import reflex as rx
from chromalabs.components.layout import base_layout

def hpc() -> rx.Component:
    return base_layout(
        rx.box(
            rx.vstack(
                rx.text("THERMODYNAMIC SUPREMACY", font_family="JetBrains Mono, monospace", font_size="1rem", color="#DFBC61", margin_bottom="4", letter_spacing="0.15em", class_name="animate-fade-up"),
                rx.text("High Performance Computing.", font_size=["3rem", "4rem", "5rem"], font_weight="800", line_height="1.1", color="white", letter_spacing="-0.03em", margin_bottom="8", text_align="center", font_family="'EB Garamond', 'Playfair Display', serif", class_name="animate-fade-up delay-100"),
                rx.text(
                    "The HPC community is colliding with the physical limits of silicon heat dissipation. By mapping dense algebraic workloads into direct spatial networks, we radically alter the power requirements of exascale computation.",
                    color="slate.11", font_size="1.25rem", line_height="1.7", max_width="800px", text_align="center", margin_bottom="12", class_name="animate-fade-up delay-200"
                ),
                rx.grid(
                    rx.box(
                        rx.icon(tag="thermometer-snowflake", color="#DFBC61", size=32, margin_bottom="6"),
                        rx.text("Execution Substrate", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("We do not simply optimize existing algorithms; we re-architect the physical execution substrate to achieve structural power efficiency.", color="slate.11", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(10, 10, 10, 0.6)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    rx.box(
                        rx.icon(tag="server", color="#DFBC61", size=32, margin_bottom="6"),
                        rx.text("Compute Density", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("By treating complex data structures as explicit dimensional geometry, we enable unprecedented processing density per square foot.", color="slate.11", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(10, 10, 10, 0.6)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    rx.box(
                        rx.icon(tag="flame", color="#DFBC61", size=32, margin_bottom="6"),
                        rx.text("Thermal Decarbonization", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("Stripping out redundant memory movement eliminates the single largest thermal draw in modern supercomputing facilities.", color="slate.11", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(10, 10, 10, 0.6)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    rx.box(
                        rx.icon(tag="bar-chart-2", color="#DFBC61", size=32, margin_bottom="6"),
                        rx.text("Limitless Scale", font_size="1.5rem", font_weight="bold", color="white", margin_bottom="4"),
                        rx.text("Natively parallel, cacheless algebraic graphs that scale linearly without the traditional overhead of interconnect switching.", color="slate.11", font_size="1.1rem", line_height="1.6"),
                        padding="40px", background="rgba(10, 10, 10, 0.6)", border="1px solid rgba(255, 255, 255, 0.05)", border_radius="8px"
                    ),
                    grid_template_columns=["1fr", "repeat(2, 1fr)"], gap="8", width="100%", max_width="1000px", class_name="animate-fade-up delay-300"
                ),
                rx.link(
                    rx.button("CONTACT US", bg="#DFBC61", color="black", border_radius="4px", font_size="0.9rem", font_weight="bold", padding="24px 32px", margin_top="16", cursor="pointer", transition="all 0.2s", _hover={"bg": "#e6c455", "transform": "translateY(-2px)"}),
                    href="/contact", _hover={"text_decoration": "none"}, class_name="animate-fade-up delay-400"
                ),
                align_items="center",
                justify_content="center",
                width="100%",
                min_height="calc(100vh - 200px)", padding_y=["12", "24"],
                padding_x=["6", "8", "12"]
            ),
            width="100%", position="relative", flex_grow="1", display="flex", justify_content="center"
        )
    )