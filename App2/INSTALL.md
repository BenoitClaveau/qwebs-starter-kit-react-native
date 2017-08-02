## React Native installation

[https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)

1. [NodeJS](https://nodejs.org/en/download/)
2. [Python 2](https://www.python.org/downloads/)
3. [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

Add path of npm module C:\Users\your user name\AppData\Roaming\npm to user system variables.

```shell
npm install -g react-native-cli
```

[Download](https://developer.android.com/studio/index.html) and Install Android Studio

Add ANDROID_HOME C:\Users\BenoitClaveau\AppData\Local\Android\sdk to user system variables.

## Run an Android app

### Using Android Studio

#### Installation

##### Emulator

1. Start Android Studio.
1. Go to Tools > Android > SDK Manager.
1. Click on Show package details at bottom right
  1. Google APIs
  1. Android SDK Platform 23
  1. Intel x86 Atom_64 System Image
  1. Google APIs Intel x86 Atom_64 System Image
1. Go to Tools > Android > AVD Manager.
1. Create a virtual device like Nexus 5.
1. Start the virtual device.
1. Close Android Studio.

##### Visual Studio Code

1. Add the PATH environment variable:
> C:\Android\sdk\platform-tools (for adb)
> C:\Android\sdk\emulator (for emulator)
> C:\Android\sdk\tools\bin (for advmanager)
1. Install [Visual Source Code](https://code.visualstudio.com) and the [React Native Tools extension](https://github.com/Microsoft/vscode-react-native).
1. cd App.
1. Open a new Visual Source Code.
1. Create a [.babelrc file](https://github.com/Microsoft/vscode-react-native)
1. Setup a React Native: Attach to packager
1. Press the Menu button of the emulator (Ctrl^M) and then select "Debug JS Remotely" or "Debug in Chrome"

#### Debug

1. Start a virtual device (Nexus 5)

```shell
npm run nexus
```
1. Start the packager

```shell
react-native start
or
react-native start --port 8081
```
1. Attach VSCode to packager and start the debugger

```launch.json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Attach to packager",
            "program": "${workspaceRoot}/.vscode/launchReactNative.js",
            "type": "reactnative",
            "request": "attach",
            "sourceMaps": true,
            "outDir": "${workspaceRoot}/.vscode/.react"
        }
    ]
}
```
1. Press the Menu button of the emulator (Ctrl^M) and then select "Debug JS Remotely" or "Debug in Chrome"
1. Start the application

```shell
react-native run-android
```

### Debug in manually in chrome

1. Open packager

```shell
open http://localhost:8081
open http://localhost:8081/debugger-ui
```

### Commands line

List all virtual devices

```shell
C:\Android\sdk\tools\bin\avdmanager list avds
```

Start a virtual device

```shell
C:\Android\sdk\emulator\emulator.exe -avd Nexus_5_API_25
```

### Create a npm script to open device emulator

Add a npm script in package.json

```json
  "scripts": {
    "nexus": "C:\\Android\\sdk\\emulator\\emulator.exe -avd Nexus_5_API_25"
  },
```

Start a virtual device

```shell
npm run nexus
```

## Run an iOS app

```shell
cd App
react-native run-ios
```

## Run via Expo

### Prerequisites

Downgrade npm to v4

```shell
npm install -g npm@4
```

### Install

```shell
npm install -g exp
npm install --save expo
npm install jest-expo --save-dev
```

WARNING: Start exp in a cmd console not directly in Visual Studio Code otherwise you'll not be able to get the qrcode.

### Start

```shell
exp start
```

#### Clear cache

```shell
exp start --clear
```

### ERROR: undefined is not an object (evaluating 'regeneratorRuntime.mark')

Downgarde babel-preset-react-native from 2.1.0 to 2.0.0

```shell
del ./node_modules
npm cache clean --force
npm i babel-preset-react-native@2.0.0 -D -S
npm install
exp start --clear
```
