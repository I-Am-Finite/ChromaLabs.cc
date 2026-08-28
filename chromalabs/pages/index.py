import reflex as rx
from chromalabs.components.layout import base_layout

VOXEL_RAYMARCH_JS = """
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

    // CHROMA SVDAG Geometry
    // Simulates "SpMV not by moving memory, but by bouncing light."
    // Rays traverse a Sparse Voxel DAG, striking weights and deflecting.
    
    const GRID_SIZE = 14;
    const SPACING = 60;
    let voxels = [];
    
    // Generate Sparse Voxel DAG (10% sparsity)
    for (let x = 0; x < GRID_SIZE; x++) {
        for (let y = 0; y < GRID_SIZE; y++) {
            for (let z = 0; z < GRID_SIZE; z++) {
                if (Math.random() < 0.08) {
                    voxels.push({
                        x: (x - GRID_SIZE/2) * SPACING,
                        y: (y - GRID_SIZE/2) * SPACING,
                        z: (z - GRID_SIZE/2) * SPACING,
                        glow: 0
                    });
                }
            }
        }
    }
    
    let rays = [];
    for (let i = 0; i < 20; i++) {
        rays.push(createRay());
    }

    function createRay() {
        let start = voxels[Math.floor(Math.random() * voxels.length)];
        let end = voxels[Math.floor(Math.random() * voxels.length)];
        return { start, end, progress: 0, speed: 0.01 + Math.random() * 0.03, history: [] };
    }

    function project(x, y, z, time) {
        // Slowly rotate the entire SVDAG cluster
        const angle = time * 0.00015;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        
        const rx = x * cosA - z * sinA;
        const rz = x * sinA + z * cosA;
        const ry = y;
        
        // Isometric Projection
        const isoX = (rx - rz) * 0.866;
        const isoY = ry + (rx + rz) * 0.5;
        return { x: isoX, y: isoY, depth: rx + ry + rz };
    }

    function drawCube(px, py, size, glow) {
        const r = 212, g = 175, b = 55; // Gold
        
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.1 + glow * 0.8})`;

        // Top face
        ctx.beginPath();
        ctx.moveTo(px, py - size);
        ctx.lineTo(px + size * 0.866, py - size * 0.5);
        ctx.lineTo(px, py);
        ctx.lineTo(px - size * 0.866, py - size * 0.5);
        ctx.closePath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.05 + glow * 0.6})`;
        ctx.fill();
        ctx.stroke();

        // Left face
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px - size * 0.866, py - size * 0.5);
        ctx.lineTo(px - size * 0.866, py + size * 0.5);
        ctx.lineTo(px, py + size);
        ctx.closePath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.02 + glow * 0.3})`;
        ctx.fill();
        ctx.stroke();

        // Right face
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + size * 0.866, py - size * 0.5);
        ctx.lineTo(px + size * 0.866, py + size * 0.5);
        ctx.lineTo(px, py + size);
        ctx.closePath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.01 + glow * 0.1})`;
        ctx.fill();
        ctx.stroke();
    }

    function animate() {
        ctx.fillStyle = "#0A0A0C";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const time = Date.now();
        
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        // Slowly float up and down
        ctx.translate(0, Math.sin(time * 0.0005) * 30);

        // Update Project and Sort
        for (let i = 0; i < voxels.length; i++) {
            let v = voxels[i];
            if (v.glow > 0) v.glow *= 0.95; // Fade out
            let p = project(v.x, v.y, v.z, time);
            v.screenX = p.x;
            v.screenY = p.y;
            v.depth = p.depth;
        }

        // Painter's algorithm
        voxels.sort((a, b) => a.depth - b.depth);

        // Draw Voxels
        for (let i = 0; i < voxels.length; i++) {
            let v = voxels[i];
            drawCube(v.screenX, v.screenY, 20 + (v.glow * 15), v.glow);
        }

        // Update and Draw Rays
        ctx.lineWidth = 2;
        for (let i = 0; i < rays.length; i++) {
            let ray = rays[i];
            ray.progress += ray.speed;
            
            if (ray.progress >= 1.0) {
                ray.end.glow = 1.0;
                ray.start = ray.end;
                ray.end = voxels[Math.floor(Math.random() * voxels.length)];
                ray.progress = 0;
            }
            
            const startP = {x: ray.start.screenX, y: ray.start.screenY};
            const endP = {x: ray.end.screenX, y: ray.end.screenY};
            
            const currX = startP.x + (endP.x - startP.x) * ray.progress;
            const currY = startP.y + (endP.y - startP.y) * ray.progress;
            
            // Draw beam tail
            ctx.beginPath();
            ctx.moveTo(startP.x, startP.y);
            ctx.lineTo(currX, currY);
            
            // Deflection color (High-vis orange to gold gradient)
            let grad = ctx.createLinearGradient(startP.x, startP.y, currX, currY);
            grad.addColorStop(0, "rgba(255, 69, 0, 0.0)");
            grad.addColorStop(1, "rgba(255, 215, 0, 0.8)");
            
            ctx.strokeStyle = grad;
            ctx.stroke();
            
            // Beam head
            ctx.beginPath();
            ctx.arc(currX, currY, 4, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
            ctx.fill();
        }

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
            rx.script(VOXEL_RAYMARCH_JS),
            
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
