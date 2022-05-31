.PHONY: build
build: build-$(ENVIRONMENT_NAME)-$(APP_NAME)

.PHONY: build-styleguide-sg-storybook-dev-deploy
build-styleguide-sg-storybook-dev-deploy:
	echo build app $(APP_NAME) for $(ENVIRONMENT_NAME)
	yarn
	yarn build
	NODE_ENV=production node ./scripts/build-storybook-s3.js

.PHONY: build-styleguide-sg-prod-deploy-s3
build-styleguide-sg-prod-deploy-s3:
	echo build app $(APP_NAME) for $(ENVIRONMENT_NAME)
	yarn
	NODE_ENV=production node ./scripts/build-styleguide-s3.js

.PHONY: build-styleguide-sg-prod-beta-release-deploy-s3
build-styleguide-sg-prod-beta-release-deploy-s3:
	echo build app $(APP_NAME) for $(ENVIRONMENT_NAME)
	yarn
	NODE_ENV=production node ./scripts/build-styleguide-s3.js