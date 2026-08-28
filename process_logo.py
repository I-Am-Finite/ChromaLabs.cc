from PIL import Image

def make_transparent():
    # Load the image
    img = Image.open(r'C:\Users\reser\.gemini\antigravity\brain\d1dff85e-7d7d-4b51-bc88-395b35ef0341\chroma_logo_concept_4_1787951847296.jpg')
    img = img.convert("RGBA")
    
    # Process pixels
    datas = img.getdata()
    newData = []
    
    for item in datas:
        # If it's pure or very dark black, make it transparent
        if item[0] < 20 and item[1] < 20 and item[2] < 20:
            # We want to preserve the shadow somewhat, so let's do a soft alpha blend for dark pixels
            # A simple approach is just turning black to transparent, but leaving gold opaque.
            # Let's map luminance to alpha for dark pixels.
            lum = (item[0] + item[1] + item[2]) / 3
            if lum < 5:
                newData.append((0, 0, 0, 0)) # Fully transparent
            else:
                # Semi-transparent shadow based on luminance
                alpha = int((lum / 20.0) * 255)
                newData.append((item[0], item[1], item[2], alpha))
        else:
            newData.append((item[0], item[1], item[2], 255))
            
    img.putdata(newData)
    
    # Crop the image tight around the logo
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(r'C:\Dev\ChromaLabs.cc\assets\brand_package\apex_tetrahedron.png', "PNG")
    img.save(r'C:\Dev\ChromaLabs.cc\assets\logo_glyph.png', "PNG")
    print("Successfully processed and saved transparent PNGs")

make_transparent()