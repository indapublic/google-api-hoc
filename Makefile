dev:
	npm run dev
build:
	npm run prepublish
publish:
	npm version patch
	npm publish .
test:
	npm run test
example: build
	npm run build
publish_pages: example
	gh-pages -d ./public
