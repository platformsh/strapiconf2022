#!/usr/bin/env bash

API_URL_UNTRIMMED=$(echo $PLATFORM_ROUTES | base64 --decode | jq -r 'to_entries[] | select (.value.id == "api") | .key')
printf "NEXT_PUBLIC_API_URL=${API_URL_UNTRIMMED::-1}\n" > .env
printf "PREVIEW_SECRET=mysecret" >> .env
