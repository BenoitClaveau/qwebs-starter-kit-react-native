# ada-app-react-native

ADA app on your mobile phone

## React Native installation

[https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)

1. NodeJS
2. Python 2
3. JDK 8

Add path of npm module (C:\Users\your user name\AppData\Roaming\npm) to user system variables.

```shell
npm install -g react-native-cli
```

Install Android Studio

Add ANDROID_HOME C:\Users\BenoitClaveau\AppData\Local\Android\sdk to user system variables.

## Run an Android app

### Start a virtual device

#### Using Android Studio

1. Start Android Studio.
2. Go to Tools > Android > AVD Manager.
3. Create a virtual device like Nexus 5.
4. Start the virtual device.
5. Close Android Studio.

#### Using command line

List all virtual devices

```shell
C:\Android\sdk\tools\bin\avdmanager list avds
```

Start a virtual device

```shell
C:\Android\sdk\emulator\emulator.exe -avd Nexus_5_API_25
```

#### Using npm script

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

### Start the app

```shell
cd App
react-native run-android
```

## Run an IOS app

### Start the app

```shell
cd App
react-native run-ios
```

### Debug the app

#### Windows

1. Add the PATH environment variable:

> C:\Android\sdk\platform-tools (for adb)
> C:\Android\sdk\emulator (for emulator)
> C:\Android\sdk\tools\bin (for advmanager)

2. Install [Visual Source Code](https://code.visualstudio.com) and the [React Native Tools extension](https://github.com/Microsoft/vscode-react-native).
3. cd App.
4. Open a new Visual Source Code.
5. Create a [.babelrc file](https://github.com/Microsoft/vscode-react-native)
6. Setup a React Native: Debug Android
7. Open http://localhost:8081/ to load react packager
8. Start debugger or press F5

or

After the emulator is running and the app on it, press the Menu button and then select "Debug JS Remotely" or "Debug in Chrome" (It depends the emulator using). You can see the next image as reference: emulator with steps image
A new Chrome Tab will appears. You must press Ctrl + ⇧J to show the Developer tools and start tracking the debug steps. See this image as reference

## Installation

### Running your app on Android devices

[https://facebook.github.io/react-native/docs/running-on-device.html](https://facebook.github.io/react-native/docs/running-on-device.html)

```shell
adb devices
```

Generate and run a Release build

1. [Generating Signed APK](https://facebook.github.io/react-native/docs/signed-apk-android.html)

Open a CMD console as Administrator
```shell
cd "C:\Program Files\Java\jdk1.8.0_121\bin"
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

création du fichier my-release-key.keystore

* Modify android/gradle.properties
* Modify android/app/build.gradle
* Compile cd android && ./gradlew assembleRelease
* android/app/build/outputs/apk/app-release.apk will be generated
* Enabling Proguard to reduce the size of the APK (optional)

#### Run on mobile

```shell
react-native run-android --variant=release
```

#### Install on mobile

```shell
adb install android/app/build/outputs/apk/app-release.apk
```
#### Uninstall app

Settings > Application manager > App > Unistall

## React Native Components

### Redux

Open a CMD console as Administrator
```shell
cd App
npm install --save redux
npm install --save react-redux
```

Exemples:

[https://github.com/cosmicjs/react-native-twitter-clone](https://github.com/cosmicjs/react-native-twitter-clone)

### Icons

[https://github.com/oblador/react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

Open a CMD console as Administrator
```shell
cd App
npm install --save react-native-vector-icons
```

#### Error: Build Tools revision (23.0.1) is too low for project

1. Edit node_modules/react-native-vector-icons/android/build.gradle
2. In the section of buildToolsVersion: 23.0.1.
3. Change it into 25.0.0

### Navigation

[https://reactnavigation.org/docs/intro/](https://reactnavigation.org/docs/intro/)

Open a CMD console as Administrator
```shell
cd App
npm install --save react-navigation
```

How use redux and drawer  ?
https://github.com/aksonov/react-native-router-flux/blob/master/docs/OTHER_INFO.md#drawer-side-menu-integration


### Performance for event handlers

Open a CMD console as Administrator
```shell
cd App
npm install --save react-timer-mixin
```

```js
import {Timer} from 'react-timer-mixin';
class C extends Component {
  componentWillUnmount () {
    TimerMixin.componentWillUnmount.call(this);
  }

  foo () {
    TimerMixin.requestAntimationFrame.call(this, () => { ... }, 1000);
  }
}
```

Or 

```js
import {Timer} from 'react-timer-mixin';

class MyComponent extends Timer(React.Component) {
...
}
```

### Install rnpm

```shell
npm install rnpm -g
rnpm link
```




