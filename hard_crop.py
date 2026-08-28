from PIL import Image

img = Image.open(r'C:\Dev\ChromaLabs.cc\assets\logo_glyph.png')
pixels = img.load()

width, height = img.size

min_x = width
min_y = height
max_x = 0
max_y = 0

for y in range(height):
    for x in range(width):
        # Look for bright gold pixels (Red > 100, Green > 100)
        r, g, b, a = pixels[x, y]
        if r > 100 and g > 100 and a > 100:
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

if min_x < max_x and min_y < max_y:
    # Add a tiny 5px padding
    min_x = max(0, min_x - 5)
    min_y = max(0, min_y - 5)
    max_x = min(width, max_x + 5)
    max_y = min(height, max_y + 5)
    
    cropped = img.crop((min_x, min_y, max_x, max_y))
    cropped.save(r'C:\Dev\ChromaLabs.cc\assets\logo_glyph_cropped.png')
    print(f"Perfectly cropped from {width}x{height} to {max_x-min_x}x{max_y-min_y}")
else:
    print("Failed to crop")