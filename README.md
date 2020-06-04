Meme Storage is a React Native application for both iOS and Android applications

## Technologies Used

* React Native with Expo
* Oauth 2.0 for Google Sign In
* [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv)
* [React-Navigation](https://reactnavigation.org/)


## Major Issues Encountered & Solutions

* Invariant Violation: requireNativeComponent: “RNCSafeAreaProvider” was not found in the UIManager
    *  Solution: ran `expo upgrade` to make sure all package versions were compatible with latest version of expo - solution found [here](https://stackoverflow.com/questions/61967017/invariant-violation-requirenativecomponent-rncsafeareaprovider-was-not-found)


* Error 400: redirect_uri_mismatch
    * Solution: Had to reformat how Google was accepting Client Id with platform specific logic - solution found [here](https://github.com/expo/expo/issues/3540#issuecomment-466709365)

