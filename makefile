.PHONY: build
build: $(APP_NAME)

.PHONY: styleguide-dev-pipeline
styleguide-dev-pipeline:
	echo build app $(APP_NAME) for $(ENVIRONMENT_NAME)
	yarn
	node ./scripts/build-s3.js --latest

.PHONY: styleguide-beta-pipeline
styleguide-beta-pipeline:
	echo build app $(APP_NAME) for $(ENVIRONMENT_NAME)
	yarn
	node ./scripts/build-s3.js --rootRedirectPage=false

.PHONY: styleguide-prod-pipeline
styleguide-prod-pipeline:
	echo build app $(APP_NAME) for $(ENVIRONMENT_NAME)
	yarn
	node ./scripts/build-s3.js