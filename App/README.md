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

1. Open packager
```shell
open http://localhost:8081
```

1. Start the appliaction
```shell
react-native run-android
```

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

#### Command line

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

Start packager

react-native.cmd start --port 8081

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

## Components

### Navigation

[https://reactnavigation.org/docs/intro/](https://reactnavigation.org/docs/intro/)

Open a CMD console as Administrator
```shell
cd App
npm install react-navigation --save
```

### Icons

Open a CMD console as Administrator
```shell
cd App
npm install react-native-vector-icons --save
```

And follow instructions for Gradle (https://github.com/oblador/react-native-vector-icons)[https://github.com/oblador/react-native-vector-icons]

#### Android

##### Option: With Gradle (recommended)

This method has the advantage of fonts being copied from this module at build time so that the fonts and JS are always in sync, making upgrades painless.

Edit `android/app/build.gradle` ( NOT `android/build.gradle` ) and add the following:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

To customize the files being copied, add the following instead:

```gradle
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

##### Option: Manually

* Copy the contents in the `Fonts` folder to `android/app/src/main/assets/fonts` (*note lowercase font folder*). 

###### Integrating library for `getImageSource` and `ToolbarAndroid` support

These steps are optional and only needed if you want to use the `Icon.getImageSource` function or using custom icons in the `Icon.ToolbarAndroid` component. 

* Edit `android/settings.gradle` to look like this (without the +):

  ```diff
  rootProject.name = 'MyApp'

  include ':app'

  + include ':react-native-vector-icons'
  + project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
  ```

* Edit `android/app/build.gradle` (note: **app** folder) to look like this: 

  ```diff
  apply plugin: 'com.android.application'

  android {
    ...
  }

  dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile "com.android.support:appcompat-v7:23.0.1"
    compile "com.facebook.react:react-native:+"  // From node_modules
  + compile project(':react-native-vector-icons')
  }
  ```

* Edit your `MainApplication.java` (deep in `android/app/src/main/java/...`) to look like this (note **two** places to edit):

  ```diff
  package com.myapp;

  + import com.oblador.vectoricons.VectorIconsPackage;

  ....

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage()
  +   , new VectorIconsPackage()
      );
    }

  }
  ```

*Note: If you're using React Native (Android) <= 0.17, [follow this instructions](https://github.com/oblador/react-native-vector-icons/blob/2fe5b97afa849652215e3258189e8ca3ea775c53/README.md#integrating-library-for-getimagesource-support)*

### Redux
```shell
cd App
npm install redux --save
npm install react-redux --save
```

(https://github.com/happypoulp/redux-tutorial)[https://github.com/happypoulp/redux-tutorial]

### Redux router 

```shell
cd App
react-native-router-flux
```

[https://github.com/aksonov/react-native-router-flux/blob/master/docs/API_CONFIGURATION.md](RNRF API)

Create the router in src/pages/router.js to defined your routes accessible from Action.[key] 

exemple:
<Scene key="login" => show by calling Actions.login

(https://www.youtube.com/watch?v=NOgoU95FrrQ)[tutorial]


[http://densitylabs.io/blog/adding-authentication-to-your-react-native-app](http://densitylabs.io/blog/adding-authentication-to-your-react-native-app)

# Tools

[https://randomuser.me/](https://randomuser.me/)