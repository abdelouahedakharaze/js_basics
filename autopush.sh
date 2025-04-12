#!/bin/bash

# Loop until git status is clean
while true; do
    # Check if there are any uncommitted changes
    if [ -z "$(git status --porcelain)" ]; then
        echo "No more changes to commit."
        exit 0
    fi

    # Get the first modified/untracked file path
    file_line=$(git status --porcelain | head -n1)
    file_path=$(echo "$file_line" | cut -c4-)

    # Add the file
    git add "$file_path"

    # Commit with filename as message
    git commit -m "$(basename "$file_path")"

    # Push to remote
    git push

    echo "Processed: $file_path"
done