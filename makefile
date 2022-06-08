.PHONY: build
build: $(ENVIRONMENT_NAME)-$(APP_NAME)

.PHONY: styleguide-dev-pipeline
styleguide-dev-pipeline:
	echo build app $(APP_NAME) for $(ENVIRONMENT_NAME)
	yarn
	NODE_ENV=production node ./scripts/build-s3.js --env=dev

.PHONY: styleguide-beta-pipeline
styleguide-beta-pipeline:
	echo build app $(APP_NAME) for $(ENVIRONMENT_NAME)
	yarn
	NODE_ENV=production node ./scripts/build-s3.js --env=dev

.PHONY: styleguide-prod-pipeline
styleguide-prod-pipeline:
	echo build app $(APP_NAME) for $(ENVIRONMENT_NAME)
	yarn
	NODE_ENV=production node ./scripts/build-s3.js