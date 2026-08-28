
const canvas = document.getElementById("lambdaBackground");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let zoom = 1.0;
const ZOOM_SPEED = 1.005;

// Draw a single Tromp diagram "bracket"
function drawCombinator(x, y, width, height, depth) {
    if (depth === 0) return;
    
    ctx.beginPath();
    // Horizontal abstraction
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    
    // Variable drops
    ctx.moveTo(x + width * 0.2, y);
    ctx.lineTo(x + width * 0.2, y + height);
    
    ctx.moveTo(x + width * 0.8, y);
    ctx.lineTo(x + width * 0.8, y + height);
    
    // Applications (horizontal bridges)
    ctx.moveTo(x + width * 0.2, y + height);
    ctx.lineTo(x + width * 0.5, y + height);
    
    ctx.stroke();
    
    // Recursively draw the application structures
    drawCombinator(x + width * 0.2, y + height, width * 0.4, height * 0.8, depth - 1);
    drawCombinator(x + width * 0.6, y + height * 0.5, width * 0.4, height * 0.8, depth - 1);
}

function animate() {
    ctx.fillStyle = "#0A0A0C";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = "rgba(212, 175, 55, 0.5)"; // Gold color
    ctx.lineWidth = 2 / zoom; // Keep line width consistent relative to zoom
    
    ctx.save();
    
    // Center the zoom on the middle of the screen
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(zoom, zoom);
    
    // Apply a slight tilt to mimic the thumbnail
    ctx.rotate(-0.1);
    
    // Draw the massive recursive structure
    drawCombinator(-500, -300, 1000, 300, 7);
    
    ctx.restore();
    
    zoom *= ZOOM_SPEED;
    // Loop the fractal zoom when it doubles in scale
    if (zoom > 2.0) {
        zoom = 1.0;
    }
    
    requestAnimationFrame(animate);
}

animate();

