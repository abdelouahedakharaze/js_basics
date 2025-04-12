#!/bin/bash

commit_count=0
push_count=0

while true; do
    # Get all lines except untracked directories
    status_lines=$(git status --porcelain | grep -v '/$')

    # Exit if no actual trackable file changes
    if [ -z "$status_lines" ]; then
        echo "✅ Done!"
        echo "🔁 Total commits made: $commit_count"
        echo "📤 Total pushes done:  $push_count"
        exit 0
    fi

    # Get the first actual file
    file_line=$(echo "$status_lines" | head -n1)
    status_code=$(echo "$file_line" | cut -c1-2)
    file_path=$(echo "$file_line" | cut -c4-)
    file_path=$(echo "$file_path" | sed 's/^"//' | sed 's/"$//')

    # Skip deleted files
    if [[ "$status_code" == " D" || "$status_code" == "D " ]]; then
        echo "⏭️  Skipping deleted file: $file_path"
        continue
    fi

    echo "➕ Adding: $file_path"
    git add "$file_path" || { echo "⚠️ Add failed. Skipping."; continue; }

    echo "📝 Committing..."
    git commit -m "$(basename "$file_path")" || continue
    ((commit_count++))

    echo "📤 Pushing..."
    git push || { echo "❌ Push failed. Exiting."; exit 1; }
    ((push_count++))

    echo "✅ Processed: $file_path"
done
