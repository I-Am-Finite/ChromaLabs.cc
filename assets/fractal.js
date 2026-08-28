const canvas = document.createElement('canvas');
canvas.id = 'fractal-canvas';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.zIndex = '0';
canvas.style.opacity = '0.35';
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

// Lambda Calculus AST Node Simulation
class ASTNode {
    constructor(x, y, depth, type) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.depth = depth;
        this.type = type; // 0 = App, 1 = Lambda, 2 = Var
        this.children = [];
        this.radius = 4 + (5 - depth) * 1.5;
        this.reductionState = 0; // 0: stable, 1: reducing, 2: expanding
        this.reductionTimer = 0;
    }
}

let root;
const MAX_DEPTH = 6;

function buildTree(node, x, y, depth, angle, spread) {
    if (depth >= MAX_DEPTH) return;
    
    // Generate left (function) and right (argument) subtrees
    const leftAngle = angle - spread;
    const rightAngle = angle + spread;
    
    const length = 80 + (MAX_DEPTH - depth) * 15;
    
    const lx = x + Math.cos(leftAngle) * length;
    const ly = y + Math.sin(leftAngle) * length;
    const leftNode = new ASTNode(lx, ly, depth + 1, Math.random() > 0.5 ? 0 : 1);
    
    const rx = x + Math.cos(rightAngle) * length;
    const ry = y + Math.sin(rightAngle) * length;
    const rightNode = new ASTNode(rx, ry, depth + 1, 2);
    
    node.children.push(leftNode);
    node.children.push(rightNode);
    
    buildTree(leftNode, lx, ly, depth + 1, leftAngle, spread * 0.7);
    buildTree(rightNode, rx, ry, depth + 1, rightAngle, spread * 0.7);
}

function initTree() {
    root = new ASTNode(width / 2, -50, 0, 0); // Start slightly above screen
    buildTree(root, width / 2, 100, 0, Math.PI / 2, Math.PI / 4.5);
}

// Traverse and animate reductions
function updateAndDraw(node, time) {
    // Subtle breathing animation for all nodes
    node.x = node.baseX + Math.sin(time * 0.001 + node.depth) * 10;
    node.y = node.baseY + Math.cos(time * 0.0015 + node.depth) * 10;

    // Simulate Beta-Reduction visually
    // If a node is an Application (0) and left child is Lambda (1), they can reduce.
    // Visually, right subtree gets pulled into left subtree.
    if (Math.random() < 0.001 && node.children.length === 2 && node.reductionState === 0) {
        node.reductionState = 1;
        node.reductionTimer = 60; // frames
    }

    if (node.reductionState === 1) {
        node.reductionTimer--;
        const rightChild = node.children[1];
        const leftChild = node.children[0];
        
        // Right child gets gravitationally pulled to left child (substitution)
        rightChild.x += (leftChild.x - rightChild.x) * 0.1;
        rightChild.y += (leftChild.y - rightChild.y) * 0.1;

        if (node.reductionTimer <= 0) {
            node.reductionState = 2; // Snap back/re-expand
            node.reductionTimer = 30;
        }
    } else if (node.reductionState === 2) {
        node.reductionTimer--;
        const rightChild = node.children[1];
        
        // Push back to base positions
        rightChild.x += (rightChild.baseX - rightChild.x) * 0.1;
        rightChild.y += (rightChild.baseY - rightChild.y) * 0.1;

        if (node.reductionTimer <= 0) {
            node.reductionState = 0;
            rightChild.x = rightChild.baseX;
            rightChild.y = rightChild.baseY;
        }
    }

    // Draw Edges
    for (const child of node.children) {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(child.x, child.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + (0.05 * (MAX_DEPTH - child.depth))})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Data pulses moving down the tree
        const pulse = (time * 0.05 + child.depth * 20) % 100;
        if (pulse < 20) {
            const px = node.x + (child.x - node.x) * (pulse / 20);
            const py = node.y + (child.y - node.y) * (pulse / 20);
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = child.type === 2 ? '#00F0FF' : '#D4AF37';
            ctx.fill();
        }
        
        updateAndDraw(child, time);
    }

    // Draw Node Geometry (Hexagon or Diamond)
    ctx.save();
    ctx.translate(node.x, node.y);
    ctx.rotate(time * 0.0005 * (node.depth % 2 === 0 ? 1 : -1));
    ctx.beginPath();
    const sides = node.type === 0 ? 6 : 4; // Hexagon for App, Diamond for Lambda/Var
    for (let i = 0; i < sides; i++) {
        const angle = (i * Math.PI * 2) / sides;
        const hx = Math.cos(angle) * node.radius;
        const hy = Math.sin(angle) * node.radius;
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    
    if (node.type === 1) {
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.8)'; // Gold Lambda
        ctx.fillStyle = 'rgba(212, 175, 55, 0.1)';
    } else if (node.type === 2) {
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.8)'; // Cyan Variable
        ctx.fillStyle = 'rgba(0, 240, 255, 0.1)';
    } else {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'; // White Application
        ctx.fillStyle = 'transparent';
    }
    
    if (node.reductionState === 1) {
        ctx.shadowColor = '#00F0FF';
        ctx.shadowBlur = 10;
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
    }
    
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

let time = 0;
function animate() {
    ctx.clearRect(0, 0, width, height);
    if (!root || width === 0) {
        if (width > 0) initTree();
    } else {
        updateAndDraw(root, time);
    }
    time += 1;
    requestAnimationFrame(animate);
}
animate();
