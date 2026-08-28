const canvas = document.createElement('canvas');
canvas.id = 'fractal-canvas';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.zIndex = '0'; // We'll rely on higher z-index in Reflex components
canvas.style.opacity = '0.4';
canvas.style.pointerEvents = 'none';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let width, height;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Isometric projection helper
function iso(x, y, z) {
    const isoX = (x - y) * Math.cos(Math.PI / 6);
    const isoY = (x + y) * Math.sin(Math.PI / 6) - z;
    return { x: isoX, y: isoY };
}

function drawIsometricBox(cx, cy, size, zOffset, depth, time) {
    if (depth === 0) return;

    // Beta-reduction simulation: sizes compress based on time and depth
    // Using sine waves to simulate "crushing" absorption
    const compression = (Math.sin(time * 0.002 + depth) + 1) * 0.5; // 0 to 1
    const actualSize = size * (1 - compression * 0.2); 
    const half = actualSize / 2;

    const points = [
        iso(-half, -half, zOffset),
        iso(half, -half, zOffset),
        iso(half, half, zOffset),
        iso(-half, half, zOffset),
        iso(-half, -half, zOffset - actualSize),
        iso(half, -half, zOffset - actualSize),
        iso(half, half, zOffset - actualSize),
        iso(-half, half, zOffset - actualSize)
    ];

    ctx.save();
    ctx.translate(cx, cy);

    // Styling: Gold for outer bounds (Lambda), Cyan for inner (Variables)
    if (depth % 2 === 0) {
        ctx.strokeStyle = `rgba(212, 175, 55, ${0.15 + (depth * 0.05)})`; // Gold
    } else {
        ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 + (depth * 0.05)})`; // Cyan
    }
    
    // Add glow during heavy compression (beta-reduction event)
    if (compression > 0.8) {
        ctx.shadowColor = depth % 2 === 0 ? '#D4AF37' : '#00F0FF';
        ctx.shadowBlur = 15;
        ctx.strokeStyle = `rgba(255, 255, 255, 0.8)`; // Flash white
    } else {
        ctx.shadowBlur = 0;
    }

    ctx.lineWidth = 1;

    // Draw bottom face
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.lineTo(points[2].x, points[2].y);
    ctx.lineTo(points[3].x, points[3].y);
    ctx.closePath();
    ctx.stroke();

    // Draw top face
    ctx.beginPath();
    ctx.moveTo(points[4].x, points[4].y);
    ctx.lineTo(points[5].x, points[5].y);
    ctx.lineTo(points[6].x, points[6].y);
    ctx.lineTo(points[7].x, points[7].y);
    ctx.closePath();
    ctx.stroke();

    // Draw connecting edges
    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[i+4].x, points[i+4].y);
        ctx.stroke();
    }

    ctx.restore();

    // Recursive branches for inner variables (AST)
    const newSize = size * 0.6;
    const newZ = zOffset - size * 1.5;
    
    // Left branch
    drawIsometricBox(cx - actualSize, cy + actualSize*0.5, newSize, newZ, depth - 1, time + 200);
    // Right branch
    drawIsometricBox(cx + actualSize, cy - actualSize*0.5, newSize, newZ, depth - 1, time + 400);
}

let time = 0;
function animate() {
    ctx.clearRect(0, 0, width, height);
    
    const maxDepth = 5;
    const baseSize = Math.min(width, height) * 0.25;
    
    // Slowly orbit the entire structure
    const cx = width / 2;
    const cy = height / 2 + 100;
    
    drawIsometricBox(cx, cy, baseSize, 0, maxDepth, time);

    time += 16;
    requestAnimationFrame(animate);
}
animate();
