#!/bin/bash

while true; do
    # Check if working directory is clean
    if [ -z "$(git status --porcelain)" ]; then
        echo "No more changes to commit."
        exit 0
    fi

    # Get first file or folder listed
    file_line=$(git status --porcelain | head -n1)

    # Get the status and the file path
    status_code=$(echo "$file_line" | cut -c1-2)
    file_path=$(echo "$file_line" | cut -c4-)

    # Strip quotes if they exist (from whitespace or directory names)
    file_path=$(echo "$file_path" | sed 's/^"//' | sed 's/"$//')

    # Skip untracked directories (ends with / and is untracked)
    if [[ "$status_code" == "??" && -d "$file_path" ]]; then
        echo "Skipping untracked directory: $file_path"
        # Optional: track files inside it when ready
        continue
    fi

    # Skip deleted files
    if [[ "$status_code" == " D" || "$status_code" == "D " ]]; then
        echo "Skipping deleted file: $file_path"
        continue
    fi

    echo "Adding: $file_path"
    git add "$file_path" || { echo "Add failed. Skipping."; continue; }

    echo "Committing..."
    git commit -m "$(basename "$file_path")" || continue

    echo "Pushing..."
    git push || { echo "Push failed. Exiting."; exit 1; }

    echo "Processed: $file_path"
done
