# qwebs-starter-kit-react-native

 [![NPM][npm-image]][npm-url]
 
Starter kit to create a [https://github.com/facebook/react-native](React Native Application) and [https://www.npmjs.com/package/qwebs](Qwebs) as server.

## Installation

```shell
git clone https://github.com/BenoitClaveau/qwebs-starter-kit-react-native.git
cd qwebs-starter-kit-react-native.git
npm install
```

## Start

Run server on http://localhost:3000

```shell
node server.js
```

Run app

```shell
cd App
react-native run-ios
react-native run-android
```

## Tests

Run server tests

```shell
npm test
```

## Build polymer

```shell
npm install gulp -g
gulp prod
```

[npm-image]: https://img.shields.io/npm/v/qwebs-starter-kit-react-native.svg
[npm-url]: https://npmjs.org/package/qwebs-starter-kit-react-native
