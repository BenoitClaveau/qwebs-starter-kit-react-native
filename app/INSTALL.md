# React Native

Application

## React Native installation

[https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)

1. NodeJS
2. Python 2
3. JDK 8

Add path of npm module (C:\Users\your user name\AppData\Roaming\npm) to user system variables.

```shell
npm install -g react-native-cli
```

[Download](https://developer.android.com/studio/index.html) and Install Android Studio

Add ANDROID_HOME C:\Users\BenoitClaveau\AppData\Local\Android\sdk to user system variables.

## Run an Android app

### Start a virtual device

#### Using Android Studio

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

>After the emulator is running and the app on it, press the Menu button (Ctrl M) and then select "Debug JS Remotely" or "Debug in Chrome"

1. Attach VSCode to packager adn start the debugger
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
}```

1. Start the appliaction
```shell
react-native run-android
```

#### Debug in manually in chrome

1. Open packager
```shell
open http://localhost:8081
open http://localhost:8081/debugger-ui
```

#### Command line

List all virtual devices

```shell
C:\Android\sdk\tools\bin\avdmanager list avds
```

Start a virtual device

```shell
C:\Android\sdk\emulator\emulator.exe -avd Nexus_5_API_25
```

#### Create a npm script to open device emulator

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

### Android

```shell
cd App
react-native run-android
```

### IOS

```shell
cd App
react-native run-ios
```

### Debug with Visual Studio Code

1. Add the PATH environment variable:

> C:\Android\sdk\platform-tools (for adb)
> C:\Android\sdk\emulator (for emulator)
> C:\Android\sdk\tools\bin (for advmanager)

2. Install [Visual Source Code](https://code.visualstudio.com) and the [React Native Tools extension](https://github.com/Microsoft/vscode-react-native).
3. cd App.
4. Open a new Visual Source Code.
5. Create a [.babelrc file](https://github.com/Microsoft/vscode-react-native)
6. Setup a React Native: Attach to packager

After the emulator is running and the app on it, press the Menu button and then select "Debug JS Remotely" or "Debug in Chrome" (It depends the emulator using). You can see the next image as reference: emulator with steps image
A new Chrome Tab will appears. You must press Ctrl + ⇧J to show the Developer tools and start tracking the debug steps. See this image as reference

## Run via Expo


### Install

```shell
npm install -g exp
npm install --save expo
```

# Start

```shell
exp start
```