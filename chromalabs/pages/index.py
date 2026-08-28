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
    // Uses procedural interpolation to simulate a massive Beta-Reduction and its inverse (Beta-Expansion)
    // This allows the structure to eternally fill the screen without resetting to a tiny seed.
    function drawTrompReduction(x, y, w, h, depth, cycle) {
        if (depth === 0) return;
        
        // Geometry Constants
        const leftX = x;
        const rightX = x + w/2;
        const bridgeY = y + h - 10;
        const absY = y + 10;
        
        // 1. Overarching Application Bridge
        const bridgeOpacity = 1.0 - cycle;
        if (bridgeOpacity > 0.01) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${bridgeOpacity * 0.4})`;
            ctx.moveTo(leftX, bridgeY);
            ctx.lineTo(rightX, bridgeY);
            
            ctx.moveTo(leftX, bridgeY - 15);
            ctx.lineTo(leftX, bridgeY);
            ctx.moveTo(rightX, bridgeY - 15);
            ctx.lineTo(rightX, bridgeY);
            ctx.stroke();
            
            // Flashing Redex Core
            ctx.beginPath();
            ctx.arc(leftX, bridgeY, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 55, 55, ${bridgeOpacity * 0.8})`;
            ctx.fill();
        }
        
        // 2. Left Abstraction (Dissolves upon reduction)
        if (bridgeOpacity > 0.01) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${bridgeOpacity * 0.4})`;
            ctx.moveTo(leftX, absY);
            ctx.lineTo(rightX, absY);
            ctx.stroke();
        }
        
        // 3. The Body of the Left Abstraction (B)
        const var1X = leftX + (w/2) * 0.2;
        const var2X = leftX + (w/2) * 0.8;
        const varY = absY; 
        const varH = h * 0.5; 
        
        ctx.beginPath();
        ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
        // Var 1 Drop
        ctx.moveTo(var1X, varY);
        ctx.lineTo(var1X, varY + varH);
        // Var 2 Drop
        ctx.moveTo(var2X, varY);
        ctx.lineTo(var2X, varY + varH);
        
        // Internal application connecting the two variables
        ctx.moveTo(var1X, varY + varH);
        ctx.lineTo(var2X, varY + varH);
        ctx.stroke();
        
        // 4. The Right Argument (R) - PHYSICS INTERPOLATION
        // It gracefully slides from the right side into the variable slots!
        
        // Easing function for smooth physics (EaseInOutCubic)
        const easeCycle = cycle < 0.5 ? 4 * cycle * cycle * cycle : 1 - Math.pow(-2 * cycle + 2, 3) / 2;
        
        const curr1X = rightX + (var1X - rightX) * easeCycle;
        const curr1Y = absY + (varY + varH - absY) * easeCycle;
        
        const curr2X = rightX + (var2X - rightX) * easeCycle;
        const curr2Y = absY + (varY + varH - absY) * easeCycle;
        
        const scale = 1.0 - (0.5 * easeCycle);
        const subW = (w/2) * scale;
        const subH = (h * 0.8) * scale;
        
        // Draw the Right Subtree tracing the glide path
        if (easeCycle < 0.01) {
            drawTrompReduction(rightX, absY, w/2, h * 0.8, depth - 1, cycle);
        } else {
            ctx.save();
            drawTrompReduction(curr1X, curr1Y, subW, subH, depth - 1, cycle);
            drawTrompReduction(curr2X, curr2Y, subW, subH, depth - 1, cycle);
            ctx.restore();
        }
    }
    
    function animate() {
        ctx.fillStyle = "#0A0A0C";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const time = Date.now() / 2500;
        // Oscillates between 0 and 1. 0 = Combined, 1 = Fully Split
        // This guarantees it endlessly reverses back and forth smoothly.
        let cycle = (Math.sin(time) + 1) / 2; 
        
        ctx.save();
        
        // Ensure it always fills the screen perfectly!
        // At cycle=0 it is wider, at cycle=1 it is taller.
        // We gently interpolate the zoom to keep the bounds perfectly fitted.
        const zoom = 1.0 - (0.15 * cycle);
        ctx.translate(canvas.width / 2, canvas.height / 3);
        ctx.scale(zoom, zoom);
        
        ctx.lineWidth = 1.5 / zoom;
        
        // Draw the massive, screen-filling AST seed (Depth 7)
        drawTrompReduction(-canvas.width * 0.8, 0, canvas.width * 1.6, 500, 7, cycle);
        
        ctx.restore();
        
        requestAnimationFrame(animate);
    }
    
    animate();
}, 500);
"""

def index() -> rx.Component:
    return base_layout(
        rx.box(
            rx.el.canvas(
                id="lambdaBackground", 
                style={"position": "absolute", "top": "0", "left": "0", "width": "100vw", "height": "100vh", "z_index": "-2", "pointer_events": "none"}
            ),
            rx.script(TROMP_FRACTAL_JS),
            
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
