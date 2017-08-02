# NPM cli

## List all version

npm show <module_name> versions --json

## Get latest version

npm show <module_name> version --json

## Check for outdated packages

npm outdated --global

## Start server and application

Use concurrently to start serveral node_modules.

concurrently \"react-native-scripts start\" \"node appserver.js\"