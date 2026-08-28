import base64

with open(r'C:\Dev\ChromaLabs.cc\assets\logo_glyph.png', 'rb') as img_file:
    b64_string = base64.b64encode(img_file.read()).decode('utf-8')

# The text "CHROMA LABS" at font-size 48 takes up more than 380 units of width.
# With x=120, it extends past x=500. We set viewBox to 600 to be perfectly safe.
svg_horizontal = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 120" fill="none">
  <image href="data:image/png;base64,{b64_string}" x="0" y="5" width="105" height="110" />
  <text x="120" y="80" font-family="Inter, sans-serif" font-weight="900" font-size="48" fill="#DFBC61" letter-spacing="1.5">CHROMA LABS</text>
</svg>'''
with open(r'C:\Dev\ChromaLabs.cc\assets\brand_package\logo_horizontal.svg', 'w', encoding='utf-8') as f:
    f.write(svg_horizontal)
with open(r'C:\Dev\ChromaLabs.cc\assets\logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_horizontal)

print("SVG generated")