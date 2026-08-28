import base64

with open(r'C:\Dev\ChromaLabs.cc\assets\logo_glyph.png', 'rb') as img_file:
    b64_string = base64.b64encode(img_file.read()).decode('utf-8')

# Vertical Lockup (Glyph + Text underneath, stacked)
svg_vertical = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400" fill="none">
  <image href="data:image/png;base64,{b64_string}" x="50" y="20" width="200" height="210" />
  <text x="150" y="285" text-anchor="middle" font-family="Inter, sans-serif" font-weight="900" font-size="52" fill="#DFBC61" letter-spacing="1.5">CHROMA</text>
  <text x="150" y="345" text-anchor="middle" font-family="Inter, sans-serif" font-weight="900" font-size="52" fill="#DFBC61" letter-spacing="1.5">LABS</text>
</svg>'''
with open(r'C:\Dev\ChromaLabs.cc\assets\brand_package\logo_vertical.svg', 'w', encoding='utf-8') as f:
    f.write(svg_vertical)

# Standalone Glyph SVG
svg_glyph = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 125" fill="none">
  <image href="data:image/png;base64,{b64_string}" x="10" y="10" width="100" height="105" />
</svg>'''
with open(r'C:\Dev\ChromaLabs.cc\assets\brand_package\logo_glyph.svg', 'w', encoding='utf-8') as f:
    f.write(svg_glyph)

print("Generated all SVGs with updated stacked layout.")