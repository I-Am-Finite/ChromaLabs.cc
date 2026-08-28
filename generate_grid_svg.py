import random

def generate_svg():
    svg = []
    # Use viewBox to cover a large arbitrary area, say 3000x2000, and CSS width/height 100% to fill the screen
    svg.append('<svg width="100%" height="100%" style="position: absolute; top: 0; left: 0; z-index: -2;" xmlns="http://www.w3.org/2000/svg">')
    
    # 1. Draw the static subtle grid (60x60)
    svg.append('<defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">')
    svg.append('<path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(212, 175, 55, 0.05)" stroke-width="1"/></pattern>')
    # Glow filter for the traces
    svg.append('<filter id="glow" x="-20%" y="-20%" width="140%" height="140%">')
    svg.append('<feGaussianBlur stdDeviation="3" result="blur" />')
    svg.append('<feComposite in="SourceGraphic" in2="blur" operator="over" />')
    svg.append('</filter></defs>')
    svg.append('<rect width="100%" height="100%" fill="url(#grid)" />')
    
    # 2. Draw snaking paths using EXACT multiples of 60
    # Originating from edges, middle, snaking around
    paths = [
        "M 0 180 L 420 180 L 420 480 L 1020 480 L 1020 240 L 2400 240", # Left to right, snaking up and down
        "M 900 1200 L 900 600 L 1440 600 L 1440 0",                     # Middle (bottom up)
        "M 600 0 L 600 300 L 180 300 L 180 1200",                       # Top down, snake left
        "M 2400 720 L 1800 720 L 1800 1020 L 1200 1020 L 1200 1200",    # Right to bottom
        "M 1320 480 L 1320 840 L 2040 840 L 2040 1200",                 # Middle snaking right and down
        "M 1500 1200 L 1500 720 L 840 720 L 840 0",                     # Bottom to top, snake left
        "M 0 840 L 480 840 L 480 1020 L 720 1020 L 720 1200",           # Left to bottom
        "M 2400 360 L 1920 360 L 1920 180 L 1500 180 L 1500 0"          # Right to top
    ]
    
    for i, p in enumerate(paths):
        # Base subtle path (faint trace of the route)
        svg.append(f'<path d="{p}" fill="none" stroke="rgba(212, 175, 55, 0.15)" stroke-width="1" />')
        # Animated tracing thread
        delay = random.uniform(0, 5)
        duration = random.uniform(6, 12)
        # Using dasharray to create a small "comet" head and long tail
        svg.append(f'<path d="{p}" fill="none" stroke="#D4AF37" stroke-width="2" filter="url(#glow)" stroke-dasharray="150 4000" stroke-dashoffset="4000">')
        svg.append(f'<animate attributeName="stroke-dashoffset" values="4000; -200" dur="{duration}s" begin="{delay}s" repeatCount="indefinite" />')
        svg.append('</path>')
        
    svg.append('</svg>')
    return "\n".join(svg)

print(generate_svg())

