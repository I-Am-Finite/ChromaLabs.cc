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
    
    // Mathematically Accurate John Tromp Diagram Geometry
    // Simulates a massive, recursive Beta-Reduction and its inverse (Beta-Expansion)
    function drawTrompReduction(x, y, w, h, depth, cycle) {
        if (depth === 0) return;
        
        // cycle goes from 0.0 (Unreduced App(Abs(B), R)) to 1.0 (Reduced B[R/x])
        
        // Geometry Constants
        const leftX = x;
        const rightX = x + w/2;
        const bridgeY = y + h - 10;
        const absY = y + 10;
        
        // 1. Overarching Application Bridge
        // In John Tromp's standard, applications are horizontal links connecting the leftmost variables.
        const bridgeOpacity = 1.0 - cycle;
        if (bridgeOpacity > 0.01) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${bridgeOpacity * 0.4})`;
            ctx.moveTo(leftX, bridgeY);
            ctx.lineTo(rightX, bridgeY);
            
            // Vertical tail drops to the bridge
            ctx.moveTo(leftX, bridgeY - 15);
            ctx.lineTo(leftX, bridgeY);
            ctx.moveTo(rightX, bridgeY - 15);
            ctx.lineTo(rightX, bridgeY);
            ctx.stroke();
            
            // Flashing Redex (Application Node)
            ctx.beginPath();
            ctx.arc(leftX, bridgeY, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 55, 55, ${bridgeOpacity * 0.8})`;
            ctx.fill();
        }
        
        // 2. Left Abstraction (Dissolves upon reduction)
        // In John Tromp's standard, abstractions are horizontal lines.
        if (bridgeOpacity > 0.01) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${bridgeOpacity * 0.4})`;
            // Tromp abstraction line spans across the body
            ctx.moveTo(leftX, absY);
            ctx.lineTo(rightX, absY);
            ctx.stroke();
        }
        
        // 3. The Body of the Left Abstraction (B)
        // Contains two variable drops that will receive the duplicated R
        // In John Tromp's standard, variables are vertical lines emanating DOWN from their binding lambda.
        const var1X = leftX + (w/2) * 0.2;
        const var2X = leftX + (w/2) * 0.8;
        const varY = absY; // Drops start at the abstraction line
        const varH = h * 0.5; // Variables drop down
        
        ctx.beginPath();
        ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
        // Var 1 Drop
        ctx.moveTo(var1X, varY);
        ctx.lineTo(var1X, varY + varH);
        // Var 2 Drop
        ctx.moveTo(var2X, varY);
        ctx.lineTo(var2X, varY + varH);
        
        // Internal application connecting the two variables (so B is an App(x, x))
        ctx.moveTo(var1X, varY + varH);
        ctx.lineTo(var2X, varY + varH);
        ctx.stroke();
        
        // 4. The Right Argument (R) - Duplicates and slides to the variable endpoints!
        // Target position 1: var1X, varY + varH
        // Target position 2: var2X, varY + varH
        
        const curr1X = rightX + (var1X - rightX) * cycle;
        const curr1Y = absY + (varY + varH - absY) * cycle;
        
        const curr2X = rightX + (var2X - rightX) * cycle;
        const curr2Y = absY + (varY + varH - absY) * cycle;
        
        // Scale halves as it snaps in
        const scale = 1.0 - (0.5 * cycle);
        const subW = (w/2) * scale;
        const subH = (h * 0.8) * scale;
        
        // The Right Subtree (Recursive grid geometry)
        if (cycle < 0.05) {
            // Just draw it once before duplication is visually separable
            drawTrompReduction(rightX, absY, w/2, h * 0.8, depth - 1, cycle);
        } else {
            // Draw duplicate 1 snapping to Variable 1
            drawTrompReduction(curr1X, curr1Y, subW, subH, depth - 1, cycle);
            // Draw duplicate 2 snapping to Variable 2
            drawTrompReduction(curr2X, curr2Y, subW, subH, depth - 1, cycle);
        }
    }
    
    function animate() {
        ctx.fillStyle = "#0A0A0C";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const time = Date.now() / 3000;
        // 0 to 1 smooth oscillation (Reduction -> Inverse Expansion -> Loop)
        const cycle = (Math.sin(time) + 1) / 2; 
        
        ctx.save();
        
        // Camera Zoom to keep the expanding fractal on screen
        const zoom = 1.0 - (0.2 * cycle);
        ctx.translate(canvas.width / 2, canvas.height / 3);
        ctx.scale(zoom, zoom);
        
        ctx.lineWidth = 1.5 / zoom;
        
        // Draw the massive, screen-filling AST seed (Depth 6)
        drawTrompReduction(-canvas.width * 0.7, 0, canvas.width * 1.4, 400, 6, cycle);
        
        ctx.restore();
        
        requestAnimationFrame(animate);
    }
    
    animate();
}, 500);
"""

def index() -> rx.Component:
    return base_layout(
        rx.box(
            # Full Screen Active Tromp Diagram Morph
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
