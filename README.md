# qwebs-starter-kit-react-native

 [![NPM][npm-image]][npm-url]
 
Starter kit to create a [https://github.com/facebook/react-native](React Native Application) and [https://www.npmjs.com/package/qwebs](Qwebs) as server.

## Installation

[https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)

```shell
git clone https://github.com/BenoitClaveau/qwebs-starter-kit-react-native.git
cd qwebs-starter-kit-react-native.git
npm install
```

## Run API server on http://localhost:3000

```shell
node server.js
```

## Run an Android app

### Start a virtual device

Start Android Studio.
Go to Tools > Android > AVD Manager.
Start or create a virtual device like Nexus 5.
Close Android Studio.

### Start the app

```shell
cd App
react-native run-android
```

## Run an IOS app

### start the app

```shell
cd App
react-native run-ios
```



[npm-image]: https://img.shields.io/npm/v/qwebs-starter-kit-react-native.svg
[npm-url]: https://npmjs.org/package/qwebs-starter-kit-react-native
