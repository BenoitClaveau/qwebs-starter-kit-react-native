React Native
============

* [Installation](./docs/INSTALL.md)  
* [Components](./docs/COMPONENTS.md)  
* [React](./docs/REACT.md)
* [Unit tests](./docs/TESTS.md)
* [npm](./docs/NPM.md)

## Create project for Expo

1. npm install -g create-react-native-app
1. create-react-native-app <application name> //WARNING application name couldn't be changed.

## Eject project to debug via Android Studio

1. Create an expo application: create-react-native-app <application name>
1. npm run eject

## Start via Expo

1. npm install -g exp
1. exp start (--clear ro reset cache)
1. scan barcode

## Debug via Android Studio

1. npm run nexus
1. react-native start
1. attach packager to debugger via Visual Code Source
1. react-native run-android
1. active remote js debugger and hot reload via Ctrl^M on emulator