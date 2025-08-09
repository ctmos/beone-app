#!/usr/bin/env bash
set -e
# Install Root deps → dann Server/Client Dev parallel
( cd server && npm run dev ) &
( cd client && npm run dev )
