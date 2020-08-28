PKG := packages

$(PWD)/$(PKG)/%: $(PWD)/%
	cp -f $(PWD)/$(@F) $(PWD)/$(PKG)/$(@F)

configs: $(PWD)/$(PKG)/tsconfig.json  $(PWD)/$(PKG)/next-env.d.ts

build: configs
	npx next build
