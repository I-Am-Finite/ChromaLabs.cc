
const canvas = document.getElementById("lambdaBackground");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// Draws a procedural AST that mimics a Tromp diagram of a massive beta-reduction
function drawTrompReduction(x, y, w, h, depth, cycle) {
    if (depth === 0) return;
    
    // cycle goes from 0.0 (Unreduced App(Abs(B), R)) to 1.0 (Reduced B[R/x])
    
    // Geometry Constants
    const leftX = x;
    const rightX = x + w/2;
    const bridgeY = y + h - 10;
    const absY = y + 10;
    
    // 1. Overarching Application Bridge
    // Connects left root (leftX) to right root (rightX)
    const bridgeOpacity = 1.0 - cycle;
    if (bridgeOpacity > 0.01) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(212, 175, 55, ${bridgeOpacity * 0.5})`;
        ctx.moveTo(leftX, bridgeY);
        ctx.lineTo(rightX, bridgeY);
        // Drops to the bridge
        ctx.moveTo(leftX, bridgeY - 10);
        ctx.lineTo(leftX, bridgeY);
        ctx.moveTo(rightX, bridgeY - 10);
        ctx.lineTo(rightX, bridgeY);
        ctx.stroke();
    }
    
    // 2. Left Abstraction (Dissolves)
    if (bridgeOpacity > 0.01) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(212, 175, 55, ${bridgeOpacity * 0.5})`;
        // Tromp abstraction line spans from leftX to leftX + w/2
        ctx.moveTo(leftX, absY);
        ctx.lineTo(rightX, absY);
        ctx.stroke();
    }
    
    // 3. The Body of the Left Abstraction (B)
    // Contains two variable drops that will receive the duplicated R
    const var1X = leftX + (w/2) * 0.2;
    const var2X = leftX + (w/2) * 0.8;
    const varY = absY; // Drops start at the abstraction line
    const varH = h * 0.5; // Variables drop halfway down
    
    ctx.beginPath();
    ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
    // Var 1 Drop
    ctx.moveTo(var1X, varY);
    ctx.lineTo(var1X, varY + varH);
    // Var 2 Drop
    ctx.moveTo(var2X, varY);
    ctx.lineTo(var2X, varY + varH);
    
    // Internal application connecting the two variables (so B is an App(x, x))
    // Tromp App bridge connects leftmost variables
    ctx.moveTo(var1X, varY + varH);
    ctx.lineTo(var2X, varY + varH);
    ctx.stroke();
    
    // 4. The Right Argument (R) - Duplicates and slides!
    // Start position: rightX, absY
    // Target position 1: var1X, varY + varH
    // Target position 2: var2X, varY + varH
    
    const curr1X = rightX + (var1X - rightX) * cycle;
    const curr1Y = absY + (varY + varH - absY) * cycle;
    
    const curr2X = rightX + (var2X - rightX) * cycle;
    const curr2Y = absY + (varY + varH - absY) * cycle;
    
    // Scale halves as it snaps in
    const scale = 1.0 - (0.5 * cycle);
    const subW = (w/2) * scale;
    const subH = (h * 0.8) * scale;
    
    ctx.save();
    if (cycle < 0.05) {
        // Just draw it once before duplication
        drawTrompReduction(rightX, absY, w/2, h * 0.8, depth - 1, cycle);
    } else {
        // Draw duplicate 1
        drawTrompReduction(curr1X, curr1Y, subW, subH, depth - 1, cycle);
        // Draw duplicate 2
        drawTrompReduction(curr2X, curr2Y, subW, subH, depth - 1, cycle);
    }
    ctx.restore();
}

function animate() {
    ctx.fillStyle = "#0A0A0C";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const time = Date.now() / 2500;
    const cycle = (Math.sin(time) + 1) / 2; // 0 to 1
    
    ctx.save();
    
    // Center logic
    const zoom = 1.0 - (0.2 * cycle);
    ctx.translate(canvas.width / 2, canvas.height / 3);
    ctx.scale(zoom, zoom);
    
    ctx.lineWidth = 2 / zoom;
    
    // Draw the massive seed
    // We want the entire screen filled. So width is huge.
    drawTrompReduction(-canvas.width * 0.6, 0, canvas.width * 1.2, 300, 6, cycle);
    
    ctx.restore();
    
    requestAnimationFrame(animate);
}

animate();

