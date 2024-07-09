#!/bin/bash

# Iterate over every .png file in the current directory
for fname in *.png; do
  # Check if the file exists to avoid errors if no .png files are found
  if [ -f "$fname" ]; then
    # Remove the .png extension to create the base name
    base="${fname%.png}"
    # Apply the cwebp command to convert the file
    cwebp "$fname" -o "$base.webp"
  fi
done