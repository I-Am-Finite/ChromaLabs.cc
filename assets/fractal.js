const canvas = document.createElement('canvas');
canvas.id = 'fractal-canvas';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.zIndex = '-2'; // Behind everything
canvas.style.opacity = '0.3';
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

// Fractal animation parameters
let time = 0;

function drawBox(x, y, size, depth) {
    if (depth === 0) return;
    
    // Abstract Lambda math / bounding box styling
    ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * depth})`; // Gold lines
    if (depth % 2 === 0) {
        ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 * depth})`; // Cyan lines
    }
    
    ctx.lineWidth = 1;
    ctx.strokeRect(x - size/2, y - size/2, size, size);
    
    // Connective lines simulating lambda calculus combinations
    ctx.beginPath();
    ctx.moveTo(x, y - size/2);
    ctx.lineTo(x, y - size/2 - size * 0.2);
    ctx.stroke();

    const newSize = size * 0.48;
    const offset = size * 0.5 * Math.sin(time * 0.001 * depth);
    const yOffset = size * 0.5 * Math.cos(time * 0.0012 * depth);

    // Recursion
    drawBox(x - offset, y + yOffset, newSize, depth - 1);
    drawBox(x + offset, y - yOffset, newSize, depth - 1);
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Draw central node
    const maxDepth = 6;
    const baseSize = Math.min(width, height) * 0.5;
    
    // Subtle rotation and pulsing
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.rotate(time * 0.0002);
    drawBox(0, 0, baseSize + Math.sin(time*0.001)*50, maxDepth);
    ctx.restore();

    time += 16;
    requestAnimationFrame(animate);
}
animate();
