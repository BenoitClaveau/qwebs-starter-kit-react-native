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
react-native link react-native-vector-icons
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

Fix The SDK Build Tools revision (23.0.1) is too low for project ':react-native-vector-icons'. Minimum required is 25.0.0

>node_modules\react-native-vector-icons\android\build.gradle
>modify android buildToolsVersion to 25.0.0

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

## Tools

[https://randomuser.me/](https://randomuser.me/)