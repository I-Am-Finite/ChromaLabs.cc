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
    
    // Draw a massive, screen-filling recursive Tromp AST
    function drawDeepAST(x, y, w, h, depth, opacity) {
        if (depth === 0) return;
        ctx.save();
        ctx.globalAlpha = opacity;
        
        ctx.beginPath();
        // Abstraction (horizontal)
        ctx.moveTo(x - w/2, y);
        ctx.lineTo(x + w/2, y);
        
        // Variable drops
        ctx.moveTo(x - w/4, y);
        ctx.lineTo(x - w/4, y + h); // left var
        
        ctx.moveTo(x + w/4, y);
        ctx.lineTo(x + w/4, y + h); // right var
        
        // Internal application bridge
        ctx.moveTo(x - w/4, y + h);
        ctx.lineTo(x + w/4, y + h);
        
        ctx.stroke();
        
        // Recursively draw subtrees to fill the screen with geometric density
        drawDeepAST(x - w/4, y + h, w/2, h * 0.85, depth - 1, opacity);
        drawDeepAST(x + w/4, y + h, w/2, h * 0.85, depth - 1, opacity);
        
        ctx.restore();
    }
    
    function animate() {
        ctx.fillStyle = "#0A0A0C";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Oscillate progress between 0.0 (Unreduced) and 1.0 (Reduced) using sine wave
        // This perfectly satisfies the "reduce and then perform the inverse to re-do it" requirement.
        const time = Date.now() / 3000; // 3 seconds per cycle
        const cycle = (Math.sin(time) + 1) / 2; // Smooth 0.0 to 1.0
        
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        // Base geometry. Massively scaled so it fills the screen perfectly.
        const W = canvas.width * 0.4;
        const H = 200;
        
        // Global variables for the two structures
        const leftX = -W/2;
        const rightX = W/2;
        const yTop = -H/2;
        
        // Camera Zoom to accommodate the expansion dynamically
        // At cycle 0.0, scale is 1.0. At cycle 1.0 (fully split), scale pulls back to 0.7
        // to keep the massive duplicated right-ASTs on screen.
        const zoom = 1.0 - (0.3 * cycle);
        ctx.scale(zoom, zoom);
        
        // Keep lines crisp
        ctx.lineWidth = 1.5 / zoom;
        
        // ----------------------------------------------------
        // VISUAL REDUCTION MORPH LOGIC
        // ----------------------------------------------------
        
        // 1. The Overarching Application Bridge
        // Fades out as it reduces
        const bridgeOpacity = 1.0 - cycle;
        if (bridgeOpacity > 0.01) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${bridgeOpacity * 0.4})`;
            ctx.moveTo(leftX, yTop - 40);
            ctx.lineTo(rightX, yTop - 40);
            
            // Connecting vertical lines to roots
            ctx.moveTo(leftX, yTop - 40);
            ctx.lineTo(leftX, yTop);
            ctx.moveTo(rightX, yTop - 40);
            ctx.lineTo(rightX, yTop);
            ctx.stroke();
            
            // Flashing Redex Core
            ctx.beginPath();
            ctx.arc(0, yTop - 40, 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 55, 55, ${bridgeOpacity * 0.8})`;
            ctx.fill();
        }
        
        // 2. The Left Abstraction Line (Dissolves)
        if (bridgeOpacity > 0.01) {
            ctx.save();
            ctx.globalAlpha = bridgeOpacity;
            ctx.beginPath();
            ctx.moveTo(leftX - W/2, yTop);
            ctx.lineTo(leftX + W/2, yTop);
            ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
            ctx.stroke();
            ctx.restore();
        }
        
        // Left Structure Variables (They remain static, waiting for the duplicated right structures)
        ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
        ctx.beginPath();
        // Left var drop
        ctx.moveTo(leftX - W/4, yTop);
        ctx.lineTo(leftX - W/4, yTop + H);
        // Right var drop
        ctx.moveTo(leftX + W/4, yTop);
        ctx.lineTo(leftX + W/4, yTop + H);
        // Internal application of left structure
        ctx.moveTo(leftX - W/4, yTop + H);
        ctx.lineTo(leftX + W/4, yTop + H);
        ctx.stroke();
        
        // 3. Duplication and Interpolation of the massive Right AST
        // Target positions (the open variable slots on the left)
        const target1X = leftX - W/4;
        const target1Y = yTop + H;
        
        const target2X = leftX + W/4;
        const target2Y = yTop + H;
        
        // Current sliding positions
        const curr1X = rightX + (target1X - rightX) * cycle;
        const curr1Y = yTop + (target1Y - yTop) * cycle;
        
        const curr2X = rightX + (target2X - rightX) * cycle;
        const curr2Y = yTop + (target2Y - yTop) * cycle;
        
        // As it slides into the left side, it scales down by half so it fits perfectly 
        // into the fractal geometry.
        const currentScale = 1.0 - (0.5 * cycle);
        
        // Depth 7 generates an incredibly complex, dense grid of intersecting lines
        const AST_DEPTH = 7;
        
        // We draw the left half of the duplication
        ctx.save();
        ctx.translate(curr1X, curr1Y);
        ctx.scale(currentScale, currentScale);
        drawDeepAST(0, 0, W, H, AST_DEPTH, 1.0);
        ctx.restore();
        
        // We draw the right half of the duplication
        // As cycle approaches 0, curr1 and curr2 converge perfectly on rightX, 
        // creating the illusion of a single right structure!
        ctx.save();
        ctx.translate(curr2X, curr2Y);
        ctx.scale(currentScale, currentScale);
        drawDeepAST(0, 0, W, H, AST_DEPTH, 1.0);
        ctx.restore();
        
        ctx.restore();
        
        requestAnimationFrame(animate);
    }
    
    animate();
}, 500);
"""

def index() -> rx.Component:
    return base_layout(
        rx.box(
            # Full Screen Active Beta-Reduction Morph
            rx.el.canvas(
                id="lambdaBackground", 
                style={"position": "absolute", "top": "0", "left": "0", "width": "100vw", "height": "100vh", "z_index": "-2", "pointer_events": "none"}
            ),
            rx.script(TROMP_FRACTAL_JS),
            
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
