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

    let time = 0;
    const SPEED = 0.005; // Slightly slower to appreciate the complex structural morph
    
    // We animate a single structural beta-reduction cycle that loops perfectly.
    // The cycle has 4 phases (0 to 1 progress):
    // 0.0 - 0.2: Highlight the redex (the application bridge)
    // 0.2 - 0.4: Dissolve the left abstraction
    // 0.4 - 0.8: Duplicate right structure and slide it into the variable slots
    // 0.8 - 1.0: Camera zoom out to accommodate the doubled structure, snapping back to start
    
    function drawSubTree(x, y, w, h, opacity) {
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
        
        // Internal application bridge (x applied to x)
        ctx.moveTo(x - w/4, y + h);
        ctx.lineTo(x + w/4, y + h);
        
        ctx.stroke();
        ctx.restore();
    }
    
    function animate() {
        ctx.fillStyle = "#0A0A0C";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        let cycle = time % 1.0;
        
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        // Phase 4: Camera zoom out (from 1x down to 0.5x over the cycle)
        let zoom = 1.0;
        if (cycle > 0.8) {
            let t = (cycle - 0.8) / 0.2; // 0 to 1
            zoom = 1.0 - (0.5 * Math.pow(t, 2)); 
        }
        ctx.scale(zoom, zoom);
        
        ctx.lineWidth = 2 / zoom;
        
        // Render base geometry. Massively scaled so it fills the screen perfectly.
        const W = 800;
        const H = 400;
        
        // Global variables for the two structures
        const leftX = -W/2;
        const rightX = W/2;
        const yTop = -H/2;
        
        // Phase 1: Highlight bridge
        let bridgeColor = "rgba(212, 175, 55, 0.4)";
        if (cycle < 0.2) {
            let flash = Math.sin(cycle * Math.PI / 0.2);
            bridgeColor = `rgba(255, ${100 + 155 * flash}, 55, ${0.4 + 0.6 * flash})`;
        }
        
        // Draw the overarching application bridge (from left root to right root)
        if (cycle < 0.4) {
            ctx.beginPath();
            ctx.strokeStyle = bridgeColor;
            ctx.moveTo(leftX, yTop - 40);
            ctx.lineTo(rightX, yTop - 40);
            ctx.stroke();
            
            // Connecting vertical lines to the abstraction roots
            ctx.beginPath();
            ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
            ctx.moveTo(leftX, yTop - 40);
            ctx.lineTo(leftX, yTop);
            ctx.moveTo(rightX, yTop - 40);
            ctx.lineTo(rightX, yTop);
            ctx.stroke();
        }
        
        // Phase 2: Dissolve left abstraction
        let leftOpacity = 1.0;
        if (cycle >= 0.2 && cycle < 0.4) {
            leftOpacity = 1.0 - ((cycle - 0.2) / 0.2);
        } else if (cycle >= 0.4) {
            leftOpacity = 0.0;
        }
        
        // Left Structure (Dissolving abstraction, leaving variables)
        if (leftOpacity > 0) {
            ctx.save();
            ctx.globalAlpha = leftOpacity;
            ctx.beginPath();
            ctx.moveTo(leftX - W/2, yTop);
            ctx.lineTo(leftX + W/2, yTop);
            ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
            ctx.stroke();
            ctx.restore();
        }
        
        // The left variables drop down. In a real reduction, these grab the right structure.
        ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
        ctx.beginPath();
        // Left var
        ctx.moveTo(leftX - W/4, yTop);
        ctx.lineTo(leftX - W/4, yTop + H);
        // Right var
        ctx.moveTo(leftX + W/4, yTop);
        ctx.lineTo(leftX + W/4, yTop + H);
        // Internal application of left structure
        ctx.moveTo(leftX - W/4, yTop + H);
        ctx.lineTo(leftX + W/4, yTop + H);
        ctx.stroke();
        
        // Phase 3: Duplication of Right Structure
        let dupProgress = 0;
        if (cycle >= 0.4 && cycle < 0.8) {
            let t = (cycle - 0.4) / 0.4;
            dupProgress = t * t * (3 - 2 * t); // Smoothstep
        } else if (cycle >= 0.8) {
            dupProgress = 1.0;
        }
        
        // Target positions for the duplicated structures
        const target1X = leftX - W/4;
        const target1Y = yTop + H;
        
        const target2X = leftX + W/4;
        const target2Y = yTop + H;
        
        // Current positions based on interpolation
        const curr1X = rightX + (target1X - rightX) * dupProgress;
        const curr1Y = yTop + (target1Y - yTop) * dupProgress;
        
        const curr2X = rightX + (target2X - rightX) * dupProgress;
        const curr2Y = yTop + (target2Y - yTop) * dupProgress;
        
        const currentScale = 1.0 - (0.5 * dupProgress);
        
        if (cycle < 0.4) {
            // Single right structure before duplication
            drawSubTree(rightX, yTop, W, H, 1.0);
        } else {
            // Two duplicating structures animating into the variable slots
            ctx.save();
            ctx.translate(curr1X, curr1Y);
            ctx.scale(currentScale, currentScale);
            drawSubTree(0, 0, W, H, 1.0);
            ctx.restore();
            
            ctx.save();
            ctx.translate(curr2X, curr2Y);
            ctx.scale(currentScale, currentScale);
            drawSubTree(0, 0, W, H, 1.0);
            ctx.restore();
        }
        
        ctx.restore();
        
        time += SPEED;
        requestAnimationFrame(animate);
    }
    animate();
}, 500);
"""

def index() -> rx.Component:
    return base_layout(
        rx.box(
            # Full Screen Active Beta-Reduction Canvas
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
