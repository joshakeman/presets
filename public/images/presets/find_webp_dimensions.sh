#!/bin/bash

# Set the output CSV file
OUTPUT_FILE="webp_dimensions.csv"

# Write CSV headers
echo "filename,width,height,aspect_ratio" > "$OUTPUT_FILE"

# Find all .webp files and process them
find . -type f -name "*.webp" | while read -r file; do
  # Get image dimensions using ImageMagick's `identify`
  dimensions=$(identify -format "%w,%h" "$file" 2>/dev/null)

  if [ -n "$dimensions" ]; then
    width=$(echo "$dimensions" | cut -d',' -f1)
    height=$(echo "$dimensions" | cut -d',' -f2)

    # Calculate aspect ratio (width / height)
    aspect_ratio=$(awk "BEGIN {printf \"%.2f\", $width/$height}")

    # Append to CSV
    echo "\"$file\",$width,$height,$aspect_ratio" >> "$OUTPUT_FILE"
  else
    echo "Skipping $file (unable to retrieve dimensions)"
  fi
done

echo "CSV file '$OUTPUT_FILE' created successfully!"
