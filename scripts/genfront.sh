#!/usr/bin/bash

OUTDIR="front/src/proto/greeter"

protoc -I=./protos ./protos/*.proto \
  --js_out=import_style=commonjs:${OUTDIR} \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${OUTDIR}
  