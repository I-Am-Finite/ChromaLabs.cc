import base64

with open(r'C:\Dev\ChromaLabs.cc\assets\logo_glyph.png', 'rb') as img_file:
    b64_string = base64.b64encode(img_file.read()).decode('utf-8')

# Let's generate logo_horizontal.svg
# The PNG is 542x563. Let's scale it down to ~70px high. Ratio: 542/563 = 0.96. Width = 67px.
svg_horizontal = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 80" fill="none">
  <image href="data:image/png;base64,{b64_string}" x="0" y="5" width="67" height="70" />
  <text x="82" y="55" font-family="Inter, sans-serif" font-weight="900" font-size="36" fill="#E2C775" letter-spacing="1.5">CHROMA LABS</text>
</svg>'''
with open(r'C:\Dev\ChromaLabs.cc\assets\brand_package\logo_horizontal.svg', 'w', encoding='utf-8') as f:
    f.write(svg_horizontal)
with open(r'C:\Dev\ChromaLabs.cc\assets\logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_horizontal)

print("SVG generated")