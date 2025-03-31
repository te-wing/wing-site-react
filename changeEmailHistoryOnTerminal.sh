git filter-branch --env-filter '
NEW_EMAIL="wing@me.wing.osaka"

GIT_AUTHOR_EMAIL="$NEW_EMAIL"
GIT_COMMITTER_EMAIL="$NEW_EMAIL"
' --tag-name-filter cat -- --all