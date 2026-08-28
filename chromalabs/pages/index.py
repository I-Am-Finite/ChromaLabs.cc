import reflex as rx
from chromalabs.components.layout import base_layout

TROMP_FRACTAL_JS = """
setTimeout(() => {
    const canvas = document.getElementById("lambdaBackground");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    let progress = 0.0;
    const SPEED = 0.003;

    function drawTrompNode(x, y, width, height, depth) {
        if (depth === 0) return;
        
        ctx.beginPath();
        // Horizontal abstraction line
        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y);
        
        // Vertical variable lines
        const leftDrop = x + width * 0.2;
        const rightDrop = x + width * 0.8;
        
        ctx.moveTo(leftDrop, y);
        ctx.lineTo(leftDrop, y + height);
        
        ctx.moveTo(rightDrop, y);
        ctx.lineTo(rightDrop, y + height);
        
        // Horizontal application line connecting
        ctx.moveTo(leftDrop, y + height);
        ctx.lineTo(leftDrop + width * 0.4, y + height);
        ctx.stroke();
        
        // Recursive children (Beta-reduction scaling logic)
        // Left child
        drawTrompNode(leftDrop, y + height, width * 0.5, height * 0.8, depth - 1);
        // Right child (shifted)
        drawTrompNode(rightDrop, y + height * 0.6, width * 0.5, height * 0.8, depth - 1);
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
        
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        // The mathematical self-similarity ratio is exactly 2.0 (since width child is 0.5)
        // We interpolate scale logarithmically to make the fractal zoom seamless
        const scale = Math.pow(2.0, progress);
        ctx.scale(scale, scale);
        
        ctx.rotate(-0.12); // Tilt for dynamic aesthetic
        
        ctx.lineWidth = 1.5 / scale; // Keep stroke width constant
        
        // Draw the massive seed structure centered
        drawTrompNode(-400, -200, 800, 250, 9);
        
        // Draw adjacent identical structures to fill the screen as it zooms out
        drawTrompNode(-400 - 800, -200, 800, 250, 9);
        drawTrompNode(-400 + 800, -200, 800, 250, 9);
        
        ctx.restore();
        
        progress += SPEED;
        if (progress >= 1.0) {
            progress = 0.0; // Snap perfectly back to 1.0 scale
        }
        
        requestAnimationFrame(animate);
    }
    animate();
}, 500); // Small delay to ensure canvas is mounted
"""

def lambda_node() -> rx.Component:
    return rx.box(
        rx.text("L-TREE FUSION", font_size="9px", color="rgba(212, 175, 55, 0.8)", letter_spacing="2px", margin_bottom="10px", text_align="center"),
        # Floating empty glass box to act as a UI element above the fractal
        padding="16px", background="rgba(10, 10, 12, 0.7)", border="1px solid rgba(212, 175, 55, 0.3)",
        border_radius="4px", backdrop_filter="blur(12px)", box_shadow="0 0 40px rgba(0,0,0,0.8)",
        transition="all 0.3s ease", _hover={"border_color": "#FF0000"}, width="140px", height="80px"
    )

def index() -> rx.Component:
    return base_layout(
        rx.box(
            # Infinite Tromp Diagram Fractal Zoom Background
            rx.el.canvas(
                id="lambdaBackground", 
                style={"position": "absolute", "top": "0", "left": "0", "width": "100vw", "height": "100vh", "z_index": "-2", "pointer_events": "none"}
            ),
            rx.script(TROMP_FRACTAL_JS),
            
            # Attached Lambda Nodes tracking the fractal depth illusion
            rx.box(lambda_node(), position="absolute", top="15%", left="20%", z_index="-1", class_name="animate-fade-up"),
            rx.box(lambda_node(), position="absolute", top="45%", left="60%", z_index="-1", class_name="animate-fade-up delay-100"),
            rx.box(lambda_node(), position="absolute", top="70%", left="80%", z_index="-1", class_name="animate-fade-up delay-200"),
            rx.box(lambda_node(), position="absolute", top="80%", left="10%", z_index="-1", class_name="animate-fade-up delay-300"),
            
            # Ambient Void Glows
            rx.box(
                position="absolute", top="20%", left="50%", transform="translateX(-50%)", width="50vw", height="50vw",
                background="radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)",
                z_index="-3", filter="blur(100px)", border_radius="50%",
            ),

            rx.vstack(
                rx.text(
                    "Higher Dimensional HPC & Defense Research Lab", 
                    font_size=["2.5rem", "3.5rem", "4.5rem", "5.5rem"], weight="bold", letter_spacing="-0.02em", line_height="1.1",
                    color="white", text_align="center", class_name="animate-fade-up", margin_top="12",
                    font_family="'EB Garamond', 'Playfair Display', serif",
                    text_shadow="0 4px 12px rgba(0, 0, 0, 0.5)",
                ),

                rx.hstack(
                    rx.link(
                        rx.button("Request Beta Access", bg="white", color="black", border_radius="4px", font_size="1rem", font_weight="600", padding="24px 36px", cursor="pointer", transition="all 0.2s ease", _hover={"bg": "#e0e0e0"}),
                        href="/developer", _hover={"text_decoration": "none"}
                    ),
                    rx.link(
                        rx.button("Explore Capabilities", bg="transparent", border="1px solid rgba(212, 175, 55, 0.4)", color="white", border_radius="4px", font_size="1rem", font_weight="600", padding="24px 36px", cursor="pointer", transition="all 0.2s ease", _hover={"bg": "rgba(212, 175, 55, 0.1)"}),
                        href="/capabilities", _hover={"text_decoration": "none"}
                    ),
                    spacing="6", class_name="animate-fade-up delay-200", flex_wrap="wrap", justify_content="center", margin_top="16"
                ),
                align_items="center",
                justify_content="center",
                width="100%",
                padding_x=["4", "8", "12"],
                height="calc(100vh - 200px)",
                pointer_events="none", 
            ),
            sx={"& a": {"pointer_events": "auto"}},
            
            width="100%",
            height="100%",
            position="relative",
            overflow="hidden",
        )
    )
