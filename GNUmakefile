genfront:
	@cd front && yarn protogen

genback:
	@./scripts/genback.sh

tidy:
	@cd back && go mod tidy --compat=1.18

runproxy:
	@docker run --rm --name envoy \
		-v ${PWD}/envoy.yaml:/etc/envoy/envoy.yaml:ro \
		--network=host envoyproxy/envoy:v1.22.2

runserver:
	@cd back && go run -v server/main.go

runclient:
	@cd back && go run -v client/main.go

runfront:
	@cd front && yarn dev


.PHONY: genback genfront tidy runserver runclient runfront
