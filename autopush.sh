#!/bin/bash

# Loop until git status is clean
while true; do
    # Check if there are any uncommitted changes
    if [ -z "$(git status --porcelain)" ]; then
        echo "No more changes to commit."
        exit 0
    fi

    # Get the first modified or untracked file line
    file_line=$(git status --porcelain | head -n1)

    # Extract the status code (first two characters)
    status_code=$(echo "$file_line" | cut -c1-2)

    # Extract the file path safely (after the first 3 characters)
    file_path=$(echo "$file_line" | cut -c4-)

    # Skip deleted files
    if [[ "$status_code" == " D" || "$status_code" == "D " ]]; then
        echo "Skipping deleted file: $file_path"
        continue
    fi

    echo "Adding: $file_path"
    git add "$file_path"

    echo "Committing..."
    git commit -m "$(basename "$file_path")"

    echo "Pushing..."
    git push || { echo "Push failed. Exiting."; exit 1; }

    echo "Processed: $file_path"
done
