## Keystore

Generated with the following command

```
$ keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

---

## Development Web and Mobile (Recommended):

```
  terminal 1
  $ yarn start

  terminal 2
  $ yarn web
```

Go to http://localhost:19002/ then scan QR from expo

## Development Android Only:

```
  terminal 1
  $ yarn start

  terminal 2
  $ adb reverse tcp:8081 tcp:8081
  $ yarn android
```

## Build android:

```
  terminal 1
  \$ yarn start

  terminal 2
  $ cd android
  $ ./gradlew bundleRelease
```

output in `android/app/build/outputs/bundle/release/app-release.aab`

## Build ios:

```
react-native bundle --dev false --entry-file index.js --bundle-output ios/main.jsbundle --platform ios
OR
react-native run-ios --configuration=release
```

### Update Version

change versionCode, versionName: android/app/build.gradle
