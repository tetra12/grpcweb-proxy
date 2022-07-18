genfront:

genback:
	@./scripts/genback.sh

tidy:
	@cd back && go mod tidy --compat=1.18

runserver:
	@cd back && go run -v server/main.go

runclient:
	@cd back && go run -v client/main.go


.PHONY: genback genfront tidy runserver
