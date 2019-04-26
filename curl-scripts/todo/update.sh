curl http://localhost:4741/todos/${ID} \
  --request PATCH \
  --include \
  --header 'Content-Type: application/json' \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "todo": {
      "title": "'"${TITLE}"'",
      "text": "'"${TEXT}"'"
      }
  }'
