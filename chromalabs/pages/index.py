import reflex as rx
from chromalabs.components.layout import base_layout

GRID_ANIMATION_JS = """
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
    
    const GRID_SIZE = 60;
    const SPEED = 2.5; // Smooth pacing
    let threads = [];
    
    function drawGrid() {
        ctx.strokeStyle = "rgba(212, 175, 55, 0.08)";
        ctx.lineWidth = 1;
        
        const offsetX = (canvas.width / 2) % GRID_SIZE;
        const offsetY = (canvas.height / 2) % GRID_SIZE;
        
        for (let x = offsetX; x <= canvas.width; x += GRID_SIZE) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
        }
        for (let y = offsetY; y <= canvas.height; y += GRID_SIZE) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
        }
        
        // Crosses at intersections
        ctx.strokeStyle = "rgba(212, 175, 55, 0.2)";
        for (let x = offsetX; x <= canvas.width; x += GRID_SIZE) {
            for (let y = offsetY; y <= canvas.height; y += GRID_SIZE) {
                ctx.beginPath();
                ctx.moveTo(x - 4, y); ctx.lineTo(x + 4, y);
                ctx.moveTo(x, y - 4); ctx.lineTo(x, y + 4);
                ctx.stroke();
            }
        }
    }
    
    function spawnThread(x, y, isBranch = false) {
        if (threads.length > 50) return;
        
        let startX = x !== undefined ? x : Math.floor(Math.random() * (canvas.width / GRID_SIZE)) * GRID_SIZE + ((canvas.width / 2) % GRID_SIZE);
        let startY = y !== undefined ? y : Math.floor(Math.random() * (canvas.height / GRID_SIZE)) * GRID_SIZE + ((canvas.height / 2) % GRID_SIZE);
        
        threads.push({
            x: startX, y: startY,
            path: [{x: startX, y: startY}],
            maxLength: 3 + Math.random() * 6, // Tron length: significantly shorter
            life: 0,
            maxLife: 200 + Math.random() * 200,
            moving: false
        });
    }

    function animate() {
        // Clear canvas completely so CSS ambient glows shine through!
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        drawGrid();
        
        // Ensure continuous flow from the center
        if (threads.length < 15) {
            spawnThread();
        }
        
        for (let i = threads.length - 1; i >= 0; i--) {
            let t = threads[i];
            
            if (t.moving) {
                t.x += t.vx;
                t.y += t.vy;
                t.progress += SPEED;
                
                if (t.progress >= GRID_SIZE) {
                    t.x = t.targetX;
                    t.y = t.targetY;
                    t.path.push({x: t.x, y: t.y});
                    if (t.path.length > t.maxLength) t.path.shift();
                    t.moving = false;
                }
            } else {
                let dirs = [
                    {vx: 0, vy: -SPEED}, {vx: SPEED, vy: 0},
                    {vx: 0, vy: SPEED}, {vx: -SPEED, vy: 0}
                ];
                
                let possibleDirs = dirs;
                if (t.lastDir !== undefined) {
                    possibleDirs = dirs.filter((d, idx) => idx !== (t.lastDir + 2) % 4);
                }
                
                let choiceIdx = Math.floor(Math.random() * possibleDirs.length);
                let selected = possibleDirs[choiceIdx];
                
                t.vx = selected.vx;
                t.vy = selected.vy;
                t.targetX = t.x + (t.vx > 0 ? GRID_SIZE : t.vx < 0 ? -GRID_SIZE : 0);
                t.targetY = t.y + (t.vy > 0 ? GRID_SIZE : t.vy < 0 ? -GRID_SIZE : 0);
                t.progress = 0;
                t.moving = true;
                t.lastDir = dirs.indexOf(selected);
                
                // Branching
                if (Math.random() < 0.03) {
                    spawnThread(t.x, t.y, true);
                }
            }
            
            t.life++;
            if (t.life > t.maxLife) {
                // Shrink tail to die
                t.path.shift();
                if (t.path.length === 0) {
                    threads.splice(i, 1);
                    continue;
                }
            }
            
            // Draw Tron-style fading segments
            if (t.path.length > 0) {
                let points = [...t.path, {x: t.x, y: t.y}];
                const lifeOpacity = t.life > t.maxLife ? Math.max(0, t.path.length / t.maxLength) : 1.0;
                
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                
                for (let j = 1; j < points.length; j++) {
                    const p1 = points[j - 1];
                    const p2 = points[j];
                    
                    // Opacity goes from 0 at the tail to 0.4 at the head (dimmer overall so text is readable)
                    const segmentOpacity = Math.pow(j / points.length, 2) * lifeOpacity * 0.35; 
                    
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    
                    ctx.strokeStyle = `rgba(212, 175, 55, ${segmentOpacity})`;
                    ctx.lineWidth = 2.0;
                    ctx.stroke();
                }
                
                // Modest glowing head
                const headOpacity = lifeOpacity * 0.6;
                ctx.beginPath();
                ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${headOpacity})`;
                ctx.shadowBlur = 6;
                ctx.shadowColor = `rgba(212, 175, 55, ${headOpacity})`;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}, 500);
"""

def index() -> rx.Component:
    return base_layout(
        # The true background wrapper
        rx.box(
            
            # --- CSS Ambient Glows (Behind Canvas) ---
            # Center void glow (Gold)
            rx.box(
                position="absolute", top="15%", left="50%", transform="translateX(-50%)", width="60vw", height="60vw",
                background="radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
                z_index="1", filter="blur(80px)", border_radius="50%", pointer_events="none",
            ),
            # Blood Red atmospheric side glow
            rx.box(
                position="absolute", top="40%", left="-10%", width="50vw", height="50vw",
                background="radial-gradient(circle, rgba(138, 3, 3, 0.12) 0%, transparent 70%)",
                z_index="1", filter="blur(100px)", border_radius="50%", pointer_events="none",
            ),
            # High-vis Orange atmospheric side glow
            rx.box(
                position="absolute", bottom="-10%", right="-10%", width="60vw", height="60vw",
                background="radial-gradient(circle, rgba(255, 69, 0, 0.08) 0%, transparent 70%)",
                z_index="1", filter="blur(100px)", border_radius="50%", pointer_events="none",
            ),

            # Transparent Canvas Overlay (Grid & Tron Rays)
            rx.el.canvas(
                id="lambdaBackground", 
                style={"position": "absolute", "top": "0", "left": "0", "width": "100vw", "height": "100vh", "z_index": "2", "pointer_events": "none"}
            ),
            rx.script(GRID_ANIMATION_JS),
            
            # Foreground Content
            rx.vstack(
                rx.text(
                    "Higher Dimensional HPC & Defense Research Lab", 
                    font_size=["2.5rem", "3.5rem", "4.5rem", "5.5rem"], weight="bold", letter_spacing="-0.02em", line_height="1.1",
                    color="white", text_align="center", class_name="animate-fade-up", margin_top="12",
                    font_family="'EB Garamond', 'Playfair Display', serif",
                    text_shadow="0 8px 24px rgba(0, 0, 0, 0.8)", # Stronger shadow to pop against the rays
                ),

                rx.hstack(
                    rx.link(
                        rx.button("Request Beta Access", bg="white", color="black", border_radius="4px", font_size="1rem", font_weight="600", padding="24px 36px", cursor="pointer", transition="all 0.2s ease", _hover={"bg": "#e0e0e0"}),
                        href="/developer", _hover={"text_decoration": "none"}
                    ),
                    rx.link(
                        rx.button("Explore Capabilities", bg="#D4AF37", border="none", color="black", border_radius="4px", font_size="1rem", font_weight="600", padding="24px 36px", cursor="pointer", transition="all 0.2s ease", _hover={"bg": "#e6c455"}),
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
                z_index="5", # Ensure text is above everything
            ),
            sx={"& a": {"pointer_events": "auto"}},
            
            width="100%",
            position="relative",
            overflow="hidden",
            flex_grow="1",
            bg="#0A0A0C", # The actual base background color
        )
    )
