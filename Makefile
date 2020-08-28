JEST := npx jest
ESLINT := npx eslint
TSC := npx tsc
BZL := npx bazelisk

.PHONY: test
ts/test: ts/test_jest ts/lint ts/type

build:
	make -C packages build

go/test:
	$(BZL) test //...

ts/codegen: packages/lib/shopify/appHandle.gql
	make -C packages/lib/shopify/admin-api.ts

ts/test_jest: ts/codegen
	$(JEST)

ts/lint: ts/codegen
	$(ESLINT) .
	# TODO: Suppress until theme base defined.

ts/type: ts/codegen
	$(TSC) --noEmit

ts/run/storybook:
	npx start-storybook -p 6006

ts/build/storybook:
	npx build-storybook
