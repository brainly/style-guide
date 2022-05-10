.PHONY: sg-storybook-deploy-s3
sg-storybook-deploy-s3:
	yarn
	yarn build
	NODE_ENV=production node ./scripts/build-storybook-s3.js

.PHONY: sg-prod-deploy-s3
sg-prod-deploy-s3:
	yarn
	NODE_ENV=production node ./scripts/build-styleguide-s3.js

.PHONY: sg-prod-beta-release-deploy-s3
sg-prod-beta-release-deploy-s3:
	yarn
	NODE_ENV=production node ./scripts/build-styleguide-s3.js