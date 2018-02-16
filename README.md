# react_web-native
This is a test of how could I share most of the code between react and react-native apps, using a shared module for all the common things
* native - Project created with `react-native init` command
* web - Project created with `create-react-app` command
* shared - Simple project to export shared logic, method and components. Since uses ES6 for react modules, the code is transpiled


## Set up
Install yarn https://yarnpkg.com/lang/en/docs/install/

Execute `yarn install` in the project folder

## Run for development
This will run `build:watch` on the shared project and will start a web server for the web project. Any changes in any of the projects should update the browser

Execute `yarn run-web-dev` in the project folder
