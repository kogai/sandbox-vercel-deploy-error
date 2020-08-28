PKG := packages

$(PWD)/$(PKG)/%: $(PWD)/%
	cp -f $(PWD)/$(@F) $(PWD)/$(PKG)/$(@F)

configs: $(PWD)/$(PKG)/tsconfig.json  $(PWD)/$(PKG)/next-env.d.ts

lib/shopify/admin-api.ts:
	npx graphql-codegen

run: configs lib/shopify/admin-api.ts
	npx next dev

build:
	npx next build
