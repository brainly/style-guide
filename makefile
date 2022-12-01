.PHONY: build
build: $(APP_NAME)

.PHONY: styleguide-dev-pipeline
styleguide-dev-pipeline:
	echo build app $(APP_NAME) for $(ENVIRONMENT_NAME)
	yarn
	HOST=https://styleguide-dev.brainly.com BUCKET=styleguide-dev.brainly.com node ./scripts/build-s3.js --latest

.PHONY: styleguide-beta-pipeline
styleguide-beta-pipeline:
	echo build app $(APP_NAME) for $(ENVIRONMENT_NAME)
	yarn
	HOST=https://styleguide-dev.brainly.com BUCKET=styleguide-dev.brainly.com node ./scripts/build-s3.js --rootRedirectPage=false

.PHONY: styleguide-prod-pipeline
styleguide-prod-pipeline:
	echo build app $(APP_NAME) for $(ENVIRONMENT_NAME)
	yarn
	HOST=https://styleguide.brainly.com BUCKET=styleguide-prod.brainly.com node ./scripts/build-s3.js