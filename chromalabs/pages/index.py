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

    // --- Turing-Complete Lambda Calculus Evaluator ---
    let next_id = 0;
    function Var(idx) { return { id: next_id++, t: 0, idx: idx }; }
    function Abs(body) { return { id: next_id++, t: 1, body: body }; }
    function App(left, right) { return { id: next_id++, t: 2, left: left, right: right }; }

    function copyTerm(term, origin_x, origin_y, origin_min, origin_max) {
        let t;
        if (term.t === 0) t = Var(term.idx);
        else if (term.t === 1) t = Abs(copyTerm(term.body, origin_x, origin_y, origin_min, origin_max));
        else t = App(copyTerm(term.left, origin_x, origin_y, origin_min, origin_max), copyTerm(term.right, origin_x, origin_y, origin_min, origin_max));
        t.origin_x = origin_x; t.origin_y = origin_y;
        t.origin_min = origin_min; t.origin_max = origin_max;
        return t;
    }

    function shift(term, inc, depth) {
        if (term.t === 0) {
            let t = term.idx >= depth ? Var(term.idx + inc) : Var(term.idx);
            t.origin_x = term.draw_x; t.origin_y = term.draw_y;
            t.origin_min = term.draw_min; t.origin_max = term.draw_max;
            return t;
        } else if (term.t === 1) {
            let t = Abs(shift(term.body, inc, depth + 1));
            t.origin_x = term.draw_x; t.origin_y = term.draw_y;
            t.origin_min = term.draw_min; t.origin_max = term.draw_max;
            return t;
        } else {
            let t = App(shift(term.left, inc, depth), shift(term.right, inc, depth));
            t.origin_x = term.draw_x; t.origin_y = term.draw_y;
            t.origin_min = term.draw_min; t.origin_max = term.draw_max;
            return t;
        }
    }

    function substitute(term, arg, depth) {
        if (term.t === 0) {
            if (term.idx === depth) {
                // Duplicate arg! Its physical origin is arg's current physical location!
                // It will gracefully slide from the right side of the bridge into this variable slot.
                let t = copyTerm(arg, arg.draw_x, arg.draw_y, arg.draw_min, arg.draw_max);
                // Also shift it for De Bruijn correctness
                return shift(t, depth, 0);
            }
            if (term.idx > depth) {
                let t = Var(term.idx - 1);
                t.origin_x = term.draw_x; t.origin_y = term.draw_y;
                t.origin_min = term.draw_min; t.origin_max = term.draw_max;
                return t;
            }
            let t = Var(term.idx);
            t.origin_x = term.draw_x; t.origin_y = term.draw_y;
            t.origin_min = term.draw_min; t.origin_max = term.draw_max;
            return t;
        } else if (term.t === 1) {
            let t = Abs(substitute(term.body, arg, depth + 1));
            t.origin_x = term.draw_x; t.origin_y = term.draw_y;
            t.origin_min = term.draw_min; t.origin_max = term.draw_max;
            return t;
        } else {
            let t = App(substitute(term.left, arg, depth), substitute(term.right, arg, depth));
            t.origin_x = term.draw_x; t.origin_y = term.draw_y;
            t.origin_min = term.draw_min; t.origin_max = term.draw_max;
            return t;
        }
    }

    function reduce(term) {
        if (term.t === 2) {
            if (term.left.t === 1) {
                return { changed: true, term: substitute(term.left.body, term.right, 0) };
            }
            let l_res = reduce(term.left);
            if (l_res.changed) {
                let t = App(l_res.term, term.right);
                t.origin_x = term.draw_x; t.origin_y = term.draw_y;
                t.origin_min = term.draw_min; t.origin_max = term.draw_max;
                return { changed: true, term: t };
            }
            let r_res = reduce(term.right);
            if (r_res.changed) {
                let t = App(term.left, r_res.term);
                t.origin_x = term.draw_x; t.origin_y = term.draw_y;
                t.origin_min = term.draw_min; t.origin_max = term.draw_max;
                return { changed: true, term: t };
            }
        } else if (term.t === 1) {
            let b_res = reduce(term.body);
            if (b_res.changed) {
                let t = Abs(b_res.term);
                t.origin_x = term.draw_x; t.origin_y = term.draw_y;
                t.origin_min = term.draw_min; t.origin_max = term.draw_max;
                return { changed: true, term: t };
            }
        }
        return { changed: false, term: term };
    }

    function countNodes(term) {
        if (term.t === 0) return 1;
        if (term.t === 1) return 1 + countNodes(term.body);
        return 1 + countNodes(term.left) + countNodes(term.right);
    }

    // --- Dynamic Physics & Layout Engine (Tromp Geometry) ---
    let current_x = 0;
    let max_y = 0;
    
    function calculateLayout(term, depth) {
        term.target_y = depth * 40;
        if (term.target_y > max_y) max_y = term.target_y;
        
        if (term.t === 0) {
            term.target_x = current_x;
            current_x += 40;
            term.target_min = term.target_x;
            term.target_max = term.target_x;
        } else if (term.t === 1) {
            calculateLayout(term.body, depth + 1);
            // Tromp abstraction lines span precisely the width of their body
            term.target_min = term.body.target_min;
            term.target_max = term.body.target_max;
            term.target_x = (term.target_min + term.target_max) / 2;
        } else if (term.t === 2) {
            calculateLayout(term.left, depth + 1);
            calculateLayout(term.right, depth + 1);
            term.target_min = term.left.target_min;
            term.target_max = term.right.target_max;
            term.target_x = (term.left.target_x + term.right.target_x) / 2;
        }
        
        // Initialize draw bounds to origin if new, else target
        if (term.draw_x === undefined) {
            term.draw_x = term.origin_x !== undefined ? term.origin_x : term.target_x;
            term.draw_y = term.origin_y !== undefined ? term.origin_y : term.target_y;
            term.draw_min = term.origin_min !== undefined ? term.origin_min : term.target_min;
            term.draw_max = term.origin_max !== undefined ? term.origin_max : term.target_max;
        }
    }

    function updatePhysics(term) {
        // Smooth exponential interpolation (lerp)
        const LERP_SPEED = 0.05;
        term.draw_x += (term.target_x - term.draw_x) * LERP_SPEED;
        term.draw_y += (term.target_y - term.draw_y) * LERP_SPEED;
        term.draw_min += (term.target_min - term.draw_min) * LERP_SPEED;
        term.draw_max += (term.target_max - term.draw_max) * LERP_SPEED;
        
        if (term.t === 1) updatePhysics(term.body);
        if (term.t === 2) { updatePhysics(term.left); updatePhysics(term.right); }
    }

    function drawTerm(term, binders) {
        ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
        ctx.lineWidth = 2;
        
        if (term.t === 0) {
            // Var: Vertical line emanating DOWN from binding lambda
            let binder = binders[binders.length - 1 - term.idx];
            if (binder) {
                ctx.beginPath();
                ctx.moveTo(term.draw_x, term.draw_y);
                ctx.lineTo(term.draw_x, binder.draw_y);
                ctx.stroke();
            }
        } else if (term.t === 1) {
            // Abs: Horizontal line spanning body
            ctx.beginPath();
            ctx.moveTo(term.draw_min, term.draw_y);
            ctx.lineTo(term.draw_max, term.draw_y);
            ctx.stroke();
            
            let new_binders = [...binders, term];
            drawTerm(term.body, new_binders);
        } else if (term.t === 2) {
            // App: Horizontal bridge connecting the two branches
            ctx.beginPath();
            ctx.moveTo(term.left.draw_x, term.draw_y);
            ctx.lineTo(term.right.draw_x, term.draw_y);
            ctx.strokeStyle = "rgba(255, 100, 55, 0.4)"; // Flashing redex pulse could be added here
            ctx.stroke();
            
            ctx.beginPath();
            ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
            // Drops down to the children
            ctx.moveTo(term.left.draw_x, term.draw_y);
            ctx.lineTo(term.left.draw_x, term.left.draw_y);
            ctx.moveTo(term.right.draw_x, term.draw_y);
            ctx.lineTo(term.right.draw_x, term.right.draw_y);
            ctx.stroke();
            
            drawTerm(term.left, binders);
            drawTerm(term.right, binders);
        }
    }

    // Initialize with the 'Grow' combinator
    function getSeed() {
        let M = Abs(App(App(Var(0), Var(0)), Var(0)));
        return App(M, M);
    }
    
    let current_term = getSeed();
    
    // Evaluate once every 2 seconds to allow the physics to gracefully animate the reduction
    setInterval(() => {
        let nodes = countNodes(current_term);
        if (nodes > 400) {
            current_term = getSeed(); 
        } else {
            let res = reduce(current_term);
            if (res.changed) current_term = res.term;
            else current_term = getSeed();
        }
    }, 2000);

    let displayScale = 1.0;
    
    function animate() {
        ctx.fillStyle = "#0A0A0C";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        current_x = 0;
        max_y = 0;
        calculateLayout(current_term, 0);
        updatePhysics(current_term);
        
        // Dynamically adjust camera
        const term_width = current_term.target_max - current_term.target_min;
        const term_height = max_y;
        const padding = 150;
        const targetScaleX = (canvas.width - padding) / Math.max(term_width, 1);
        const targetScaleY = (canvas.height - padding) / Math.max(term_height, 1);
        const targetScale = Math.min(targetScaleX, targetScaleY, 2.0); 
        
        displayScale += (targetScale - displayScale) * 0.05;
        
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        ctx.scale(displayScale, displayScale);
        
        const cx = (current_term.draw_min + current_term.draw_max) / 2;
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
            # Full Screen Physics-Driven Beta-Reduction Engine
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
