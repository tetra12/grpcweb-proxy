#!/usr/bin/bash
outpath="./"

# Generate Main Pkg
protoc  -I. \
					--go_out=${outpath} \
					--go-grpc_out=${outpath} \
					protos/*.proto
