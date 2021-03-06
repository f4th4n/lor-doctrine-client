## Keystore

Generated with the following command

```
$ keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

---

## Development Web and Mobile:

```
$ expo start
```

Go to http://localhost:19002/

For mobile click Run on Android device/emulator. If not working, run \$ adb reverse tcp:8081 tcp:8081
For web click Run in web browser

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

### Fonts

```
oswald
  like lor website font
pusab
  game, 8 bit
friz
  like lol font
```
