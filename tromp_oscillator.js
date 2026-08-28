
const canvas = document.getElementById("lambdaBackground");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let time = 0;
const SPEED = 0.01;

// Draws a massive, screen-filling Tromp structure that oscillates 
// between a combined state and a reduced (split) state.
function drawOscillatingNet(x, y, width, height, depth, progress) {
    if (depth === 0) return;
    
    // progress is 0.0 (combined) to 1.0 (fully split/reduced)
    
    ctx.beginPath();
    
    // The abstraction line splits into two overlapping lines as it reduces
    // Left side
    const leftW = width * (0.5 - 0.1 * progress);
    ctx.moveTo(x - width/2, y);
    ctx.lineTo(x - width/2 + leftW, y);
    
    // Right side
    const rightW = width * (0.5 - 0.1 * progress);
    ctx.moveTo(x + width/2, y);
    ctx.lineTo(x + width/2 - rightW, y);
    
    // Variable drops
    // In combined state, they drop straight down.
    // In split state, they shift outward.
    const varOffset = (width / 4) + (width / 8) * progress;
    
    // Left variable
    ctx.moveTo(x - varOffset, y);
    ctx.lineTo(x - varOffset, y + height);
    
    // Right variable
    ctx.moveTo(x + varOffset, y);
    ctx.lineTo(x + varOffset, y + height);
    
    // Application bridge
    // Dissolves (fades out) as progress approaches 1.0, but to keep it simple,
    // we just break it apart.
    const gap = width * 0.2 * progress;
    ctx.moveTo(x - varOffset, y + height);
    ctx.lineTo(x - gap/2, y + height);
    
    ctx.moveTo(x + gap/2, y + height);
    ctx.lineTo(x + varOffset, y + height);
    
    ctx.stroke();
    
    // Recursive application
    // The children also split and move apart based on progress
    const childY = y + height;
    const childH = height * 0.8;
    
    drawOscillatingNet(x - varOffset, childY, leftW, childH, depth - 1, progress);
    drawOscillatingNet(x + varOffset, childY, rightW, childH, depth - 1, progress);
}

function animate() {
    ctx.fillStyle = "#0A0A0C";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Oscillate between 0 and 1 using sine wave
    const progress = (Math.sin(time) + 1) / 2; // 0 to 1
    
    ctx.strokeStyle = "rgba(212, 175, 55, 0.5)";
    ctx.lineWidth = 1.5;
    
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 3); // Start near top
    
    // Draw a massive grid filling the screen
    drawOscillatingNet(0, 0, canvas.width * 0.8, 150, 8, progress);
    
    ctx.restore();
    
    time += SPEED;
    requestAnimationFrame(animate);
}
animate();

