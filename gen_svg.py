import base64

with open(r'C:\Dev\ChromaLabs.cc\assets\logo_glyph.png', 'rb') as img_file:
    b64_string = base64.b64encode(img_file.read()).decode('utf-8')

# Expand viewBox to 420 to prevent cutoff of the 'A'
svg_horizontal = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 120" fill="none">
  <image href="data:image/png;base64,{b64_string}" x="10" y="5" width="105" height="110" />
  <text x="130" y="55" font-family="Inter, sans-serif" font-weight="900" font-size="48" fill="#DFBC61" letter-spacing="1.5">CHROMA</text>
  <text x="130" y="102" font-family="Inter, sans-serif" font-weight="900" font-size="48" fill="#DFBC61" letter-spacing="1.5">LABS</text>
</svg>'''
with open(r'C:\Dev\ChromaLabs.cc\assets\brand_package\logo_horizontal.svg', 'w', encoding='utf-8') as f:
    f.write(svg_horizontal)
with open(r'C:\Dev\ChromaLabs.cc\assets\logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_horizontal)

print("SVG generated")