import base64

with open(r'C:\Dev\ChromaLabs.cc\assets\logo_glyph.png', 'rb') as img_file:
    b64_string = base64.b64encode(img_file.read()).decode('utf-8')

# Vertical Lockup (Glyph + Text underneath)
svg_vertical = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">
  <image href="data:image/png;base64,{b64_string}" x="125" y="20" width="150" height="156" />
  <text x="200" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-weight="900" font-size="42" fill="#E2C775" letter-spacing="1.5">CHROMA LABS</text>
</svg>'''
with open(r'C:\Dev\ChromaLabs.cc\assets\brand_package\logo_vertical.svg', 'w', encoding='utf-8') as f:
    f.write(svg_vertical)

# Standalone Glyph SVG
svg_glyph = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <image href="data:image/png;base64,{b64_string}" x="0" y="0" width="100" height="104" />
</svg>'''
with open(r'C:\Dev\ChromaLabs.cc\assets\brand_package\logo_glyph.svg', 'w', encoding='utf-8') as f:
    f.write(svg_glyph)
with open(r'C:\Dev\ChromaLabs.cc\assets\logo_glyph.svg', 'w', encoding='utf-8') as f:
    f.write(svg_glyph)

print("Generated all SVGs with embedded 3D PNG.")