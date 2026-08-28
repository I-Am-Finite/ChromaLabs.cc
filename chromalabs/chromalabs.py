import reflex as rx

from chromalabs.pages.index import index
from chromalabs.pages.capabilities.capabilities import capabilities
from chromalabs.pages.research.research import research
from chromalabs.pages.company.mission import mission
from chromalabs.pages.company.careers import careers
from chromalabs.pages.company.contact import contact
from chromalabs.pages.developer.developer import developer

app = rx.App(
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&family=EB+Garamond:wght@400;600;800&display=swap",
        "/style.css",
    ],
    style={
        "font_family": "Inter, sans-serif",
        "@keyframes traceX": {
            "0%": {"transform": "translateX(-100%)"},
            "100%": {"transform": "translateX(100vw)"},
        },
        "@keyframes traceY": {
            "0%": {"transform": "translateY(-100%)"},
            "100%": {"transform": "translateY(100vh)"},
        },
        "@keyframes fuseLeft": {
            "0%, 20%": {"transform": "translate(0, 0)", "opacity": "1"},
            "40%, 60%": {"transform": "translate(20px, -30px)", "opacity": "0"},
            "100%": {"transform": "translate(0, 0)", "opacity": "1"},
        },
        "@keyframes fuseRight": {
            "0%, 20%": {"transform": "translate(0, 0)", "opacity": "1"},
            "40%, 60%": {"transform": "translate(-20px, -30px)", "opacity": "0"},
            "100%": {"transform": "translate(0, 0)", "opacity": "1"},
        },
        "@keyframes pulseCore": {
            "0%, 35%": {"box_shadow": "0 0 5px #D4AF37", "background": "rgba(212, 175, 55, 0.4)"},
            "45%, 55%": {"box_shadow": "0 0 25px #FF0000", "background": "#FF0000"},
            "100%": {"box_shadow": "0 0 5px #D4AF37", "background": "rgba(212, 175, 55, 0.4)"},
        },
        "@keyframes shrinkLineLeft": {
            "0%, 20%": {"transform": "scaleY(1)", "opacity": "0.5"},
            "40%, 60%": {"transform": "scaleY(0)", "opacity": "0"},
            "100%": {"transform": "scaleY(1)", "opacity": "0.5"},
        },
        "@keyframes shrinkLineRight": {
            "0%, 20%": {"transform": "scaleY(1)", "opacity": "0.5"},
            "40%, 60%": {"transform": "scaleY(0)", "opacity": "0"},
            "100%": {"transform": "scaleY(1)", "opacity": "0.5"},
        }
    },
    head_components=[
        rx.el.link(rel="icon", href="/logo_glyph.png", type_="image/png"),
        rx.el.link(rel="stylesheet", href="/style.css"),
    ],
)

from chromalabs.pages.capabilities.ai import ai
from chromalabs.pages.capabilities.hpc import hpc
from chromalabs.pages.capabilities.government import government

app.add_page(index, route="/", title="Higher Dimensional HPC | Chroma Labs", image="/logo_glyph.png")
app.add_page(capabilities, route="/capabilities", title="Capabilities | Chroma Labs", image="/logo_glyph.png")
app.add_page(ai, route="/capabilities/ai", title="Exascale AI | Chroma Labs", image="/logo_glyph.png")
app.add_page(hpc, route="/capabilities/hpc", title="HPC | Chroma Labs", image="/logo_glyph.png")
app.add_page(government, route="/capabilities/government", title="Defense & Gov | Chroma Labs", image="/logo_glyph.png")
app.add_page(research, route="/research", title="Research & Architecture | Chroma Labs", image="/logo_glyph.png")
app.add_page(mission, route="/company/mission", title="Mission | Chroma Labs", image="/logo_glyph.png")
app.add_page(careers, route="/company/careers", title="Careers | Chroma Labs", image="/logo_glyph.png")
app.add_page(contact, route="/contact", title="Contact | Chroma Labs", image="/logo_glyph.png")
app.add_page(developer, route="/developer", title="Developer | Chroma Labs", image="/logo_glyph.png")

