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

    // --- Lambda Calculus AST & Evaluator ---
    function Var(idx) { return { t: 0, idx: idx }; }
    function Abs(body) { return { t: 1, body: body }; }
    function App(left, right) { return { t: 2, left: left, right: right }; }

    function shift(term, inc, depth) {
        if (term.t === 0) {
            return term.idx >= depth ? Var(term.idx + inc) : Var(term.idx);
        } else if (term.t === 1) {
            return Abs(shift(term.body, inc, depth + 1));
        } else {
            return App(shift(term.left, inc, depth), shift(term.right, inc, depth));
        }
    }

    function substitute(term, arg, depth) {
        if (term.t === 0) {
            if (term.idx === depth) return shift(arg, depth, 0);
            if (term.idx > depth) return Var(term.idx - 1);
            return Var(term.idx);
        } else if (term.t === 1) {
            return Abs(substitute(term.body, arg, depth + 1));
        } else {
            return App(substitute(term.left, arg, depth), substitute(term.right, arg, depth));
        }
    }

    function reduce(term) {
        if (term.t === 2) {
            if (term.left.t === 1) {
                return { changed: true, term: substitute(term.left.body, term.right, 0) };
            }
            let l_res = reduce(term.left);
            if (l_res.changed) return { changed: true, term: App(l_res.term, term.right) };
            let r_res = reduce(term.right);
            if (r_res.changed) return { changed: true, term: App(term.left, r_res.term) };
        } else if (term.t === 1) {
            let b_res = reduce(term.body);
            if (b_res.changed) return { changed: true, term: Abs(b_res.term) };
        }
        return { changed: false, term: term };
    }

    function countNodes(term) {
        if (term.t === 0) return 1;
        if (term.t === 1) return 1 + countNodes(term.body);
        return 1 + countNodes(term.left) + countNodes(term.right);
    }

    // --- Tromp Diagram Layout Engine ---
    let current_x = 0;
    let max_y = 0;
    function layout(term, depth) {
        term.y = depth * 40;
        if (term.y > max_y) max_y = term.y;
        
        if (term.t === 0) {
            term.x = current_x;
            current_x += 40;
            term.min_x = term.x;
            term.max_x = term.x;
        } else if (term.t === 1) {
            layout(term.body, depth + 1);
            term.min_x = term.body.min_x - 15;
            term.max_x = term.body.max_x + 15;
            term.x = (term.min_x + term.max_x) / 2;
        } else if (term.t === 2) {
            layout(term.left, depth + 1);
            layout(term.right, depth + 1);
            term.min_x = term.left.min_x;
            term.max_x = term.right.max_x;
            term.x = (term.left.x + term.right.x) / 2;
        }
    }

    function drawTerm(term, binders) {
        ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
        ctx.lineWidth = 2;
        
        if (term.t === 0) {
            let binder = binders[binders.length - 1 - term.idx];
            if (binder) {
                ctx.beginPath();
                ctx.moveTo(term.x, term.y);
                ctx.lineTo(term.x, binder.y);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.arc(term.x, term.y, 3, 0, 2*Math.PI);
                ctx.fillStyle = "rgba(212, 175, 55, 0.8)";
                ctx.fill();
            }
        } else if (term.t === 1) {
            ctx.beginPath();
            ctx.moveTo(term.min_x, term.y);
            ctx.lineTo(term.max_x, term.y);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(term.x, term.y);
            ctx.lineTo(term.x, term.body.y);
            ctx.stroke();
            
            let new_binders = [...binders, term];
            drawTerm(term.body, new_binders);
        } else if (term.t === 2) {
            // Application bridge
            ctx.beginPath();
            ctx.moveTo(term.left.x, term.y);
            ctx.lineTo(term.right.x, term.y);
            ctx.strokeStyle = "rgba(255, 100, 55, 0.5)"; // Slight red tint for bridges
            ctx.stroke();
            
            ctx.beginPath();
            ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
            ctx.moveTo(term.left.x, term.y);
            ctx.lineTo(term.left.x, term.left.y);
            ctx.moveTo(term.right.x, term.y);
            ctx.lineTo(term.right.x, term.right.y);
            ctx.stroke();
            
            drawTerm(term.left, binders);
            drawTerm(term.right, binders);
        }
    }

    // Initialize with the 'Grow' combinator: (λx. x x x)(λx. x x x)
    // This expands continuously upon beta-reduction.
    function getSeed() {
        let M = Abs(App(App(Var(0), Var(0)), Var(0)));
        return App(M, M);
    }
    
    let current_term = getSeed();
    
    // Evaluation Loop
    setInterval(() => {
        let nodes = countNodes(current_term);
        if (nodes > 400) {
            current_term = getSeed(); // Reset when it gets too large
        } else {
            let res = reduce(current_term);
            if (res.changed) {
                current_term = res.term;
            } else {
                current_term = getSeed();
            }
        }
    }, 1000); // 1 evaluation per second

    // Rendering Loop
    let displayScale = 1.0;
    
    function animate() {
        ctx.fillStyle = "#0A0A0C";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        current_x = 0;
        max_y = 0;
        layout(current_term, 0);
        
        const term_width = current_term.max_x - current_term.min_x;
        const term_height = max_y;
        
        // Calculate target scale to fit the tree on screen, with padding
        const padding = 100;
        const targetScaleX = (canvas.width - padding) / Math.max(term_width, 1);
        const targetScaleY = (canvas.height - padding) / Math.max(term_height, 1);
        const targetScale = Math.min(targetScaleX, targetScaleY, 2.0); // Cap max zoom
        
        // Smoothly interpolate the camera scale for the zoom out effect
        displayScale += (targetScale - displayScale) * 0.05;
        
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        // Tilt
        ctx.rotate(-0.08);
        
        ctx.scale(displayScale, displayScale);
        
        // Center the drawing
        const cx = (current_term.min_x + current_term.max_x) / 2;
        const cy = max_y / 2;
        ctx.translate(-cx, -cy);
        
        drawTerm(current_term, []);
        
        ctx.restore();
        
        requestAnimationFrame(animate);
    }
    
    animate();
}, 500);
"""

def index() -> rx.Component:
    return base_layout(
        rx.box(
            # Full Screen Active Beta-Reduction Engine
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
