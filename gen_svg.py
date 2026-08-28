import base64

with open(r'C:\Dev\ChromaLabs.cc\assets\logo_glyph.png', 'rb') as img_file:
    b64_string = base64.b64encode(img_file.read()).decode('utf-8')

# The PNG is 542x563. 
# Let's increase image size to 95x100
# And decrease text font-size to 32
svg_horizontal = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 100" fill="none">
  <image href="data:image/png;base64,{b64_string}" x="0" y="0" width="95" height="100" />
  <text x="100" y="65" font-family="Inter, sans-serif" font-weight="900" font-size="36" fill="#DFBC61" letter-spacing="1.5">CHROMA LABS</text>
</svg>'''
with open(r'C:\Dev\ChromaLabs.cc\assets\brand_package\logo_horizontal.svg', 'w', encoding='utf-8') as f:
    f.write(svg_horizontal)
with open(r'C:\Dev\ChromaLabs.cc\assets\logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_horizontal)

print("SVG generated")