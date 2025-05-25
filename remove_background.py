#!/usr/bin/env python3
"""
Remove background from image and save with transparency
Requires: pip install rembg pillow
"""

from rembg import remove
from PIL import Image
import os

def remove_background(input_path, output_path):
    """Remove background from image and save as PNG with transparency"""
    
    # Open the input image
    input_image = Image.open(input_path)
    
    # Remove the background
    output_image = remove(input_image)
    
    # Save the result
    output_image.save(output_path, 'PNG')
    print(f"Saved transparent image to: {output_path}")

if __name__ == "__main__":
    # Define paths
    input_file = "public/assets/img/CurrentPicture2.png"
    output_file = "public/assets/img/CurrentPicture2-transparent.png"
    
    # Check if input file exists
    if not os.path.exists(input_file):
        print(f"Error: Input file '{input_file}' not found!")
        exit(1)
    
    # Process the image
    try:
        remove_background(input_file, output_file)
        print("Background removal complete!")
    except Exception as e:
        print(f"Error processing image: {e}")