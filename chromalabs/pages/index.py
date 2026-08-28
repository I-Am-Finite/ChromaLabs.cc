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
    const SPEED = 3;
    let threads = [];
    
    function drawGrid() {
        ctx.strokeStyle = "rgba(212, 175, 55, 0.07)";
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
        ctx.strokeStyle = "rgba(212, 175, 55, 0.3)";
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
        if (threads.length > 60) return;
        
        let startX = x !== undefined ? x : Math.floor(canvas.width / 2 / GRID_SIZE) * GRID_SIZE + ((canvas.width / 2) % GRID_SIZE);
        let startY = y !== undefined ? y : Math.floor(canvas.height / 2 / GRID_SIZE) * GRID_SIZE + ((canvas.height / 2) % GRID_SIZE);
        
        threads.push({
            x: startX, y: startY,
            path: [{x: startX, y: startY}],
            maxLength: 15 + Math.random() * 25,
            life: 0,
            maxLife: 200 + Math.random() * 300,
            moving: false
        });
    }

    function animate() {
        ctx.fillStyle = "#0A0A0C";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        drawGrid();
        
        // Spawn from center occasionally
        if (Math.random() < 0.05 && threads.length < 15) {
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
                if (Math.random() < 0.15) {
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
            
            // Draw
            if (t.path.length > 0) {
                ctx.beginPath();
                ctx.moveTo(t.path[0].x, t.path[0].y);
                for (let j = 1; j < t.path.length; j++) {
                    ctx.lineTo(t.path[j].x, t.path[j].y);
                }
                ctx.lineTo(t.x, t.y);
                
                // Fade out at end of life
                const opacity = t.life > t.maxLife ? Math.max(0, t.path.length / t.maxLength) : 1.0;
                
                ctx.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.9})`;
                ctx.lineWidth = 2.5;
                ctx.shadowBlur = 15;
                ctx.shadowColor = `rgba(212, 175, 55, ${opacity})`;
                ctx.stroke();
                ctx.shadowBlur = 0;
                
                // Bright head
                ctx.beginPath();
                ctx.arc(t.x, t.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fill();
            }
        }
        
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
            rx.script(GRID_ANIMATION_JS),
            
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
