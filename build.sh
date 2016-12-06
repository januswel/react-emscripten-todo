#!/bin/sh

EMCC="/opt/emsdk_portable/emscripten/1.35.0/emcc"
SRC_DIR="src/domain"
DST_DIR="src/public"

${EMCC} -O1 --bind -o ${DST_DIR}/domain.js ${SRC_DIR}/todo.cpp
