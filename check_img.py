from PIL import Image
img = Image.open(r'C:\Dev\ChromaLabs.cc\assets\logo_glyph.png')
print(f"Size: {img.size}")
# Let's find the actual non-transparent bounding box
bbox = img.getbbox()
print(f"BBox: {bbox}")