import reflex as rx

def domain_card(title: str, description: str) -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(title, size="5", color="white"),
            rx.text(description, color="slate.11", size="3"),
            spacing="2",
        ),
        padding="6",
        border="1px solid",
        border_color="slate.4",
        border_radius="none",
        bg="slate.2",
        width="100%",
        _hover={"border_color": "#D4AF37", "transition": "border-color 0.3s ease"}
    )

def technology() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("RESEARCH & ARCHITECTURE", size="8", color="white", letter_spacing="-0.02em"),
            rx.text(
                "ChromaLabs focuses on three primary vectors to eliminate compute bottlenecks.", 
                color="slate.11", 
                size="4",
                margin_bottom="6"
            ),
            
            rx.grid(
                domain_card(
                    "Geometric Compute", 
                    "Translating complex spatial logic into physical hardware constraints, bypassing traditional von Neumann bottlenecks."
                ),
                domain_card(
                    "Photonic Compute", 
                    "Interfacing optical physics with silicon logic to shatter power and bandwidth limits at the absolute edge."
                ),
                domain_card(
                    "High Performance Computing (HPC)", 
                    "Advanced data structure optimization and execution models tailored for defense scale and massive data environments."
                ),
                columns="3",
                spacing="6",
                width="100%",
                max_width="1000px"
            ),

            rx.link(
                rx.button("RETURN", variant="outline", color_scheme="gray", radius="none", margin_top="8"), 
                href="/"
            ),
            align="center",
            justify="center",
            min_height="100vh",
            bg="black",
            padding="10"
        )
    )
