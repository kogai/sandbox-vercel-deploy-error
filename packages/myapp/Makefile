PKG := packages

$(PWD)/$(PKG)/%: $(PWD)/%
	cp -f $(PWD)/$(@F) $(PWD)/$(PKG)/$(@F)

configs: $(PWD)/$(PKG)/tsconfig.json  $(PWD)/$(PKG)/next-env.d.ts

start: configs
	npx next start

run: configs
	npx next dev

build:
	npm i
	npx next build
