# ionic-e2e-react-webdriverio-appium
Example ReactJS App for Ionic v6 E2E Testing using WebdriverIO and Appium to Test On Device 

## Overview
Looking to integrate e2e testing a an ionic-framework application and the [sample provided by Ionic](https://github.com/ionic-team/ionic-e2e-example) in written in Angular and it is based on cordova and not capacitor so I have started this project to figure things out

- sample based on the list template provided by ionic
- source code is in react js
- tests currently work in android emulator and in the webbrowser
- This still a work in progress but it is based on latest versions on Ionic and Capacitor so it shoul get on started better than the other sample
- The project hasn't been cleaned up, there are still some artifacts from the original Ionic Project

## IOS Quirk
For the application path for the IOS application, you will need to manually set that based on the specific device/emulator that are deploying to. unlike android it appears that the IOS build is directly to the device.

if you look at line 32 in the `wdio.ios.config.ts` you will see the path that you will need to change. To get the specific path i have run the build command with the `--verbose` flag to output the appropriate information
```
ionic capacitor run ios --target 1DB27F13-4EF3-4D45-A67B-88C69B53EF84 --verbose
```

## Android setup

If you're starting from scratch, you'll need to set appium up on your system.

Generally, you should follow the appium docs, but here's the short version.

Install appium globally:

`npm i --location=global appium`

Install the Android driver:

`appium driver install uiautomator2`

Make sure you have a device created in Android Studio's Device Manager.

Build the app as an APK and launch it on the device in the simulator.

In `wdio.android.config.ts`, modify `appium:deviceName` to be your device's exact name, and change `appium:platformVersion` to your device's Android version.

Also ensure the `appium:app` path is correct for your system.

You can now run the tests:

'npm run ionic-e2e:run:android`

## iOS setup

Make sure you have appium installed globally:

`npm i --location=global appium`

Install the iOS driver:

`appium driver install xcuitest`

You now need to set up code signing for the `webdriveragent` app used by the xcuitest driver.

If you do not do this, all your builds will fail with Error 65.

First, open the Xcode project:

```
open ~/.appium/node_modules/appium-xcuitest-driver/node_modules/appium-webdriveragent/WebDriverAgent.xcodeproj
```

Then, try to build the project. It will fail and say signing needs to be configured. Click the error message and set up signing for your paid Apple Developer account team.

Save the project and exit.

Next, in Xcode, create a device to use for simulation. Or attach a physical iPhone for testing.

Now list the devices with Xcode command line tools:

`xctrace list devices`

In `wdio.ios.config.ts`, you will need to update the following:

* appium:deviceName: Use your device's name as listed.
* appium:udid: Add the device ID as listed.
* appium:platformVersion: Specify the version of iOS used by the device.

You should now be able to run the tests:

'npm run ionic-e2e:run:ios`

## References
- [WebdriverIO](https://webdriver.io/)
- [Appium](https://appium.io/)
