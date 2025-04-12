#!/bin/bash

# Loop until git status is clean
while true; do
    # Check if there are any uncommitted changes
    if [ -z "$(git status --porcelain)" ]; then
        echo "No more changes to commit."
        exit 0
    fi

    # Get the first uncommitted entry
    file_line=$(git status --porcelain | head -n1)
    file_status=$(echo "$file_line" | cut -c1-2)
    file_path=$(echo "$file_line" | cut -c4-)

    # Skip empty lines (safety check)
    if [ -z "$file_path" ]; then
        echo "No processable files found."
        exit 1
    fi

    # Handle directories
    if [ -d "$file_path" ]; then
        # Check if directory contains files (including hidden ones)
        if [ -z "$(find "$file_path" -mindepth 1 -maxdepth 1 -not -name '.git' -print -quit 2>/dev/null)" ]; then
            echo "Skipping empty directory: $file_path"
            git clean -fdq "$file_path"  # Remove empty directory
            continue
        fi
    fi

    # Add the file/directory
    if ! git add -- "$file_path"; then
        echo "Failed to add: $file_path"
        # If it's a directory with ignored files, skip permanently
        if [ -d "$file_path" ]; then
            echo "Adding directory to .gitignore"
            echo "/$file_path" >> .gitignore
        fi
        continue
    fi

    # Commit with filename as message
    git commit -m "$(basename "$file_path")"

    # Push changes
    git push

    echo "Successfully processed: $file_path"
done